"use client";

import { KPICard } from "@/components/dashboard/kpi-card";
import { ChartCard } from "@/components/dashboard/chart-card";
import { PageHeader } from "@/components/layout/page-header";
import { monthlySalesData, companies } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function SuperAdminReportsPage() {
  return (
    <div>
      <PageHeader title="Global Reports" description="System-wide analytics across all companies" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <KPICard label="Total Companies" value={companies.length} icon="Building2" color="bg-blue-600" />
        <KPICard label="Total Users" value={156} change={12} icon="Users" color="bg-purple-600" />
        <KPICard label="Monthly Revenue" value={formatCurrency(482000)} change={8.5} icon="DollarSign" color="bg-emerald-600" />
        <KPICard label="Active Subscriptions" value={2} icon="CreditCard" color="bg-indigo-600" />
      </div>
      <ChartCard title="Global Sales Trend" data={monthlySalesData} type="bar" dataKeys={["sales", "purchases"]} />
    </div>
  );
}
