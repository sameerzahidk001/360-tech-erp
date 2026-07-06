"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Modal } from "@/components/ui/modal";
import { useNotificationStore } from "@/store/notification-store";

export interface FormField {
  name: string;
  label: string;
  type?: "text" | "email" | "number" | "date" | "select" | "textarea";
  options?: { value: string; label: string }[];
  required?: boolean;
}

interface EntityFormModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  fields: FormField[];
  initialData?: Record<string, string>;
  onSave: (data: Record<string, string>) => void;
}

export function EntityFormModal({ open, onClose, title, fields, initialData = {}, onSave }: EntityFormModalProps) {
  const [formData, setFormData] = useState<Record<string, string>>(initialData);
  const { addToast } = useNotificationStore();

  const handleSubmit = () => {
    onSave(formData);
    addToast({ title: "Saved successfully", type: "success" });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title={title} confirmLabel="Save" onConfirm={handleSubmit}>
      <div className="space-y-4 mt-2">
        {fields.map((field) =>
          field.type === "select" ? (
            <Select
              key={field.name}
              id={field.name}
              label={field.label}
              options={field.options || []}
              value={formData[field.name] || ""}
              onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
            />
          ) : field.type === "textarea" ? (
            <div key={field.name} className="space-y-1.5">
              <label className="text-sm font-medium">{field.label}</label>
              <textarea
                className="flex min-h-[80px] w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                value={formData[field.name] || ""}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
              />
            </div>
          ) : (
            <Input
              key={field.name}
              id={field.name}
              label={field.label}
              type={field.type || "text"}
              value={formData[field.name] || ""}
              onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
              required={field.required}
            />
          )
        )}
      </div>
    </Modal>
  );
}
