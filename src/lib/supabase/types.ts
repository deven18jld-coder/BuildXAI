import { Database } from "@/types/database";
import { supabase } from "./client";

export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];
export type Enums<T extends keyof Database["public"]["Enums"]> =
  Database["public"]["Enums"][T];

// Re-export supabase for convenience
export { supabase };
