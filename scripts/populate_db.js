/**
 * populate_db.js
 *
 * Auto-fetches all public GitHub repos and syncs them to Supabase.
 *
 * Usage:
 *   npm run sync-repos:preview   → dry run, see all data, saves repos-preview.json
 *   npm run sync-repos           → push to DB (skips repos in repos-skip.json)
 *
 * Requires env vars (auto-loaded from .env.local):
 *   NEXT_PUBLIC_SUPABASE_URL
 *   NEXT_PUBLIC_SUPABASE_ANON_KEY
 *   GITHUB_TOKEN  (optional but recommended — avoids 60 req/hr rate limit)
 */

const { createClient } = require('@supabase/supabase-js');
const https = require('https');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const IS_DRY_RUN = process.argv.includes('--dry-run');
const SCRIPTS_DIR = __dirname;
const SKIP_FILE = path.join(SCRIPTS_DIR, 'repos-skip.json');
const PREVIEW_FILE = path.join(SCRIPTS_DIR, 'repos-preview.json');

// ---------------------------------------------------------------------------
// Load .env.local
// ---------------------------------------------------------------------------
function loadEnvLocal() {
  const envPath = path.join(SCRIPTS_DIR, '..', '.env.local');
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
    if (!process.env[key]) process.env[key] = val;
  }
}
loadEnvLocal();

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const GITHUB_USERNAME = 'agnihotripushkar';

// Always-skip repos (profile/meta, not real projects)
const ALWAYS_SKIP = new Set([GITHUB_USERNAME, `${GITHUB_USERNAME}.github.io`]);

// Load user-maintained skip list from repos-skip.json
function loadSkipList() {
  if (!fs.existsSync(SKIP_FILE)) return new Set();
  try {
    const data = JSON.parse(fs.readFileSync(SKIP_FILE, 'utf-8'));
    return new Set(data.map(r => r.toLowerCase()));
  } catch {
    console.warn('Warning: could not parse repos-skip.json');
    return new Set();
  }
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const githubToken = process.env.GITHUB_TOKEN;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.warn('Warning: SUPABASE_SERVICE_ROLE_KEY not set, falling back to anon key (writes may fail due to RLS)\n');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// ---------------------------------------------------------------------------
// HTTP helpers
// ---------------------------------------------------------------------------
function fetchJson(url, extraHeaders = {}) {
  return new Promise((resolve, reject) => {
    const opts = {
      headers: {
        'User-Agent': 'portfolio-sync-script',
        'Accept': 'application/vnd.github+json',
        ...extraHeaders,
      },
    };
    if (githubToken) opts.headers['Authorization'] = `Bearer ${githubToken}`;
    https.get(url, opts, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => {
        if (res.statusCode === 200) {
          try { resolve(JSON.parse(data)); } catch { resolve(null); }
        } else {
          resolve(null);
        }
      });
    }).on('error', reject);
  });
}

function fetchText(url) {
  return new Promise((resolve) => {
    const opts = { headers: { 'User-Agent': 'portfolio-sync-script' } };
    if (githubToken) opts.headers['Authorization'] = `Bearer ${githubToken}`;
    https.get(url, opts, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve(res.statusCode === 200 ? data : null));
    }).on('error', () => resolve(null));
  });
}

