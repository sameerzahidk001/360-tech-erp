"use client";

import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNotificationStore } from "@/store/notification-store";

export default function SuperAdminSecurityPage() {
  const { addToast } = useNotificationStore();

  return (
    <div>
      <PageHeader title="Backup & Security" description="System security, backups and access controls" />
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader><CardTitle className="text-base">Backup Settings</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">Last full backup: July 4, 2026 at 2:00 AM</p>
            <p className="text-sm text-muted-foreground">Backup frequency: Daily at 2:00 AM</p>
            <p className="text-sm text-muted-foreground">Retention: 30 days</p>
            <div className="flex gap-2">
              <Button onClick={() => addToast({ title: "Backup started", type: "info" })}>Run Backup</Button>
              <Button variant="outline" onClick={() => addToast({ title: "Restore initiated", type: "warning" })}>Restore</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-base">Security Settings</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" defaultChecked className="rounded" />
              Enable Two-Factor Authentication
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" defaultChecked className="rounded" />
              Force password change every 90 days
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" defaultChecked className="rounded" />
              Session timeout after 30 minutes
            </label>
            <Input id="maxAttempts" label="Max login attempts" type="number" defaultValue="5" />
            <Button onClick={() => addToast({ title: "Security settings saved", type: "success" })}>Save</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
