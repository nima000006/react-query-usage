import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://yunomfcgqyzbjrxoasgv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1bm9tZmNncXl6YmpyeG9hc2d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxMDgzNjIsImV4cCI6MjA1MTY4NDM2Mn0.DLMlVdzsGpI4oT2dtIKUuLzyIIcPaJLrSTG2mGrFSLM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