// ---------------------------------------------------------------------------
// GitHub helpers
// ---------------------------------------------------------------------------
async function getAllPublicRepos() {
  let repos = [], page = 1;
  while (true) {
    const batch = await fetchJson(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?type=public&per_page=100&page=${page}`
    );
    if (!batch || batch.length === 0) break;
    repos = repos.concat(batch);
    if (batch.length < 100) break;
    page++;
  }
  return repos;
}

async function getRepoLanguages(repoName) {
  const data = await fetchJson(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/languages`);
  return data ? Object.keys(data) : [];
}

async function getRepoTopics(repoName) {
  const data = await fetchJson(
    `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/topics`,
    { Accept: 'application/vnd.github.mercy-preview+json' }
  );
  return data?.names ?? [];
}

async function getReadme(repoName) {
  for (const branch of ['main', 'master']) {
    const content = await fetchText(
      `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoName}/${branch}/README.md`
    );
    if (content) return content.slice(0, 4000);
  }
  return null;
}

// ---------------------------------------------------------------------------
// Classification helpers
// ---------------------------------------------------------------------------
function determineProjectType(repo, languages, topics) {
  const allText = `${repo.name} ${repo.description || ''} ${topics.join(' ')} ${languages.join(' ')}`.toLowerCase();

  if (allText.includes('extension') || allText.includes('chrome')) return 'Extension';
  if (allText.includes('flutter') || allText.includes('dart')) return 'Flutter';
  if (allText.includes('react native') || allText.includes('expo')) return 'React Native App';
  if (allText.includes('kmp') || allText.includes('kotlin multiplatform') || allText.includes('multiplatform')) return 'KMP';
  if (allText.includes('android') || allText.includes('jetpack') || allText.includes('compose') ||
      (languages.includes('Kotlin') && !allText.includes('spring'))) return 'App';
  if (allText.includes('ios') || allText.includes('swiftui') || allText.includes('widgetkit') ||
      allText.includes('uikit') || languages.includes('Swift')) return 'App';
  if (allText.includes('spring') || allText.includes('backend') || allText.includes('server')) return 'Github';
  if (allText.includes('react') || allText.includes('next') || allText.includes('mern') ||
      allText.includes('website') || allText.includes('web') || repo.name.endsWith('.io') ||
      languages.includes('TypeScript') || languages.includes('JavaScript')) return 'Web App';
  if (allText.includes('leetcode') || allText.includes('algo') || allText.includes('dsa') ||
      allText.includes('aoc') || allText.includes('advent')) return 'DSA';
  return 'Github';
}

function determineCategory(repoName, projectType) {
  const name = repoName.toLowerCase();

  // Only explicitly listed repos get published_apps — never auto-promote by type
  const publishedRepos = new Set([
    'goalfocus',
    'f1companion',
    'f1-companion',
    'system-design-interviewer-pacer',
  ]);
  const contractRepos = new Set([
    'jin-reflexology',
    'yogsadhna',
    'yogsadhnavarga',
  ]);

  if (publishedRepos.has(name)) return 'published_apps';
  if (contractRepos.has(name)) return 'contract_work';
  return 'personal_projects';
}

function buildTechStack(languages, topics, repo) {
  const stack = new Set(languages);
  for (const t of topics.filter(t => !['portfolio', 'learning', 'practice', 'project'].includes(t))) {
    stack.add(t.charAt(0).toUpperCase() + t.slice(1));
  }
  const desc = (repo.description || '').toLowerCase();
  if (desc.includes('ktor')) stack.add('Ktor');
  if (desc.includes('koin')) stack.add('Koin');
  if (desc.includes('coil')) stack.add('Coil');
  if (desc.includes('retrofit')) stack.add('Retrofit');
  if (desc.includes('room')) stack.add('Room');
  if (desc.includes('firebase')) stack.add('Firebase');
  if (desc.includes('mvvm')) stack.add('MVVM');
  if (desc.includes('compose')) stack.add('Jetpack Compose');
  if (desc.includes('spring')) stack.add('Spring Boot');
  if (desc.includes('mern')) { ['MongoDB','Express','React','Node.js'].forEach(t => stack.add(t)); }
  if (desc.includes('paging')) stack.add('Paging 3');
  if (desc.includes('datastore')) stack.add('DataStore');
  return [...stack].filter(Boolean);
}

// ---------------------------------------------------------------------------
// Pretty print for dry run
// ---------------------------------------------------------------------------
function printPreview(newItems, existingItems, skippedList) {
  const divider = '─'.repeat(72);

  // ── New repos (need review) ──────────────────────────────────────────────
  if (newItems.length === 0) {
    console.log('\n No new repos to add — everything is already in the DB.');
  } else {
    console.log('\n' + '═'.repeat(72));
    console.log(` NEW REPOS  (${newItems.length} not yet in DB — review these)`);
    console.log('═'.repeat(72));

    for (let i = 0; i < newItems.length; i++) {
      const p = newItems[i];
      console.log(`\n[${i + 1}/${newItems.length}] ${p.title}`);
      console.log(divider);
      console.log(`  category     : ${p.category}`);
      console.log(`  project_type : ${p.project_type}`);
      console.log(`  description  : ${p.description}`);
      console.log(`  tech_stack   : ${p.tech_stack.join(', ') || '(none detected)'}`);
      console.log(`  github_link  : ${p.github_link}`);
      console.log(`  live_link    : ${p.live_link || '(none)'}`);
      console.log(`  has_readme   : ${p.long_description ? 'yes' : 'no'}`);
    }
  }

  // ── Already in DB ────────────────────────────────────────────────────────
  if (existingItems.length > 0) {
    console.log('\n' + '═'.repeat(72));
    console.log(` ALREADY ON PORTFOLIO  (${existingItems.length} — will be updated on next sync)`);
    console.log('═'.repeat(72));
    for (const p of existingItems) console.log(`  • ${p.title}`);
  }

  // ── Skipped ──────────────────────────────────────────────────────────────
  if (skippedList.length > 0) {
    console.log('\n' + '═'.repeat(72));
    console.log(` SKIPPED  (${skippedList.length} — in repos-skip.json)`);
    console.log('═'.repeat(72));
    for (const name of skippedList) console.log(`  ✗ ${name}`);
  }

  console.log('\n' + '═'.repeat(72));
  console.log(` SUMMARY: ${newItems.length} new · ${existingItems.length} existing · ${skippedList.length} skipped`);
  console.log('═'.repeat(72));
  console.log(`\n Full data saved to: scripts/repos-preview.json`);
  console.log(` To skip a repo, add its name to: scripts/repos-skip.json`);
  console.log(` Then run:  npm run sync-repos\n`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function run() {
  const userSkipList = loadSkipList();

  console.log(`${IS_DRY_RUN ? '[DRY RUN] ' : ''}Fetching public repos for @${GITHUB_USERNAME}...`);
  const allRepos = await getAllPublicRepos();
  const toProcess = allRepos.filter(r => !r.fork && !ALWAYS_SKIP.has(r.name));

  const willSkip = toProcess.filter(r => userSkipList.has(r.name.toLowerCase())).map(r => r.name);
  const willProcess = toProcess.filter(r => !userSkipList.has(r.name.toLowerCase()));

  console.log(`Found ${allRepos.length} repos → ${willProcess.length} to sync, ${willSkip.length} skipped\n`);

  const results = [];

  for (let i = 0; i < willProcess.length; i++) {
    const repo = willProcess[i];
    process.stdout.write(`[${i + 1}/${willProcess.length}] ${repo.name} ...`);

    const [languages, topics, readme] = await Promise.all([
      getRepoLanguages(repo.name),
      getRepoTopics(repo.name),
      getReadme(repo.name),
    ]);

    const projectType = determineProjectType(repo, languages, topics);
    const category = determineCategory(repo.name, projectType);
    const techStack = buildTechStack(languages, topics, repo);

    const projectData = {
      title: repo.name,
      description: repo.description || `${repo.name} — GitHub repository`,
      long_description: readme || repo.description || null,
      category,
      project_type: projectType,
      github_link: repo.html_url,
      live_link: repo.homepage || null,
      tech_stack: techStack,
      features: [],
      display_order: repo.stargazers_count > 0 ? 0 : 99,
      image_url: null,
      is_published: true,
      // is_featured and home_order intentionally omitted — set manually in Supabase dashboard
    };

    results.push(projectData);
    console.log(` ${category} / ${projectType}`);
  }

  // ── Dry run: print + save preview, don't touch DB ──────────────────────
  if (IS_DRY_RUN) {
    // Query DB to separate new vs already-on-portfolio repos
    const { data: dbProjects } = await supabase
      .from('projects')
      .select('github_link, title');
    const dbLinks = new Set((dbProjects || []).map(p => p.github_link));

    const newItems = results.filter(p => !dbLinks.has(p.github_link));
    const existingItems = results.filter(p => dbLinks.has(p.github_link));

    fs.writeFileSync(PREVIEW_FILE, JSON.stringify({ new: newItems, existing: existingItems }, null, 2));
    printPreview(newItems, existingItems, willSkip);
    return;
  }

  // ── Live run: upsert to Supabase ────────────────────────────────────────
  const { data: existing } = await supabase.from('projects').select('id, github_link');
  const existingMap = new Map((existing || []).map(p => [p.github_link, p.id]));

  let inserted = 0, updated = 0, errors = 0;

  for (const projectData of results) {
    const existingId = existingMap.get(projectData.github_link);
    if (existingId) {
      const { error } = await supabase.from('projects').update(projectData).eq('id', existingId);
      if (error) { console.error(`  ERROR updating ${projectData.title}: ${error.message}`); errors++; }
      else updated++;
    } else {
      const { error } = await supabase.from('projects').insert([{ id: crypto.randomUUID(), ...projectData }]);
      if (error) { console.error(`  ERROR inserting ${projectData.title}: ${error.message}`); errors++; }
      else inserted++;
    }
  }

  console.log(`\nDone!  Inserted: ${inserted}  Updated: ${updated}  Errors: ${errors}`);
}

run().catch(console.error);
