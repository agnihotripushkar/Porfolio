import { supabase } from './supabase';

/**
 * Homepage: only is_featured projects, sorted by home_order.
 */
export async function getFeaturedProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('is_featured', true)
    .eq('is_published', true)
    .order('home_order', { ascending: true, nullsFirst: false });

  if (error) {
    console.error('Error fetching featured projects:', error.message);
    return [];
  }

  return data || [];
}

/**
 * Homepage featured projects grouped by category.
 */
export async function getFeaturedProjectsByCategory() {
  const data = await getFeaturedProjects();
  return groupByCategory(data);
}

/**
 * /projects page: all published projects, sorted by display_order then created_at.
 */
export async function getAllProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('is_published', true)
    .order('display_order', { ascending: true })
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching all projects:', error.message);
    return groupByCategory([]);
  }

  return groupByCategory(data || []);
}

/**
 * /projects page: all published projects as flat array.
 */
export async function getFlatProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('is_published', true)
    .order('display_order', { ascending: true })
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching flat projects:', error.message);
    return [];
  }

  return data || [];
}

/**
 * Fetch projects by category (published only).
 */
export async function getProjectsByCategory(category) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('category', category)
    .eq('is_published', true)
    .order('display_order', { ascending: true })
    .order('created_at', { ascending: false });

  if (error) {
    console.error(`Error fetching ${category}:`, error.message);
    return [];
  }

  return data || [];
}

function groupByCategory(data) {
  return {
    published_apps:     data.filter(p => p.category === 'published_apps'),
    personal_projects:  data.filter(p => p.category === 'personal_projects'),
    freelance:          data.filter(p => p.category === 'freelance'),
    contract_work:      data.filter(p => p.category === 'contract_work'), // legacy fallback
  };
}
