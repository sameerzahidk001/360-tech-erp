import type {
  User,
  Company,
  Department,
  Employee,
  Product,
  Customer,
  Vendor,
  Invoice,
  Task,
  Project,
  Notification,
  AuditLog,
  SupportTicket,
  LeaveRequest,
  AttendanceRecord,
  Expense,
  Lead,
  ChartDataPoint,
} from "@/types";

export const demoUsers: User[] = [
  {
    id: "u1",
    name: "Alex Morgan",
    email: "superadmin@erp.com",
    password: "admin123",
    role: "super_admin",
    status: "active",
    department: "Executive",
    designation: "Super Administrator",
    createdAt: "2024-01-01",
    lastLogin: "2026-07-05",
  },
  {
    id: "u2",
    name: "Sarah Chen",
    email: "admin@erp.com",
    password: "admin123",
    role: "admin",
    status: "active",
    department: "Management",
    designation: "Company Admin",
    createdAt: "2024-02-15",
    lastLogin: "2026-07-04",
  },
  {
    id: "u3",
    name: "James Wilson",
    email: "manager@erp.com",
    password: "admin123",
    role: "manager",
    status: "active",
    department: "Sales",
    designation: "Sales Manager",
    createdAt: "2024-03-10",
    lastLogin: "2026-07-05",
  },
  {
    id: "u4",
    name: "Emily Davis",
    email: "employee@erp.com",
    password: "admin123",
    role: "employee",
    status: "active",
    department: "Sales",
    designation: "Sales Executive",
    createdAt: "2024-06-01",
    lastLogin: "2026-07-05",
  },
  {
    id: "u5",
    name: "Michael Brown",
    email: "hr@erp.com",
    password: "admin123",
    role: "hr",
    status: "active",
    department: "Human Resources",
    designation: "HR Manager",
    createdAt: "2024-04-20",
    lastLogin: "2026-07-03",
  },
  {
    id: "u6",
    name: "Lisa Anderson",
    email: "accountant@erp.com",
    password: "admin123",
    role: "accountant",
    status: "active",
    department: "Finance",
    designation: "Senior Accountant",
    createdAt: "2024-05-01",
    lastLogin: "2026-07-04",
  },
  {
    id: "u7",
    name: "David Lee",
    email: "customer@erp.com",
    password: "admin123",
    role: "customer",
    status: "active",
    createdAt: "2024-08-15",
    lastLogin: "2026-07-02",
  },
];

export const companies: Company[] = [
  {
    id: "c1",
    name: "Acme Corporation",
    email: "info@acme.com",
    phone: "+1 555-0100",
    address: "123 Business Ave, New York, NY",
    currency: "USD",
    timezone: "America/New_York",
    status: "active",
    plan: "Enterprise",
    createdAt: "2024-01-01",
  },
  {
    id: "c2",
    name: "TechFlow Solutions",
    email: "contact@techflow.com",
    phone: "+1 555-0200",
    address: "456 Innovation Dr, San Francisco, CA",
    currency: "USD",
    timezone: "America/Los_Angeles",
    status: "active",
    plan: "Professional",
    createdAt: "2024-03-15",
  },
];

export const departments: Department[] = [
  { id: "d1", name: "Sales", head: "James Wilson", employees: 12, status: "active" },
  { id: "d2", name: "Finance", head: "Lisa Anderson", employees: 6, status: "active" },
  { id: "d3", name: "Human Resources", head: "Michael Brown", employees: 4, status: "active" },
  { id: "d4", name: "Inventory", head: "Robert Kim", employees: 8, status: "active" },
  { id: "d5", name: "IT", head: "Anna Patel", employees: 10, status: "active" },
];

export const employees: Employee[] = [
  { id: "e1", name: "Emily Davis", email: "emily@acme.com", department: "Sales", designation: "Sales Executive", phone: "+1 555-1001", joinDate: "2024-06-01", salary: 55000, status: "active" },
  { id: "e2", name: "Robert Kim", email: "robert@acme.com", department: "Inventory", designation: "Warehouse Manager", phone: "+1 555-1002", joinDate: "2023-11-15", salary: 62000, status: "active" },
  { id: "e3", name: "Anna Patel", email: "anna@acme.com", department: "IT", designation: "IT Director", phone: "+1 555-1003", joinDate: "2023-03-01", salary: 95000, status: "active" },
  { id: "e4", name: "Chris Taylor", email: "chris@acme.com", department: "Sales", designation: "Account Manager", phone: "+1 555-1004", joinDate: "2024-01-20", salary: 58000, status: "on_leave" },
  { id: "e5", name: "Maria Garcia", email: "maria@acme.com", department: "Finance", designation: "Financial Analyst", phone: "+1 555-1005", joinDate: "2024-04-10", salary: 65000, status: "active" },
];

