"use client";

import { EntityPage, StatusBadge } from "@/components/modules/entity-page";
import { customers } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";
import type { Customer } from "@/types";

export default function CustomersPage() {
  return (
    <EntityPage<Customer>
      title="Customer"
      description="Manage customers, contacts and order history"
      data={customers}
      searchKeys={["name", "email", "company"]}
      statusKey="status"
      addLabel="Add Customer"
      columns={[
        { key: "name", header: "Name", render: (c) => <span className="font-medium">{c.name}</span> },
        { key: "email", header: "Email" },
        { key: "phone", header: "Phone" },
        { key: "company", header: "Company" },
        { key: "totalOrders", header: "Orders" },
        { key: "totalSpent", header: "Total Spent", render: (c) => formatCurrency(c.totalSpent) },
        { key: "status", header: "Status", render: (c) => <StatusBadge status={c.status} /> },
      ]}
      formFields={[
        { name: "name", label: "Contact Name", required: true },
        { name: "email", label: "Email", type: "email" },
        { name: "phone", label: "Phone" },
        { name: "company", label: "Company" },
      ]}
    />
  );
}
