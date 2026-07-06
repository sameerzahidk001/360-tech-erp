"use client";

import { X } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
  confirmLabel?: string;
  onConfirm?: () => void;
  variant?: "default" | "destructive";
}

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  confirmLabel = "Confirm",
  onConfirm,
  variant = "default",
}: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className={cn("relative z-50 w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-xl mx-4")}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>
        {children}
        {onConfirm && (
          <div className="flex justify-end gap-2 mt-6">
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button variant={variant === "destructive" ? "destructive" : "default"} onClick={onConfirm}>
              {confirmLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
