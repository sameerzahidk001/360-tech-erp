"use client";

import { EntityPage, StatusBadge } from "@/components/modules/entity-page";
import { expenses } from "@/lib/mock-data";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { Expense } from "@/types";

export default function ExpensesPage() {
  return (
    <EntityPage<Expense>
      title="Expense"
      description="Track and approve business expenses"
      data={expenses}
      searchKeys={["title", "category", "submittedBy"]}
      statusKey="status"
      addLabel="Submit Expense"
      columns={[
        { key: "title", header: "Title", render: (e) => <span className="font-medium">{e.title}</span> },
        { key: "category", header: "Category" },
        { key: "amount", header: "Amount", render: (e) => formatCurrency(e.amount) },
        { key: "date", header: "Date", render: (e) => formatDate(e.date) },
        { key: "submittedBy", header: "Submitted By" },
        { key: "status", header: "Status", render: (e) => <StatusBadge status={e.status} /> },
      ]}
      formFields={[
        { name: "title", label: "Expense Title", required: true },
        { name: "category", label: "Category", type: "select", options: [
          { value: "Travel", label: "Travel" }, { value: "Supplies", label: "Supplies" },
          { value: "Entertainment", label: "Entertainment" }, { value: "Utilities", label: "Utilities" },
        ]},
        { name: "amount", label: "Amount", type: "number", required: true },
        { name: "date", label: "Date", type: "date" },
      ]}
    />
  );
}
