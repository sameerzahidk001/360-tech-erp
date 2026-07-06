"use client";

import { EntityPage, StatusBadge } from "@/components/modules/entity-page";
import { supportTickets } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import type { SupportTicket } from "@/types";

export default function SupportPage() {
  return (
    <EntityPage<SupportTicket>
      title="Support Ticket"
      description="Manage customer support tickets and inquiries"
      data={supportTickets}
      searchKeys={["subject", "customer"]}
      statusKey="status"
      addLabel="Create Ticket"
      columns={[
        { key: "subject", header: "Subject", render: (t) => <span className="font-medium">{t.subject}</span> },
        { key: "customer", header: "Customer" },
        { key: "assignee", header: "Assignee", render: (t) => t.assignee || "Unassigned" },
        { key: "priority", header: "Priority", render: (t) => <StatusBadge status={t.priority} /> },
        { key: "status", header: "Status", render: (t) => <StatusBadge status={t.status} /> },
        { key: "createdAt", header: "Created", render: (t) => formatDate(t.createdAt) },
      ]}
      formFields={[
        { name: "subject", label: "Subject", required: true },
        { name: "customer", label: "Customer" },
        { name: "priority", label: "Priority", type: "select", options: [
          { value: "low", label: "Low" }, { value: "medium", label: "Medium" },
          { value: "high", label: "High" }, { value: "urgent", label: "Urgent" },
        ]},
        { name: "description", label: "Description", type: "textarea" },
      ]}
    />
  );
}
