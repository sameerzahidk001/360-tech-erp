"use client";

import { EntityPage, StatusBadge } from "@/components/modules/entity-page";
import { demoUsers } from "@/lib/mock-data";
import { getRoleLabel } from "@/lib/utils";
import type { User } from "@/types";

export default function UsersPage() {
  return (
    <EntityPage<User>
      title="Users"
      description="Manage system users, assign roles and control access"
      data={demoUsers.map(({ password: _, ...u }) => u as User)}
      searchKeys={["name", "email", "department"]}
      statusKey="status"
      addLabel="Add User"
      columns={[
        { key: "name", header: "Name", render: (u) => <span className="font-medium">{u.name}</span> },
        { key: "email", header: "Email" },
        { key: "role", header: "Role", render: (u) => getRoleLabel(u.role) },
        { key: "department", header: "Department" },
        { key: "status", header: "Status", render: (u) => <StatusBadge status={u.status} /> },
      ]}
      formFields={[
        { name: "name", label: "Full Name", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "role", label: "Role", type: "select", options: [
          { value: "admin", label: "Admin" }, { value: "manager", label: "Manager" },
          { value: "employee", label: "Employee" }, { value: "hr", label: "HR" },
        ]},
        { name: "department", label: "Department" },
        { name: "status", label: "Status", type: "select", options: [
          { value: "active", label: "Active" }, { value: "inactive", label: "Inactive" },
        ]},
      ]}
    />
  );
}
