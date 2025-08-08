
import { supabase } from '@/lib/supabaseClient'

// BlogPost type (keep in sync with data/blogData.ts)
export type BlogPostStatus = 'draft' | 'published';
export interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  youtubeVideoId?: string
  youtubeTitle?: string
  tags?: string[]
  readTime?: number
  author?: string
  status: BlogPostStatus;
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('date', { ascending: false });
  if (error) throw error;
  return data;
}

export async function createBlogPost(post: Omit<BlogPost, 'id'>): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .insert([post])
    .select();
  if (error) throw error;
  return data;
}

export async function updateBlogPost(id: number, updates: Partial<Omit<BlogPost, 'id'>>): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .update(updates)
    .eq('id', id)
    .select();
  if (error) throw error;
  return data;
}

export async function deleteBlogPost(id: number): Promise<boolean> {
  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', id)
  if (error) throw error
  return true
}
