import { supabase } from './supabase';

/**
 * Fetches projects from Supabase filtered by category.
 * @param {string} category - The category to filter by ('published_apps', 'personal_projects', 'contract_work')
 * @returns {Promise<Array>} - Array of projects
 */
export async function getProjectsByCategory(category) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('category', category)
    .order('display_order', { ascending: true })
    .order('created_at', { ascending: false });

  if (error) {
    console.error(`Error fetching ${category}:`, error.message);
    return [];
  }

  return data;
}

/**
 * Fetches all projects and groups them by category.
 * @returns {Promise<Object>} - Object with categories as keys
 */
export async function getAllProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Error fetching all projects:', error.message);
    return {
      published_apps: [],
      personal_projects: [],
      contract_work: []
    };
  }

  return {
    published_apps: data.filter(p => p.category === 'published_apps'),
    personal_projects: data.filter(p => p.category === 'personal_projects'),
    contract_work: data.filter(p => p.category === 'contract_work')
  };
}
/**
 * Fetches all projects as a flat array.
 * @returns {Promise<Array>} - Array of all projects
 */
export async function getFlatProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Error fetching flat projects:', error.message);
    return [];
  }

  return data || [];
}
