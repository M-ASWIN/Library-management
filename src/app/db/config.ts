import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lpezgqgwugpayemppxus.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwZXpncWd3dWdwYXllbXBweHVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0MDA3MTYsImV4cCI6MjAyMzk3NjcxNn0.oY9qokiho5wUj6c4-8FikBoO9j3iIWiKSwPdLw9iuj8"
export const supabase = createClient(supabaseUrl, supabaseKey);
