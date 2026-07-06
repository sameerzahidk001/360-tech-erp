"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { KPICard } from "@/components/dashboard/kpi-card";
import { ChartCard } from "@/components/dashboard/chart-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/layout/page-header";
import { useAuthStore } from "@/store/auth-store";
import { getRoleLabel, formatCurrency } from "@/lib/utils";
import {
  dashboardKPIs,
  monthlySalesData,
  revenueExpenseData,
  departmentPerformance,
  taskProgressData,
  recentActivities,
  products,
} from "@/lib/mock-data";

export default function DashboardPage() {
  const user = useAuthStore((s) => s.user);
  const lowStockProducts = products.filter((p) => p.stock <= p.minStock);

  return (
    <div>
      <PageHeader
        title={`Welcome back, ${user?.name?.split(" ")[0] || "User"}`}
        description={`${user ? getRoleLabel(user.role) : ""} Dashboard — Here's what's happening today`}
      >
        <Button size="sm"><Plus className="h-4 w-4" /> Quick Action</Button>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <KPICard label="Total Sales" value={formatCurrency(dashboardKPIs.totalSales)} change={12.5} icon="DollarSign" color="bg-primary" />
        <KPICard label="Total Revenue" value={formatCurrency(dashboardKPIs.totalRevenue)} change={8.2} icon="TrendingUp" color="bg-orange-500" />
        <KPICard label="Total Expenses" value={formatCurrency(dashboardKPIs.totalExpenses)} change={-3.1} icon="CreditCard" color="bg-neutral-700" />
        <KPICard label="Net Profit" value={formatCurrency(dashboardKPIs.profit)} change={15.8} icon="DollarSign" color="bg-orange-600" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <KPICard label="Employees" value={dashboardKPIs.totalEmployees} icon="Users" color="bg-neutral-600" />
        <KPICard label="Inventory Value" value={formatCurrency(dashboardKPIs.inventoryValue)} icon="Package" color="bg-orange-400" />
        <KPICard label="Pending Invoices" value={dashboardKPIs.pendingInvoices} icon="FileText" color="bg-primary" />
        <KPICard label="Low Stock Items" value={dashboardKPIs.lowStockItems} icon="AlertTriangle" color="bg-red-600" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2 mb-6">
        <ChartCard title="Monthly Sales vs Purchases" data={monthlySalesData} type="bar" dataKeys={["sales", "purchases"]} />
        <ChartCard title="Revenue vs Expenses" data={revenueExpenseData} type="line" dataKeys={["revenue", "expenses"]} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3 mb-6">
        <ChartCard title="Task Progress" data={taskProgressData} type="pie" height={250} />
        <div className="lg:col-span-2">
          <ChartCard title="Department Performance" data={departmentPerformance} type="bar" dataKeys={["value", "target"]} height={250} />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                    {activity.user.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm"><span className="font-medium">{activity.user}</span> {activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <Badge>{activity.type}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">Low Stock Alerts</CardTitle>
            <Link href="/inventory"><Button variant="ghost" size="sm">View all</Button></Link>
          </CardHeader>
          <CardContent>
            {lowStockProducts.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">All products are well stocked</p>
            ) : (
              <div className="space-y-3">
                {lowStockProducts.map((p) => (
                  <div key={p.id} className="flex items-center justify-between rounded-lg border border-border p-3">
                    <div>
                      <p className="text-sm font-medium">{p.name}</p>
                      <p className="text-xs text-muted-foreground">SKU: {p.sku}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-red-600">{p.stock} units</p>
                      <p className="text-xs text-muted-foreground">Min: {p.minStock}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
