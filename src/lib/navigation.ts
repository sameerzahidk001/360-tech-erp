import type { ModuleKey, UserRole } from "@/types";

export interface NavItemConfig {
  title: string;
  href: string;
  icon: string;
  module: ModuleKey;
  roles?: UserRole[];
  children?: NavItemConfig[];
}

export const navigationItems: NavItemConfig[] = [
  { title: "Dashboard", href: "/dashboard", icon: "LayoutDashboard", module: "dashboard" },
  {
    title: "Super Admin",
    href: "/super-admin",
    icon: "Shield",
    module: "companies",
    roles: ["super_admin"],
    children: [
      { title: "Companies", href: "/super-admin/companies", icon: "Building2", module: "companies" },
      { title: "Subscriptions", href: "/super-admin/subscriptions", icon: "CreditCard", module: "subscriptions" },
      { title: "Global Reports", href: "/super-admin/reports", icon: "BarChart3", module: "reports" },
      { title: "System Settings", href: "/super-admin/settings", icon: "Settings", module: "settings" },
      { title: "Backup & Security", href: "/super-admin/security", icon: "Lock", module: "settings" },
    ],
  },
  {
    title: "User Management",
    href: "/users",
    icon: "Users",
    module: "users",
    roles: ["super_admin", "admin"],
    children: [
      { title: "Users", href: "/users", icon: "Users", module: "users" },
      { title: "Roles & Permissions", href: "/roles", icon: "ShieldCheck", module: "roles" },
    ],
  },
  {
    title: "HR & Payroll",
    href: "/employees",
    icon: "UserCircle",
    module: "employees",
    children: [
      { title: "Employees", href: "/employees", icon: "Users", module: "employees" },
      { title: "Attendance", href: "/attendance", icon: "Clock", module: "attendance" },
      { title: "Leave Management", href: "/leave", icon: "CalendarOff", module: "leave" },
      { title: "Payroll", href: "/payroll", icon: "Wallet", module: "payroll" },
    ],
  },
  {
    title: "Inventory",
    href: "/inventory",
    icon: "Package",
    module: "inventory",
    children: [
      { title: "Products", href: "/products", icon: "Box", module: "products" },
      { title: "Inventory", href: "/inventory", icon: "Warehouse", module: "inventory" },
      { title: "Stock Report", href: "/stock-report", icon: "BarChart2", module: "inventory" },
    ],
  },
  {
    title: "Sales",
    href: "/sales",
    icon: "ShoppingCart",
    module: "sales",
    children: [
      { title: "Customers", href: "/customers", icon: "UserCheck", module: "customers" },
      { title: "Sales Invoices", href: "/sales", icon: "FileText", module: "sales" },
    ],
  },
  {
    title: "Purchases",
    href: "/purchases",
    icon: "Truck",
    module: "purchases",
    children: [
      { title: "Vendors", href: "/vendors", icon: "Building", module: "vendors" },
      { title: "Purchase Invoices", href: "/purchases", icon: "Receipt", module: "purchases" },
    ],
  },
  {
    title: "Finance",
    href: "/finance",
    icon: "DollarSign",
    module: "finance",
    children: [
      { title: "Finance Dashboard", href: "/finance", icon: "PieChart", module: "finance" },
      { title: "Expenses", href: "/expenses", icon: "CreditCard", module: "expenses" },
    ],
  },
  { title: "CRM", href: "/crm", icon: "Target", module: "crm" },
  { title: "Projects & Tasks", href: "/projects", icon: "FolderKanban", module: "projects" },
  { title: "Reports", href: "/reports", icon: "FileBarChart", module: "reports" },
  { title: "Support Tickets", href: "/support", icon: "Headphones", module: "support" },
  { title: "Notifications", href: "/notifications", icon: "Bell", module: "notifications" },
  { title: "Audit Logs", href: "/audit-logs", icon: "ScrollText", module: "audit_logs", roles: ["super_admin", "admin"] },
  { title: "Settings", href: "/settings", icon: "Settings", module: "settings" },
];

export function getNavigationForRole(role: UserRole): NavItemConfig[] {
  return navigationItems.filter((item) => {
    if (item.roles && !item.roles.includes(role)) return false;
    return true;
  });
}
