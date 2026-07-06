"use client";

import { X } from "lucide-react";
import { useNotificationStore } from "@/store/notification-store";
import { cn } from "@/lib/utils";

export function ToastContainer() {
  const { toasts, removeToast } = useNotificationStore();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "flex items-start gap-3 rounded-lg border px-4 py-3 shadow-lg min-w-[300px] max-w-[400px] animate-in slide-in-from-right",
            toast.type === "success" && "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950",
            toast.type === "error" && "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950",
            toast.type === "warning" && "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950",
            toast.type === "info" && "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950"
          )}
        >
          <div className="flex-1">
            <p className="text-sm font-medium">{toast.title}</p>
            {toast.message && <p className="text-xs text-muted-foreground mt-0.5">{toast.message}</p>}
          </div>
          <button onClick={() => removeToast(toast.id)} className="text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
