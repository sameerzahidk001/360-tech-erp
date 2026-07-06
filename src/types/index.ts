export type UserRole =
  | "super_admin"
  | "admin"
  | "manager"
  | "employee"
  | "accountant"
  | "hr"
  | "sales_staff"
  | "inventory_staff"
  | "customer"
  | "vendor";

export type PermissionAction = "view" | "add" | "edit" | "delete" | "approve";

export type ModuleKey =
  | "dashboard"
  | "users"
  | "roles"
  | "employees"
  | "attendance"
  | "leave"
  | "payroll"
  | "inventory"
  | "products"
  | "customers"
  | "vendors"
  | "sales"
  | "purchases"
  | "finance"
  | "expenses"
  | "crm"
  | "projects"
  | "reports"
  | "notifications"
  | "settings"
  | "audit_logs"
  | "support"
  | "companies"
  | "subscriptions";

export interface Permission {
  module: ModuleKey;
  actions: PermissionAction[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: UserRole;
  avatar?: string;
  department?: string;
  designation?: string;
  status: "active" | "inactive";
  phone?: string;
  companyId?: string;
  branchId?: string;
  createdAt: string;
  lastLogin?: string;
}

export interface Company {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  logo?: string;
  currency: string;
  timezone: string;
  status: "active" | "inactive";
  plan: string;
  createdAt: string;
}

export interface Department {
  id: string;
  name: string;
  head: string;
  employees: number;
  status: "active" | "inactive";
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  designation: string;
  phone: string;
  joinDate: string;
  salary: number;
  status: "active" | "inactive" | "on_leave";
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  cost: number;
  stock: number;
  minStock: number;
  warehouse: string;
  status: "active" | "inactive";
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  totalOrders: number;
  totalSpent: number;
  status: "active" | "inactive";
}

export interface Vendor {
  id: string;
  name: string;
  email: string;
  phone: string;
  category: string;
  totalPurchases: number;
  status: "active" | "inactive";
}

export interface Invoice {
  id: string;
  number: string;
  customer?: string;
  vendor?: string;
  date: string;
  dueDate: string;
  amount: number;
  tax: number;
  total: number;
  status: "draft" | "pending" | "paid" | "overdue" | "cancelled";
  type: "sales" | "purchase";
}

export interface Task {
  id: string;
  title: string;
  project: string;
  assignee: string;
  priority: "low" | "medium" | "high" | "urgent";
  status: "pending" | "in_progress" | "completed" | "cancelled";
  dueDate: string;
  progress: number;
}

export interface Project {
  id: string;
  name: string;
  manager: string;
  team: string[];
  status: "planning" | "active" | "on_hold" | "completed";
  progress: number;
  dueDate: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  createdAt: string;
  link?: string;
}

export interface AuditLog {
  id: string;
  user: string;
  action: string;
  module: string;
  details: string;
  ip: string;
  timestamp: string;
}

export interface SupportTicket {
  id: string;
  subject: string;
  customer: string;
  assignee?: string;
  priority: "low" | "medium" | "high" | "urgent";
  status: "open" | "in_progress" | "resolved" | "closed";
  createdAt: string;
}

export interface LeaveRequest {
  id: string;
  employee: string;
  type: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: "pending" | "approved" | "rejected";
}

export interface AttendanceRecord {
  id: string;
  employee: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: "present" | "absent" | "late" | "half_day";
}

export interface Expense {
  id: string;
  title: string;
  category: string;
  amount: number;
  date: string;
  status: "pending" | "approved" | "rejected";
  submittedBy: string;
}

export interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: "new" | "contacted" | "qualified" | "proposal" | "won" | "lost";
  value: number;
  assignedTo: string;
}

export interface NavItem {
  title: string;
  href: string;
  icon: string;
  module: ModuleKey;
  roles?: UserRole[];
}

export interface KPIData {
  label: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: string;
  color: string;
}

export interface ChartDataPoint {
  name: string;
  value?: number;
  [key: string]: string | number | undefined;
}
