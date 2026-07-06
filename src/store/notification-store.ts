"use client";

import { create } from "zustand";
import { notifications as initialNotifications } from "@/lib/mock-data";
import type { Notification } from "@/types";

interface Toast {
  id: string;
  title: string;
  message?: string;
  type: "success" | "error" | "info" | "warning";
}

interface NotificationState {
  notifications: Notification[];
  toasts: Toast[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
}

export const useNotificationStore = create<NotificationState>((set, get) => ({
  notifications: initialNotifications,
  toasts: [],
  unreadCount: initialNotifications.filter((n) => !n.read).length,

  markAsRead: (id: string) => {
    set((state) => {
      const updated = state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      );
      return {
        notifications: updated,
        unreadCount: updated.filter((n) => !n.read).length,
      };
    });
  },

  markAllAsRead: () => {
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, read: true })),
      unreadCount: 0,
    }));
  },

  addToast: (toast) => {
    const id = `toast_${Date.now()}`;
    set((state) => ({ toasts: [...state.toasts, { ...toast, id }] }));
    setTimeout(() => get().removeToast(id), 4000);
  },

  removeToast: (id: string) => {
    set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
  },
}));
