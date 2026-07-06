"use client";

import { EntityPage, StatusBadge } from "@/components/modules/entity-page";
import { purchaseInvoices } from "@/lib/mock-data";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { Invoice } from "@/types";

export default function PurchasesPage() {
  return (
    <EntityPage<Invoice>
      title="Purchase Invoice"
      description="Manage purchase orders, GRN and vendor invoices"
      data={purchaseInvoices}
      searchKeys={["number", "vendor"]}
      statusKey="status"
      addLabel="Create PO"
      columns={[
        { key: "number", header: "PO #", render: (i) => <span className="font-medium">{i.number}</span> },
        { key: "vendor", header: "Vendor" },
        { key: "date", header: "Date", render: (i) => formatDate(i.date) },
        { key: "dueDate", header: "Due Date", render: (i) => formatDate(i.dueDate) },
        { key: "total", header: "Total", render: (i) => formatCurrency(i.total) },
        { key: "status", header: "Status", render: (i) => <StatusBadge status={i.status} /> },
      ]}
      formFields={[
        { name: "vendor", label: "Vendor", required: true },
        { name: "amount", label: "Amount", type: "number" },
        { name: "date", label: "Order Date", type: "date" },
        { name: "dueDate", label: "Due Date", type: "date" },
      ]}
    />
  );
}
