
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkConnection() {
    console.log('Checking Supabase connection...');
    const { data, error } = await supabase.from('projects').select('count', { count: 'exact', head: true });

    if (error) {
        console.error('Error connecting to Supabase:', error.message);
    } else {
        console.log('Successfully connected to Supabase!');
        console.log('Current project count:', data); // data is null for head: true with count, but count is in count property? Wait, select count returns count in count property.
        // Actually, let's just select one item to be sure.
    }

    const { count } = await supabase.from('projects').select('*', { count: 'exact', head: true });
    console.log('Number of projects:', count);
}

checkConnection();
