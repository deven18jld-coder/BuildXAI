export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string;
          title: string;
          image_url: string;
          demo_link: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          image_url: string;
          demo_link: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          image_url?: string;
          demo_link?: string;
          created_at?: string;
        };
      };
      inquiries: {
        Row: {
          id: string;
          name: string;
          phone: string;
          email: string | null;
          service_type: string;
          message: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          phone: string;
          email?: string | null;
          service_type: string;
          message: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          phone?: string;
          email?: string | null;
          service_type?: string;
          message?: string;
          created_at?: string;
        };
      };
    };
    Enums: {};
  };
}