export const products: Product[] = [
  { id: "p1", name: "Wireless Headphones Pro", sku: "WHP-001", category: "Electronics", price: 149.99, cost: 75, stock: 245, minStock: 50, warehouse: "Main Warehouse", status: "active" },
  { id: "p2", name: "Ergonomic Office Chair", sku: "EOC-002", category: "Furniture", price: 399.99, cost: 220, stock: 32, minStock: 20, warehouse: "Main Warehouse", status: "active" },
  { id: "p3", name: "USB-C Hub 7-in-1", sku: "UCH-003", category: "Electronics", price: 49.99, cost: 18, stock: 8, minStock: 25, warehouse: "East Branch", status: "active" },
  { id: "p4", name: "Standing Desk", sku: "SD-004", category: "Furniture", price: 599.99, cost: 350, stock: 15, minStock: 10, warehouse: "Main Warehouse", status: "active" },
  { id: "p5", name: "Mechanical Keyboard", sku: "MK-005", category: "Electronics", price: 129.99, cost: 55, stock: 120, minStock: 30, warehouse: "Main Warehouse", status: "active" },
];

export const customers: Customer[] = [
  { id: "cu1", name: "Global Tech Inc", email: "orders@globaltech.com", phone: "+1 555-2001", company: "Global Tech Inc", totalOrders: 45, totalSpent: 125000, status: "active" },
  { id: "cu2", name: "StartUp Labs", email: "procurement@startuplabs.io", phone: "+1 555-2002", company: "StartUp Labs", totalOrders: 23, totalSpent: 48000, status: "active" },
  { id: "cu3", name: "Enterprise Co", email: "buying@enterprise.co", phone: "+1 555-2003", company: "Enterprise Co", totalOrders: 67, totalSpent: 210000, status: "active" },
];

export const vendors: Vendor[] = [
  { id: "v1", name: "SupplyChain Pro", email: "sales@supplychain.com", phone: "+1 555-3001", category: "Electronics", totalPurchases: 85000, status: "active" },
  { id: "v2", name: "Office Furniture Direct", email: "orders@ofd.com", phone: "+1 555-3002", category: "Furniture", totalPurchases: 62000, status: "active" },
  { id: "v3", name: "Tech Components Ltd", email: "info@techcomp.com", phone: "+1 555-3003", category: "Electronics", totalPurchases: 43000, status: "active" },
];

export const salesInvoices: Invoice[] = [
  { id: "si1", number: "INV-2026-001", customer: "Global Tech Inc", date: "2026-06-28", dueDate: "2026-07-28", amount: 12500, tax: 1250, total: 13750, status: "paid", type: "sales" },
  { id: "si2", number: "INV-2026-002", customer: "StartUp Labs", date: "2026-07-01", dueDate: "2026-07-31", amount: 4800, tax: 480, total: 5280, status: "pending", type: "sales" },
  { id: "si3", number: "INV-2026-003", customer: "Enterprise Co", date: "2026-06-15", dueDate: "2026-07-15", amount: 22000, tax: 2200, total: 24200, status: "overdue", type: "sales" },
  { id: "si4", number: "INV-2026-004", customer: "Global Tech Inc", date: "2026-07-03", dueDate: "2026-08-03", amount: 8900, tax: 890, total: 9790, status: "draft", type: "sales" },
];

export const purchaseInvoices: Invoice[] = [
  { id: "pi1", number: "PO-2026-001", vendor: "SupplyChain Pro", date: "2026-06-25", dueDate: "2026-07-25", amount: 15000, tax: 1500, total: 16500, status: "paid", type: "purchase" },
  { id: "pi2", number: "PO-2026-002", vendor: "Office Furniture Direct", date: "2026-07-02", dueDate: "2026-08-02", amount: 8500, tax: 850, total: 9350, status: "pending", type: "purchase" },
];

