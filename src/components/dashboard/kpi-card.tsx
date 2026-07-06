import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface KPICardProps {
  label: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: string;
  color?: string;
}

export function KPICard({ label, value, change, changeLabel, icon, color = "bg-primary" }: KPICardProps) {
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[icon] || Icons.Activity;

  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="text-2xl font-bold tracking-tight">{value}</p>
          {change !== undefined && (
            <p className={cn("text-xs font-medium", change >= 0 ? "text-emerald-600" : "text-red-600")}>
              {change >= 0 ? "+" : ""}{change}% {changeLabel || "vs last month"}
            </p>
          )}
        </div>
        <div className={cn("rounded-lg p-2.5 text-white", color)}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
