"use client";

import { EntityPage, StatusBadge } from "@/components/modules/entity-page";
import { salesInvoices } from "@/lib/mock-data";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { Invoice } from "@/types";

export default function SalesPage() {
  return (
    <EntityPage<Invoice>
      title="Sales Invoice"
      description="Manage sales orders, quotations and invoices"
      data={salesInvoices}
      searchKeys={["number", "customer"]}
      statusKey="status"
      addLabel="Create Invoice"
      columns={[
        { key: "number", header: "Invoice #", render: (i) => <span className="font-medium">{i.number}</span> },
        { key: "customer", header: "Customer" },
        { key: "date", header: "Date", render: (i) => formatDate(i.date) },
        { key: "dueDate", header: "Due Date", render: (i) => formatDate(i.dueDate) },
        { key: "total", header: "Total", render: (i) => formatCurrency(i.total) },
        { key: "status", header: "Status", render: (i) => <StatusBadge status={i.status} /> },
      ]}
      formFields={[
        { name: "customer", label: "Customer", required: true },
        { name: "amount", label: "Amount", type: "number" },
        { name: "tax", label: "Tax", type: "number" },
        { name: "date", label: "Invoice Date", type: "date" },
        { name: "dueDate", label: "Due Date", type: "date" },
      ]}
    />
  );
}
