import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://egisjciqfzdqofvcygts.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnaXNqY2lxZnpkcW9mdmN5Z3RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MTcxODYsImV4cCI6MjA3MDE5MzE4Nn0.NUewOke7G12SUDgTXyywHaNG-pvrcvOCCr3O0XJzvc4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
