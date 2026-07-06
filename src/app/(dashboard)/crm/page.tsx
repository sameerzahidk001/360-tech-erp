"use client";

import { EntityPage, StatusBadge } from "@/components/modules/entity-page";
import { leads } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";
import type { Lead } from "@/types";

export default function CRMPage() {
  return (
    <EntityPage<Lead>
      title="Lead"
      description="Manage leads, deals and customer relationships"
      data={leads}
      searchKeys={["name", "company", "email"]}
      statusKey="status"
      addLabel="Add Lead"
      columns={[
        { key: "name", header: "Contact", render: (l) => <span className="font-medium">{l.name}</span> },
        { key: "company", header: "Company" },
        { key: "email", header: "Email" },
        { key: "phone", header: "Phone" },
        { key: "value", header: "Deal Value", render: (l) => formatCurrency(l.value) },
        { key: "assignedTo", header: "Assigned To" },
        { key: "status", header: "Status", render: (l) => <StatusBadge status={l.status} /> },
      ]}
      formFields={[
        { name: "name", label: "Contact Name", required: true },
        { name: "company", label: "Company" },
        { name: "email", label: "Email", type: "email" },
        { name: "phone", label: "Phone" },
        { name: "value", label: "Deal Value", type: "number" },
        { name: "assignedTo", label: "Assigned To" },
        { name: "status", label: "Status", type: "select", options: [
          { value: "new", label: "New" }, { value: "contacted", label: "Contacted" },
          { value: "qualified", label: "Qualified" }, { value: "proposal", label: "Proposal" },
          { value: "won", label: "Won" }, { value: "lost", label: "Lost" },
        ]},
      ]}
    />
  );
}
