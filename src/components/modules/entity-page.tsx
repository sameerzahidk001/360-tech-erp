"use client";

import { useState } from "react";
import { DataTable, StatusBadge, type Column } from "@/components/ui/data-table";
import { Modal } from "@/components/ui/modal";
import { EntityFormModal, type FormField } from "@/components/forms/entity-form-modal";
import { PageHeader } from "@/components/layout/page-header";
import { useNotificationStore } from "@/store/notification-store";

interface EntityPageProps<T extends { id: string }> {
  title: string;
  description: string;
  data: T[];
  columns: Column<T>[];
  searchKeys: (keyof T)[];
  formFields: FormField[];
  addLabel?: string;
  statusKey?: keyof T;
  readOnly?: boolean;
}

export function EntityPage<T extends { id: string }>({
  title,
  description,
  data: initialData,
  columns,
  searchKeys,
  formFields,
  addLabel = "Add New",
  statusKey,
  readOnly = false,
}: EntityPageProps<T>) {
  const [data, setData] = useState(initialData);
  const [formOpen, setFormOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editing, setEditing] = useState<T | null>(null);
  const [deleting, setDeleting] = useState<T | null>(null);
  const { addToast } = useNotificationStore();

  const handleSave = (formData: Record<string, string>) => {
    if (editing) {
      setData(data.map((item) => (item.id === editing.id ? { ...item, ...formData } as T : item)));
    } else {
      const newItem = { id: `new_${Date.now()}`, ...formData } as unknown as T;
      setData([newItem, ...data]);
    }
    setEditing(null);
  };

  const handleDelete = () => {
    if (deleting) {
      setData(data.filter((item) => item.id !== deleting.id));
      addToast({ title: "Deleted successfully", type: "success" });
      setDeleting(null);
      setDeleteOpen(false);
    }
  };

  return (
    <div>
      <PageHeader title={title} description={description} />
      <DataTable
        data={data}
        columns={columns}
        searchKeys={searchKeys}
        onAdd={readOnly ? undefined : () => { setEditing(null); setFormOpen(true); }}
        onEdit={readOnly ? undefined : (item) => { setEditing(item); setFormOpen(true); }}
        onDelete={readOnly ? undefined : (item) => { setDeleting(item); setDeleteOpen(true); }}
        onExport={() => addToast({ title: "Export started", message: "Your file will download shortly", type: "info" })}
        addLabel={addLabel}
        statusKey={statusKey}
      />
      <EntityFormModal
        open={formOpen}
        onClose={() => { setFormOpen(false); setEditing(null); }}
        title={editing ? `Edit ${title}` : `Add ${title}`}
        fields={formFields}
        initialData={editing ? (editing as unknown as Record<string, string>) : {}}
        onSave={handleSave}
      />
      <Modal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        title="Confirm Delete"
        description="Are you sure you want to delete this record? This action cannot be undone."
        variant="destructive"
        confirmLabel="Delete"
        onConfirm={handleDelete}
      />
    </div>
  );
}

export { StatusBadge };
