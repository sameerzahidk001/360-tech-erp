"use client";

import { EntityPage, StatusBadge } from "@/components/modules/entity-page";
import { vendors } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";
import type { Vendor } from "@/types";

export default function VendorsPage() {
  return (
    <EntityPage<Vendor>
      title="Vendor"
      description="Manage suppliers and vendor relationships"
      data={vendors}
      searchKeys={["name", "email", "category"]}
      statusKey="status"
      addLabel="Add Vendor"
      columns={[
        { key: "name", header: "Vendor", render: (v) => <span className="font-medium">{v.name}</span> },
        { key: "email", header: "Email" },
        { key: "phone", header: "Phone" },
        { key: "category", header: "Category" },
        { key: "totalPurchases", header: "Total Purchases", render: (v) => formatCurrency(v.totalPurchases) },
        { key: "status", header: "Status", render: (v) => <StatusBadge status={v.status} /> },
      ]}
      formFields={[
        { name: "name", label: "Vendor Name", required: true },
        { name: "email", label: "Email", type: "email" },
        { name: "phone", label: "Phone" },
        { name: "category", label: "Category" },
      ]}
    />
  );
}
