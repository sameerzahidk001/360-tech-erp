"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "@/types";
import { demoUsers } from "@/lib/mock-data";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        await new Promise((r) => setTimeout(r, 500));
        const found = demoUsers.find(
          (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
        );
        if (!found) {
          return { success: false, error: "Invalid email or password" };
        }
        const { password: _, ...userWithoutPassword } = found;
        set({ user: userWithoutPassword as User, isAuthenticated: true });
        return { success: true };
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      updateUser: (updates: Partial<User>) => {
        const current = get().user;
        if (current) {
          set({ user: { ...current, ...updates } });
        }
      },
    }),
    {
      name: "erp-auth",
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    }
  )
);
