"use client";

import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, BarChart3, Users, Package, DollarSign } from "lucide-react";
import { useNotificationStore } from "@/store/notification-store";

const reports = [
  { id: "sales", title: "Sales Report", description: "Revenue, orders and customer analysis", icon: DollarSign, color: "bg-blue-600" },
  { id: "purchase", title: "Purchase Report", description: "Vendor purchases and PO summary", icon: Package, color: "bg-orange-600" },
  { id: "inventory", title: "Inventory Report", description: "Stock levels, movements and valuation", icon: Package, color: "bg-cyan-600" },
  { id: "profit", title: "Profit & Loss", description: "Income, expenses and net profit", icon: BarChart3, color: "bg-emerald-600" },
  { id: "employee", title: "Employee Report", description: "Headcount, departments and turnover", icon: Users, color: "bg-purple-600" },
  { id: "attendance", title: "Attendance Report", description: "Daily attendance and leave summary", icon: FileText, color: "bg-indigo-600" },
  { id: "payroll", title: "Payroll Report", description: "Salary, deductions and payslips", icon: DollarSign, color: "bg-pink-600" },
  { id: "tax", title: "Tax Report", description: "Tax collected and payable summary", icon: FileText, color: "bg-amber-600" },
];

export default function ReportsPage() {
  const { addToast } = useNotificationStore();

  const handleExport = (format: string, report: string) => {
    addToast({ title: "Export started", message: `${report} report exporting as ${format}`, type: "info" });
  };

  return (
    <div>
      <PageHeader title="Reports & Analytics" description="Generate and export business reports" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {reports.map((report) => {
          const Icon = report.icon;
          return (
            <Card key={report.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`rounded-lg p-2 text-white ${report.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{report.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{report.description}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleExport("PDF", report.title)}>
                    <Download className="h-3 w-3" /> PDF
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleExport("Excel", report.title)}>
                    <Download className="h-3 w-3" /> Excel
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleExport("CSV", report.title)}>
                    <Download className="h-3 w-3" /> CSV
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
