/**
 * set_order.js — updates display_order and home_order for projects by title.
 *
 * display_order : sort within /projects page (per-category)
 * home_order    : sort on homepage (only applies when is_featured = true)
 *
 * Run: node scripts/set_order.js
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

function loadEnvLocal() {
  const envPath = path.join(__dirname, '..', '.env.local');
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

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

/**
 * display_order: controls sort on /projects page.
 * home_order: controls sort on homepage (set null to remove from featured order).
 * is_featured: set true to show on homepage.
 *
 * Lower number = appears first.
 */
const ORDER = [
  // Published apps — featured on homepage
  { title: 'GoalFocus: Pomodoro & Habits',        display_order: 1,  home_order: 1,  is_featured: true  },
  { title: 'F1 Companion',                        display_order: 2,  home_order: 2,  is_featured: true  },
  { title: 'System Design Interview Pacer',       display_order: 3,  home_order: 3,  is_featured: true  },
  // Personal projects — not featured on homepage
  { title: 'GameKMP',                             display_order: 1,  home_order: null, is_featured: false },
  { title: 'F1-Tracker',                          display_order: 2,  home_order: null, is_featured: false },
  { title: 'BuilderPost',                         display_order: 3,  home_order: null, is_featured: false },
  { title: 'AudioMemo',                           display_order: 4,  home_order: null, is_featured: false },
  { title: 'AnimeApp',                            display_order: 5,  home_order: null, is_featured: false },
  { title: 'MortyApp',                            display_order: 6,  home_order: null, is_featured: false },
  { title: 'YogaAI',                              display_order: 7,  home_order: null, is_featured: false },
  { title: 'PriceScope',                          display_order: 8,  home_order: null, is_featured: false },
  { title: 'LamaEstateApp',                       display_order: 9,  home_order: null, is_featured: false },
  { title: 'E-Commerce',                          display_order: 10, home_order: null, is_featured: false },
  { title: 'Claude-Skills-playstore-screenshots', display_order: 11, home_order: null, is_featured: false },
  { title: 'leetcode-kt',                         display_order: 12, home_order: null, is_featured: false },
  { title: 'AdventOfCode',                        display_order: 13, home_order: null, is_featured: false },
];

// Deduplicate by title (last entry wins)
const dedupedOrder = Object.values(
  ORDER.reduce((acc, entry) => { acc[entry.title.toLowerCase()] = entry; return acc; }, {})
);

async function run() {
  console.log('Updating display_order, home_order, is_featured...\n');

  for (const { title, display_order, home_order, is_featured } of dedupedOrder) {
    const { error } = await supabase
      .from('projects')
      .update({ display_order, home_order, is_featured })
      .ilike('title', title);

    if (error) {
      console.log(`  ✗ ${title} — ${error.message}`);
    } else {
      const featuredTag = is_featured ? ` [featured, home #${home_order}]` : '';
      console.log(`  ✓ ${title} → display #${display_order}${featuredTag}`);
    }
  }

  console.log('\nDone!');
}

run().catch(console.error);
