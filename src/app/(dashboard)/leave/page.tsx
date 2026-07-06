"use client";

import { EntityPage, StatusBadge } from "@/components/modules/entity-page";
import { leaveRequests } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import type { LeaveRequest } from "@/types";

export default function LeavePage() {
  return (
    <EntityPage<LeaveRequest>
      title="Leave Request"
      description="Manage employee leave requests and approvals"
      data={leaveRequests}
      searchKeys={["employee", "type"]}
      statusKey="status"
      addLabel="Request Leave"
      columns={[
        { key: "employee", header: "Employee", render: (l) => <span className="font-medium">{l.employee}</span> },
        { key: "type", header: "Leave Type" },
        { key: "startDate", header: "Start", render: (l) => formatDate(l.startDate) },
        { key: "endDate", header: "End", render: (l) => formatDate(l.endDate) },
        { key: "reason", header: "Reason" },
        { key: "status", header: "Status", render: (l) => <StatusBadge status={l.status} /> },
      ]}
      formFields={[
        { name: "employee", label: "Employee", required: true },
        { name: "type", label: "Leave Type", type: "select", options: [
          { value: "Annual Leave", label: "Annual Leave" }, { value: "Sick Leave", label: "Sick Leave" },
          { value: "Personal Leave", label: "Personal Leave" },
        ]},
        { name: "startDate", label: "Start Date", type: "date", required: true },
        { name: "endDate", label: "End Date", type: "date", required: true },
        { name: "reason", label: "Reason", type: "textarea" },
      ]}
    />
  );
}
