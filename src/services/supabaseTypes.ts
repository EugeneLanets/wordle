export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      words: {
        Row: {
          id: number;
          value: string | null;
        };
        Insert: {
          id?: number;
          value?: string | null;
        };
        Update: {
          id?: number;
          value?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_random_word: {
        Args: Record<PropertyKey, never>;
        Returns: {
          id: number;
          value: string | null;
        }[];
      };
      hello_world: {
        Args: Record<PropertyKey, never>;
        Returns: {
          id: number;
          value: string | null;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
