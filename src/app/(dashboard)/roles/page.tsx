"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/layout/page-header";
import { rolePermissions } from "@/lib/permissions";
import { getRoleLabel } from "@/lib/utils";
import type { UserRole } from "@/types";

const roles = Object.keys(rolePermissions) as UserRole[];

export default function RolesPage() {
  return (
    <div>
      <PageHeader title="Roles & Permissions" description="Configure role-based access control for all modules" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {roles.map((role) => {
          const perms = rolePermissions[role];
          const moduleCount = Object.keys(perms).length;
          return (
            <Card key={role} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{getRoleLabel(role)}</CardTitle>
                  <Badge>{moduleCount} modules</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {Object.entries(perms).map(([mod, actions]) => (
                    <div key={mod} className="flex items-center justify-between text-sm">
                      <span className="capitalize text-muted-foreground">{mod.replace(/_/g, " ")}</span>
                      <div className="flex gap-1">
                        {actions.map((a) => (
                          <span key={a} className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-medium uppercase">{a}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
