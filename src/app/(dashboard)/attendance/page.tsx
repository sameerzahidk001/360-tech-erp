"use client";

import { EntityPage, StatusBadge } from "@/components/modules/entity-page";
import { attendanceRecords } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import type { AttendanceRecord } from "@/types";

export default function AttendancePage() {
  return (
    <EntityPage<AttendanceRecord>
      title="Attendance"
      description="Track employee attendance, check-in and check-out times"
      data={attendanceRecords}
      searchKeys={["employee", "date"]}
      statusKey="status"
      addLabel="Mark Attendance"
      columns={[
        { key: "employee", header: "Employee", render: (a) => <span className="font-medium">{a.employee}</span> },
        { key: "date", header: "Date", render: (a) => formatDate(a.date) },
        { key: "checkIn", header: "Check In" },
        { key: "checkOut", header: "Check Out" },
        { key: "status", header: "Status", render: (a) => <StatusBadge status={a.status} /> },
      ]}
      formFields={[
        { name: "employee", label: "Employee", required: true },
        { name: "date", label: "Date", type: "date", required: true },
        { name: "checkIn", label: "Check In Time" },
        { name: "checkOut", label: "Check Out Time" },
        { name: "status", label: "Status", type: "select", options: [
          { value: "present", label: "Present" }, { value: "absent", label: "Absent" },
          { value: "late", label: "Late" }, { value: "half_day", label: "Half Day" },
        ]},
      ]}
    />
  );
}
