/**
 * set_order.js — updates display_order for each project by title
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

const ORDER = [
  { title: 'GoalFocus',                        display_order: 1  },
  { title: 'F1Companion',                      display_order: 2  },
  { title: 'GameKMP',                          display_order: 3  },
  { title: 'F1Tracker',                        display_order: 4  },
  { title: 'BuilderPost',                      display_order: 5  },
  { title: 'JainReflex',                       display_order: 6  },
  { title: 'AudioMemo',                        display_order: 7  },
  { title: 'YogSadhna',                        display_order: 8  },
  { title: 'Claude-Skills-playstore-screenshots', display_order: 9  },
  { title: 'LamaEstate',                       display_order: 10 },
  { title: 'system-design-interviewer-pacer',  display_order: 11 },
];

async function run() {
  console.log('Updating display_order...\n');

  for (const { title, display_order } of ORDER) {
    const { error } = await supabase
      .from('projects')
      .update({ display_order })
      .ilike('title', title); // case-insensitive match

    if (error) {
      console.log(`  ✗ ${title} — ${error.message}`);
    } else {
      console.log(`  ✓ ${title} → ${display_order}`);
    }
  }

  console.log('\nDone!');
}

run().catch(console.error);
