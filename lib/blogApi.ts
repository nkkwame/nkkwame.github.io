import { supabase } from '@/lib/supabaseClient'

export async function fetchBlogPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('date', { ascending: false })
  if (error) throw error
  return data
}

export async function createBlogPost(post) {
  const { data, error } = await supabase
    .from('blog_posts')
    .insert([post])
    .select()
  if (error) throw error
  return data
}

export async function updateBlogPost(id, updates) {
  const { data, error } = await supabase
    .from('blog_posts')
    .update(updates)
    .eq('id', id)
    .select()
  if (error) throw error
  return data
}

export async function deleteBlogPost(id) {
  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', id)
  if (error) throw error
  return true
}
