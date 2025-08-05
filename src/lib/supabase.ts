import { createClient } from '@supabase/supabase-js'

// These are automatically provided by Lovable's Supabase integration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Message = {
  id?: string
  name: string
  email: string
  message: string
  created_at?: string
}