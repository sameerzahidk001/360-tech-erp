"use client";

import { EntityPage, StatusBadge } from "@/components/modules/entity-page";
import { companies } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import type { Company } from "@/types";

export default function SuperAdminCompaniesPage() {
  return (
    <EntityPage<Company>
      title="Company"
      description="Manage all companies and branches in the system"
      data={companies}
      searchKeys={["name", "email"]}
      statusKey="status"
      addLabel="Add Company"
      columns={[
        { key: "name", header: "Company", render: (c) => <span className="font-medium">{c.name}</span> },
        { key: "email", header: "Email" },
        { key: "phone", header: "Phone" },
        { key: "plan", header: "Plan" },
        { key: "currency", header: "Currency" },
        { key: "createdAt", header: "Created", render: (c) => formatDate(c.createdAt) },
        { key: "status", header: "Status", render: (c) => <StatusBadge status={c.status} /> },
      ]}
      formFields={[
        { name: "name", label: "Company Name", required: true },
        { name: "email", label: "Email", type: "email" },
        { name: "phone", label: "Phone" },
        { name: "address", label: "Address" },
        { name: "plan", label: "Plan", type: "select", options: [
          { value: "Starter", label: "Starter" }, { value: "Professional", label: "Professional" },
          { value: "Enterprise", label: "Enterprise" },
        ]},
      ]}
    />
  );
}
