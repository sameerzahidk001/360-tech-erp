"use client";

import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNotificationStore } from "@/store/notification-store";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NotificationsPage() {
  const { notifications, markAsRead, markAllAsRead } = useNotificationStore();

  return (
    <div>
      <PageHeader title="Notifications" description="System alerts, reminders and activity notifications">
        <Button variant="outline" size="sm" onClick={markAllAsRead}>Mark all as read</Button>
      </PageHeader>
      <div className="space-y-3">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={cn(
              "flex items-start gap-4 rounded-xl border border-border p-4 transition-colors hover:bg-muted/30",
              !n.read && "bg-primary/5 border-primary/20"
            )}
          >
            <div className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
              n.type === "success" && "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30",
              n.type === "warning" && "bg-amber-100 text-amber-600 dark:bg-amber-900/30",
              n.type === "error" && "bg-red-100 text-red-600 dark:bg-red-900/30",
              n.type === "info" && "bg-blue-100 text-blue-600 dark:bg-blue-900/30",
            )}>
              !
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-medium">{n.title}</p>
                {!n.read && <Badge>New</Badge>}
              </div>
              <p className="text-sm text-muted-foreground mt-1">{n.message}</p>
              <p className="text-xs text-muted-foreground mt-2">{formatDate(n.createdAt, "MMM dd, yyyy HH:mm")}</p>
            </div>
            <div className="flex gap-2">
              {!n.read && (
                <Button variant="ghost" size="sm" onClick={() => markAsRead(n.id)}>Mark read</Button>
              )}
              {n.link && (
                <Link href={n.link}><Button variant="outline" size="sm">View</Button></Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
