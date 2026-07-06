"use client";

import { useState } from "react";
import { Search, ChevronLeft, ChevronRight, Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  searchKeys?: (keyof T)[];
  onAdd?: () => void;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  onExport?: () => void;
  addLabel?: string;
  pageSize?: number;
  statusKey?: keyof T;
}

export function DataTable<T extends { id: string }>({
  data,
  columns,
  searchKeys = [],
  onAdd,
  onEdit,
  onDelete,
  onExport,
  addLabel = "Add New",
  pageSize = 10,
  statusKey,
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = data.filter((item) => {
    const matchesSearch =
      search === "" ||
      searchKeys.some((key) =>
        String(item[key]).toLowerCase().includes(search.toLowerCase())
      );
    const matchesStatus =
      statusFilter === "all" || !statusKey || String(item[statusKey]) === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(0); }}
            className="flex h-10 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          />
        </div>
        <div className="flex gap-2">
          {statusKey && (
            <select
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value); setPage(0); }}
              className="h-10 rounded-lg border border-border bg-background px-3 text-sm"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
              <option value="overdue">Overdue</option>
            </select>
          )}
          {onExport && (
            <Button variant="outline" size="sm" onClick={onExport}>
              <Download className="h-4 w-4" />
              Export
            </Button>
          )}
          {onAdd && (
            <Button size="sm" onClick={onAdd}>
              <Plus className="h-4 w-4" />
              {addLabel}
            </Button>
          )}
        </div>
      </div>

      <div className="rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                {columns.map((col) => (
                  <th key={col.key} className={cn("px-4 py-3 text-left font-medium text-muted-foreground", col.className)}>
                    {col.header}
                  </th>
                ))}
                {(onEdit || onDelete) && (
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">Actions</th>
                )}
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={columns.length + 1} className="px-4 py-12 text-center text-muted-foreground">
                    No records found
                  </td>
                </tr>
              ) : (
                paginated.map((item) => (
                  <tr key={item.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    {columns.map((col) => (
                      <td key={col.key} className={cn("px-4 py-3", col.className)}>
                        {col.render ? col.render(item) : String((item as Record<string, unknown>)[col.key] ?? "")}
                      </td>
                    ))}
                    {(onEdit || onDelete) && (
                      <td className="px-4 py-3 text-right">
                        <div className="flex justify-end gap-1">
                          {onEdit && (
                            <Button variant="ghost" size="sm" onClick={() => onEdit(item)}>Edit</Button>
                          )}
                          {onDelete && (
                            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700" onClick={() => onDelete(item)}>Delete</Button>
                          )}
                        </div>
                      </td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Showing {page * pageSize + 1}-{Math.min((page + 1) * pageSize, filtered.length)} of {filtered.length}</span>
          <div className="flex gap-1">
            <Button variant="outline" size="icon" disabled={page === 0} onClick={() => setPage(page - 1)}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" disabled={page >= totalPages - 1} onClick={() => setPage(page + 1)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  return <Badge variant="status" status={status}>{status.replace(/_/g, " ")}</Badge>;
}
