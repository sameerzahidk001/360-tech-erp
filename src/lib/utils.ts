import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, parseISO } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatDate(date: string | Date, pattern = "MMM dd, yyyy"): string {
  try {
    const d = typeof date === "string" ? parseISO(date) : date;
    return format(d, pattern);
  } catch {
    return String(date);
  }
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US").format(num);
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function generateId(prefix = "id"): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    active: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    inactive: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
    pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    approved: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    rejected: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    paid: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    overdue: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    draft: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
    cancelled: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
    open: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    in_progress: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
    completed: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    resolved: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    closed: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
    present: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    absent: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    late: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    on_leave: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    high: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    urgent: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    low: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
    new: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    won: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    lost: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };
  return colors[status] || "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
}

export function getRoleLabel(role: string): string {
  const labels: Record<string, string> = {
    super_admin: "Super Admin",
    admin: "Admin",
    manager: "Manager",
    employee: "Employee",
    accountant: "Accountant",
    hr: "HR",
    sales_staff: "Sales Staff",
    inventory_staff: "Inventory Staff",
    customer: "Customer",
    vendor: "Vendor",
  };
  return labels[role] || role;
}
