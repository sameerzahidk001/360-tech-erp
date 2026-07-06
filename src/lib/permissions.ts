import type { ModuleKey, PermissionAction, UserRole } from "@/types";

const ALL_ACTIONS: PermissionAction[] = ["view", "add", "edit", "delete", "approve"];

const rolePermissions: Record<UserRole, Partial<Record<ModuleKey, PermissionAction[]>>> = {
  super_admin: {
    dashboard: ALL_ACTIONS,
    users: ALL_ACTIONS,
    roles: ALL_ACTIONS,
    employees: ALL_ACTIONS,
    attendance: ALL_ACTIONS,
    leave: ALL_ACTIONS,
    payroll: ALL_ACTIONS,
    inventory: ALL_ACTIONS,
    products: ALL_ACTIONS,
    customers: ALL_ACTIONS,
    vendors: ALL_ACTIONS,
    sales: ALL_ACTIONS,
    purchases: ALL_ACTIONS,
    finance: ALL_ACTIONS,
    expenses: ALL_ACTIONS,
    crm: ALL_ACTIONS,
    projects: ALL_ACTIONS,
    reports: ALL_ACTIONS,
    notifications: ALL_ACTIONS,
    settings: ALL_ACTIONS,
    audit_logs: ALL_ACTIONS,
    support: ALL_ACTIONS,
    companies: ALL_ACTIONS,
    subscriptions: ALL_ACTIONS,
  },
  admin: {
    dashboard: ["view"],
    users: ALL_ACTIONS,
    roles: ALL_ACTIONS,
    employees: ALL_ACTIONS,
    attendance: ALL_ACTIONS,
    leave: ALL_ACTIONS,
    payroll: ALL_ACTIONS,
    inventory: ALL_ACTIONS,
    products: ALL_ACTIONS,
    customers: ALL_ACTIONS,
    vendors: ALL_ACTIONS,
    sales: ALL_ACTIONS,
    purchases: ALL_ACTIONS,
    finance: ALL_ACTIONS,
    expenses: ALL_ACTIONS,
    crm: ALL_ACTIONS,
    projects: ALL_ACTIONS,
    reports: ALL_ACTIONS,
    notifications: ["view"],
    settings: ALL_ACTIONS,
    audit_logs: ["view"],
    support: ALL_ACTIONS,
  },
  manager: {
    dashboard: ["view"],
    employees: ["view"],
    attendance: ["view", "approve"],
    leave: ["view", "approve"],
    projects: ALL_ACTIONS,
    reports: ["view"],
    notifications: ["view"],
    crm: ["view", "edit"],
    sales: ["view"],
    inventory: ["view"],
  },
  employee: {
    dashboard: ["view"],
    attendance: ["view", "add"],
    leave: ["view", "add"],
    payroll: ["view"],
    projects: ["view", "edit"],
    notifications: ["view"],
    support: ["view", "add"],
  },
  accountant: {
    dashboard: ["view"],
    finance: ALL_ACTIONS,
    expenses: ALL_ACTIONS,
    sales: ["view", "edit"],
    purchases: ["view", "edit"],
    reports: ["view"],
    notifications: ["view"],
  },
  hr: {
    dashboard: ["view"],
    employees: ALL_ACTIONS,
    attendance: ALL_ACTIONS,
    leave: ALL_ACTIONS,
    payroll: ALL_ACTIONS,
    reports: ["view"],
    notifications: ["view"],
  },
  sales_staff: {
    dashboard: ["view"],
    customers: ALL_ACTIONS,
    sales: ALL_ACTIONS,
    crm: ALL_ACTIONS,
    reports: ["view"],
    notifications: ["view"],
  },
  inventory_staff: {
    dashboard: ["view"],
    inventory: ALL_ACTIONS,
    products: ALL_ACTIONS,
    vendors: ["view"],
    purchases: ["view", "edit"],
    reports: ["view"],
    notifications: ["view"],
  },
  customer: {
    dashboard: ["view"],
    sales: ["view"],
    notifications: ["view"],
    support: ALL_ACTIONS,
  },
  vendor: {
    dashboard: ["view"],
    purchases: ["view"],
    notifications: ["view"],
    support: ALL_ACTIONS,
  },
};

export function hasPermission(
  role: UserRole,
  module: ModuleKey,
  action: PermissionAction = "view"
): boolean {
  const perms = rolePermissions[role]?.[module];
  return perms?.includes(action) ?? false;
}

export function canAccessModule(role: UserRole, module: ModuleKey): boolean {
  return hasPermission(role, module, "view");
}

export function getAccessibleModules(role: UserRole): ModuleKey[] {
  const perms = rolePermissions[role];
  if (!perms) return [];
  return Object.keys(perms) as ModuleKey[];
}

export { rolePermissions };
