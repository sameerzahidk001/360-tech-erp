"use client";

import { EntityPage } from "@/components/modules/entity-page";
import { auditLogs } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import type { AuditLog } from "@/types";
import { Badge } from "@/components/ui/badge";

export default function AuditLogsPage() {
  return (
    <EntityPage<AuditLog>
      title="Audit Log"
      description="Track all system activities and user actions"
      data={auditLogs}
      searchKeys={["user", "action", "module"]}
      columns={[
        { key: "timestamp", header: "Timestamp", render: (l) => formatDate(l.timestamp, "MMM dd, yyyy HH:mm") },
        { key: "user", header: "User", render: (l) => <span className="font-medium">{l.user}</span> },
        { key: "action", header: "Action", render: (l) => <Badge>{l.action}</Badge> },
        { key: "module", header: "Module" },
        { key: "details", header: "Details" },
        { key: "ip", header: "IP Address" },
      ]}
      formFields={[]}
      readOnly
    />
  );
}
