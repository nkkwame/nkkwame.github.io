import { supabase } from '@/lib/supabaseClient'

export async function fetchSubscribers() {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .select('*')
    .order('subscribed_at', { ascending: false })
  if (error) throw error
  return data
}

export async function addSubscriber(email: string) {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .insert([{ email }])
    .select()
  if (error) throw error
  return data
}

export async function deleteSubscriber(id: number) {
  const { error } = await supabase
    .from('newsletter_subscribers')
    .delete()
    .eq('id', id)
  if (error) throw error
  return true
}
