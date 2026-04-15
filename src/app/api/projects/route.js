import { supabase } from '@/lib/supabase';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const id = searchParams.get('id');

  if (id) {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      return Response.json({ error: 'Project not found' }, { status: 404, headers: CORS_HEADERS });
    }
    return Response.json({ project: data }, { headers: CORS_HEADERS });
  }

  let query = supabase
    .from('projects')
    .select('*')
    .order('display_order', { ascending: true })
    .order('created_at', { ascending: false });

  if (category) {
    const validCategories = ['published_apps', 'personal_projects', 'contract_work'];
    if (!validCategories.includes(category)) {
      return Response.json(
        { error: `Invalid category. Must be one of: ${validCategories.join(', ')}` },
        { status: 400, headers: CORS_HEADERS }
      );
    }
    query = query.eq('category', category);
  }

  const { data, error } = await query;

  if (error) {
    return Response.json({ error: error.message }, { status: 500, headers: CORS_HEADERS });
  }

  return Response.json(
    {
      projects: data,
      total: data.length,
      ...(category && { category }),
    },
    { headers: CORS_HEADERS }
  );
}
