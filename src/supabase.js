import { createClient } from "@supabase/supabase-js";

// These two values are safe to be public. They only allow what the
// database safety rules (Row Level Security) permit.
const SUPABASE_URL =
  process.env.REACT_APP_SUPABASE_URL || "https://jfnoucforcmskcyxhrte.supabase.co";
const SUPABASE_KEY =
  process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_ZpwdJUa3TaliK27WYM2mDQ_W93LnTom";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
