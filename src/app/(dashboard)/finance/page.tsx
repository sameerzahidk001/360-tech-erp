"use client";

import { KPICard } from "@/components/dashboard/kpi-card";
import { ChartCard } from "@/components/dashboard/chart-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/layout/page-header";
import { dashboardKPIs, revenueExpenseData, salesInvoices, purchaseInvoices } from "@/lib/mock-data";
import { formatCurrency, formatDate } from "@/lib/utils";
import { StatusBadge } from "@/components/ui/data-table";

export default function FinancePage() {
  const allInvoices = [...salesInvoices, ...purchaseInvoices];

  return (
    <div>
      <PageHeader title="Finance Dashboard" description="Overview of accounts, income, expenses and cash flow" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <KPICard label="Total Revenue" value={formatCurrency(dashboardKPIs.totalRevenue)} change={8.2} icon="TrendingUp" color="bg-emerald-600" />
        <KPICard label="Total Expenses" value={formatCurrency(dashboardKPIs.totalExpenses)} change={-3.1} icon="CreditCard" color="bg-red-600" />
        <KPICard label="Net Profit" value={formatCurrency(dashboardKPIs.profit)} change={15.8} icon="DollarSign" color="bg-blue-600" />
        <KPICard label="Accounts Receivable" value={formatCurrency(33000)} icon="FileText" color="bg-amber-600" />
      </div>
      <div className="grid gap-6 lg:grid-cols-2 mb-6">
        <ChartCard title="Revenue vs Expenses" data={revenueExpenseData} type="line" dataKeys={["revenue", "expenses"]} />
        <Card>
          <CardHeader><CardTitle className="text-base">Chart of Accounts</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Cash & Bank", balance: 125000, type: "Asset" },
                { name: "Accounts Receivable", balance: 33000, type: "Asset" },
                { name: "Inventory", balance: 156000, type: "Asset" },
                { name: "Accounts Payable", balance: 25700, type: "Liability" },
                { name: "Revenue", balance: 482000, type: "Income" },
                { name: "Operating Expenses", balance: 235000, type: "Expense" },
              ].map((acc) => (
                <div key={acc.name} className="flex items-center justify-between rounded-lg border border-border p-3">
                  <div>
                    <p className="text-sm font-medium">{acc.name}</p>
                    <p className="text-xs text-muted-foreground">{acc.type}</p>
                  </div>
                  <p className="text-sm font-semibold">{formatCurrency(acc.balance)}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader><CardTitle className="text-base">Recent Transactions</CardTitle></CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-2 text-left text-muted-foreground">Invoice</th>
                  <th className="px-4 py-2 text-left text-muted-foreground">Party</th>
                  <th className="px-4 py-2 text-left text-muted-foreground">Date</th>
                  <th className="px-4 py-2 text-left text-muted-foreground">Amount</th>
                  <th className="px-4 py-2 text-left text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {allInvoices.map((inv) => (
                  <tr key={inv.id} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium">{inv.number}</td>
                    <td className="px-4 py-3">{inv.customer || inv.vendor}</td>
                    <td className="px-4 py-3">{formatDate(inv.date)}</td>
                    <td className="px-4 py-3">{formatCurrency(inv.total)}</td>
                    <td className="px-4 py-3"><StatusBadge status={inv.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