export const tasks: Task[] = [
  { id: "t1", title: "Prepare Q3 sales report", project: "Q3 Planning", assignee: "Emily Davis", priority: "high", status: "in_progress", dueDate: "2026-07-10", progress: 65 },
  { id: "t2", title: "Update product catalog", project: "Inventory Refresh", assignee: "Robert Kim", priority: "medium", status: "pending", dueDate: "2026-07-15", progress: 0 },
  { id: "t3", title: "Client onboarding - Global Tech", project: "Client Success", assignee: "Chris Taylor", priority: "urgent", status: "in_progress", dueDate: "2026-07-08", progress: 40 },
  { id: "t4", title: "Review expense reports", project: "Finance Ops", assignee: "Maria Garcia", priority: "low", status: "completed", dueDate: "2026-07-05", progress: 100 },
];

export const projects: Project[] = [
  { id: "pr1", name: "Q3 Planning", manager: "James Wilson", team: ["Emily Davis", "Chris Taylor"], status: "active", progress: 55, dueDate: "2026-09-30" },
  { id: "pr2", name: "Inventory Refresh", manager: "Robert Kim", team: ["Robert Kim", "Anna Patel"], status: "active", progress: 30, dueDate: "2026-08-15" },
  { id: "pr3", name: "ERP Migration", manager: "Anna Patel", team: ["Anna Patel", "Michael Brown"], status: "planning", progress: 10, dueDate: "2026-12-31" },
];

export const notifications: Notification[] = [
  { id: "n1", title: "Low Stock Alert", message: "USB-C Hub 7-in-1 is below minimum stock level (8 units)", type: "warning", read: false, createdAt: "2026-07-05T09:00:00", link: "/inventory" },
  { id: "n2", title: "Invoice Overdue", message: "INV-2026-003 from Enterprise Co is overdue", type: "error", read: false, createdAt: "2026-07-05T08:30:00", link: "/sales" },
  { id: "n3", title: "Leave Request", message: "Chris Taylor submitted a leave request for approval", type: "info", read: false, createdAt: "2026-07-04T16:00:00", link: "/leave" },
  { id: "n4", title: "Task Assigned", message: "You have been assigned: Prepare Q3 sales report", type: "info", read: true, createdAt: "2026-07-03T10:00:00", link: "/projects" },
  { id: "n5", title: "Payment Received", message: "Payment of $13,750 received for INV-2026-001", type: "success", read: true, createdAt: "2026-07-02T14:00:00", link: "/sales" },
];

export const auditLogs: AuditLog[] = [
  { id: "al1", user: "Sarah Chen", action: "UPDATE", module: "Users", details: "Updated user role for Emily Davis", ip: "192.168.1.10", timestamp: "2026-07-05T10:30:00" },
  { id: "al2", user: "James Wilson", action: "CREATE", module: "Sales", details: "Created invoice INV-2026-004", ip: "192.168.1.25", timestamp: "2026-07-05T09:15:00" },
  { id: "al3", user: "Alex Morgan", action: "LOGIN", module: "Auth", details: "Successful login", ip: "10.0.0.1", timestamp: "2026-07-05T08:00:00" },
  { id: "al4", user: "Robert Kim", action: "UPDATE", module: "Inventory", details: "Stock adjustment for WHP-001", ip: "192.168.1.30", timestamp: "2026-07-04T17:45:00" },
  { id: "al5", user: "Michael Brown", action: "APPROVE", module: "Leave", details: "Approved leave request for Maria Garcia", ip: "192.168.1.15", timestamp: "2026-07-04T11:20:00" },
];

export const supportTickets: SupportTicket[] = [
  { id: "st1", subject: "Invoice discrepancy", customer: "David Lee", assignee: "Sarah Chen", priority: "high", status: "in_progress", createdAt: "2026-07-04" },
  { id: "st2", subject: "Product return request", customer: "Global Tech Inc", assignee: "James Wilson", priority: "medium", status: "open", createdAt: "2026-07-03" },
  { id: "st3", subject: "Account access issue", customer: "StartUp Labs", priority: "urgent", status: "open", createdAt: "2026-07-05" },
];

export const leaveRequests: LeaveRequest[] = [
  { id: "lr1", employee: "Chris Taylor", type: "Annual Leave", startDate: "2026-07-10", endDate: "2026-07-14", reason: "Family vacation", status: "pending" },
  { id: "lr2", employee: "Maria Garcia", type: "Sick Leave", startDate: "2026-06-20", endDate: "2026-06-21", reason: "Medical appointment", status: "approved" },
  { id: "lr3", employee: "Emily Davis", type: "Personal Leave", startDate: "2026-07-20", endDate: "2026-07-20", reason: "Personal matter", status: "pending" },
];

