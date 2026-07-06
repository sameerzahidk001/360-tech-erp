"use client";

import { EntityPage, StatusBadge } from "@/components/modules/entity-page";
import { employees } from "@/lib/mock-data";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { Employee } from "@/types";

export default function EmployeesPage() {
  return (
    <EntityPage<Employee>
      title="Employee"
      description="Manage employee records, departments and designations"
      data={employees}
      searchKeys={["name", "email", "department"]}
      statusKey="status"
      addLabel="Add Employee"
      columns={[
        { key: "name", header: "Name", render: (e) => <span className="font-medium">{e.name}</span> },
        { key: "email", header: "Email" },
        { key: "department", header: "Department" },
        { key: "designation", header: "Designation" },
        { key: "salary", header: "Salary", render: (e) => formatCurrency(e.salary) },
        { key: "joinDate", header: "Join Date", render: (e) => formatDate(e.joinDate) },
        { key: "status", header: "Status", render: (e) => <StatusBadge status={e.status} /> },
      ]}
      formFields={[
        { name: "name", label: "Full Name", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "department", label: "Department", type: "select", options: [
          { value: "Sales", label: "Sales" }, { value: "Finance", label: "Finance" },
          { value: "IT", label: "IT" }, { value: "Inventory", label: "Inventory" },
        ]},
        { name: "designation", label: "Designation" },
        { name: "phone", label: "Phone" },
        { name: "salary", label: "Salary", type: "number" },
        { name: "joinDate", label: "Join Date", type: "date" },
        { name: "status", label: "Status", type: "select", options: [
          { value: "active", label: "Active" }, { value: "inactive", label: "Inactive" }, { value: "on_leave", label: "On Leave" },
        ]},
      ]}
    />
  );
}
