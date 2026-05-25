import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

/* ------------------------------------------------------------------ */
/*  Database type definitions (placeholder – replace with generated)  */
/* ------------------------------------------------------------------ */

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          name: string | null;
          plan: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['users']['Row'], 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['users']['Row']>;
      };
      products: {
        Row: {
          id: string;
          niche_slug: string;
          name: string;
          description: string | null;
          price: number;
          tier: 'starter' | 'pro' | 'enterprise';
          active: boolean;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['products']['Row'], 'id' | 'created_at' | 'active'> & {
          id?: string;
          created_at?: string;
          active?: boolean;
        };
        Update: Partial<Database['public']['Tables']['products']['Row']>;
      };
      purchases: {
        Row: {
          id: string;
          user_id: string;
          product_id: string;
          payment_id: string;
          gateway: 'razorpay' | 'stripe';
          status: 'pending' | 'completed' | 'failed' | 'refunded';
          amount: number;
          currency: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['purchases']['Row'], 'id' | 'created_at' | 'status' | 'currency'> & {
          id?: string;
          created_at?: string;
          status?: 'pending' | 'completed' | 'failed' | 'refunded';
          currency?: string;
        };
        Update: Partial<Database['public']['Tables']['purchases']['Row']>;
      };
    };
  };
};