export const attendanceRecords: AttendanceRecord[] = [
  { id: "ar1", employee: "Emily Davis", date: "2026-07-05", checkIn: "08:55", checkOut: "17:30", status: "present" },
  { id: "ar2", employee: "Robert Kim", date: "2026-07-05", checkIn: "09:15", checkOut: "18:00", status: "late" },
  { id: "ar3", employee: "Chris Taylor", date: "2026-07-05", checkIn: "-", checkOut: "-", status: "absent" },
  { id: "ar4", employee: "Maria Garcia", date: "2026-07-05", checkIn: "08:30", checkOut: "17:00", status: "present" },
];

export const expenses: Expense[] = [
  { id: "ex1", title: "Client dinner", category: "Entertainment", amount: 245, date: "2026-07-02", status: "pending", submittedBy: "Emily Davis" },
  { id: "ex2", title: "Office supplies", category: "Supplies", amount: 89.5, date: "2026-07-01", status: "approved", submittedBy: "Robert Kim" },
  { id: "ex3", title: "Travel - conference", category: "Travel", amount: 1250, date: "2026-06-28", status: "approved", submittedBy: "James Wilson" },
];

export const leads: Lead[] = [
  { id: "l1", name: "John Smith", company: "Nova Industries", email: "john@novaind.com", phone: "+1 555-4001", status: "qualified", value: 35000, assignedTo: "Emily Davis" },
  { id: "l2", name: "Rachel Green", company: "Green Solutions", email: "rachel@greensol.com", phone: "+1 555-4002", status: "proposal", value: 52000, assignedTo: "Chris Taylor" },
  { id: "l3", name: "Tom Harris", company: "Harris Corp", email: "tom@harris.com", phone: "+1 555-4003", status: "new", value: 15000, assignedTo: "Emily Davis" },
];

export const monthlySalesData: ChartDataPoint[] = [
  { name: "Jan", sales: 45000, purchases: 32000 },
  { name: "Feb", sales: 52000, purchases: 38000 },
  { name: "Mar", sales: 48000, purchases: 35000 },
  { name: "Apr", sales: 61000, purchases: 42000 },
  { name: "May", sales: 55000, purchases: 39000 },
  { name: "Jun", sales: 67000, purchases: 45000 },
  { name: "Jul", sales: 72000, purchases: 48000 },
];

export const revenueExpenseData: ChartDataPoint[] = [
  { name: "Jan", revenue: 45000, expenses: 28000 },
  { name: "Feb", revenue: 52000, expenses: 31000 },
  { name: "Mar", revenue: 48000, expenses: 29000 },
  { name: "Apr", revenue: 61000, expenses: 35000 },
  { name: "May", revenue: 55000, expenses: 33000 },
  { name: "Jun", revenue: 67000, expenses: 38000 },
  { name: "Jul", revenue: 72000, expenses: 41000 },
];

export const departmentPerformance: ChartDataPoint[] = [
  { name: "Sales", value: 85, target: 80 },
  { name: "Finance", value: 92, target: 85 },
  { name: "HR", value: 78, target: 75 },
  { name: "Inventory", value: 88, target: 80 },
  { name: "IT", value: 95, target: 90 },
];

export const taskProgressData: ChartDataPoint[] = [
  { name: "Completed", value: 45 },
  { name: "In Progress", value: 28 },
  { name: "Pending", value: 18 },
  { name: "Overdue", value: 9 },
];

export const dashboardKPIs = {
  totalSales: 482000,
  totalPurchases: 318000,
  totalRevenue: 482000,
  totalExpenses: 235000,
  profit: 247000,
  totalEmployees: 40,
  inventoryValue: 156000,
  pendingInvoices: 5,
  pendingPayments: 3,
  lowStockItems: 2,
};

export const recentActivities = [
  { id: 1, user: "James Wilson", action: "Created sales invoice INV-2026-004", time: "2 hours ago", type: "sales" },
  { id: 2, user: "Robert Kim", action: "Updated stock for USB-C Hub", time: "3 hours ago", type: "inventory" },
  { id: 3, user: "Michael Brown", action: "Approved leave for Maria Garcia", time: "5 hours ago", type: "hr" },
  { id: 4, user: "Sarah Chen", action: "Added new employee record", time: "1 day ago", type: "hr" },
  { id: 5, user: "Lisa Anderson", action: "Processed payroll for June", time: "2 days ago", type: "finance" },
];
