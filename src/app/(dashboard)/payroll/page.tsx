"use client";

import { EntityPage } from "@/components/modules/entity-page";
import { employees } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/layout/page-header";

interface PayrollRecord {
  id: string;
  employee: string;
  department: string;
  basicSalary: number;
  deductions: number;
  netPay: number;
  month: string;
  status: string;
}

const payrollData: PayrollRecord[] = employees.map((e) => ({
  id: e.id,
  employee: e.name,
  department: e.department,
  basicSalary: e.salary,
  deductions: Math.round(e.salary * 0.15),
  netPay: Math.round(e.salary * 0.85),
  month: "July 2026",
  status: "processed",
}));

export default function PayrollPage() {
  const totalPayroll = payrollData.reduce((sum, p) => sum + p.netPay, 0);

  return (
    <div>
      <PageHeader title="Payroll" description="Manage employee salaries, deductions and payslips" />
      <div className="grid gap-4 sm:grid-cols-3 mb-6">
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Total Payroll</CardTitle></CardHeader>
          <CardContent><p className="text-2xl font-bold">{formatCurrency(totalPayroll)}</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Employees</CardTitle></CardHeader>
          <CardContent><p className="text-2xl font-bold">{payrollData.length}</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Period</CardTitle></CardHeader>
          <CardContent><p className="text-2xl font-bold">July 2026</p></CardContent>
        </Card>
      </div>
      <EntityPage<PayrollRecord>
        title="Payroll Record"
        description=""
        data={payrollData}
        searchKeys={["employee", "department"]}
        addLabel="Process Payroll"
        columns={[
          { key: "employee", header: "Employee", render: (p) => <span className="font-medium">{p.employee}</span> },
          { key: "department", header: "Department" },
          { key: "basicSalary", header: "Basic Salary", render: (p) => formatCurrency(p.basicSalary) },
          { key: "deductions", header: "Deductions", render: (p) => formatCurrency(p.deductions) },
          { key: "netPay", header: "Net Pay", render: (p) => <span className="font-semibold text-emerald-600">{formatCurrency(p.netPay)}</span> },
          { key: "month", header: "Period" },
        ]}
        formFields={[
          { name: "employee", label: "Employee", required: true },
          { name: "basicSalary", label: "Basic Salary", type: "number" },
          { name: "deductions", label: "Deductions", type: "number" },
        ]}
      />
    </div>
  );
}
