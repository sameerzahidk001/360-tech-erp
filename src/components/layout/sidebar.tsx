"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { getNavigationForRole } from "@/lib/navigation";
import { canAccessModule } from "@/lib/permissions";
import { useAuthStore } from "@/store/auth-store";
import type { NavItemConfig } from "@/lib/navigation";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

function NavLink({ item, pathname, onNavigate }: { item: NavItemConfig; pathname: string; onNavigate?: () => void }) {
  const [expanded, setExpanded] = useState(pathname.startsWith(item.href));
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[item.icon] || Icons.Circle;
  const isActive = pathname === item.href || (item.children?.some((c) => pathname === c.href));
  const hasChildren = item.children && item.children.length > 0;

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={cn(
            "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
            isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          <Icon className="h-5 w-5 shrink-0" />
          <span className="flex-1 text-left">{item.title}</span>
          <ChevronDown className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")} />
        </button>
        {expanded && (
          <div className="ml-4 mt-1 space-y-0.5 border-l border-border pl-3">
            {item.children!.map((child) => {
              const ChildIcon = (Icons as unknown as Record<string, LucideIcon>)[child.icon] || Icons.Circle;
              const childActive = pathname === child.href;
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onNavigate}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                    childActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <ChildIcon className="h-4 w-4" />
                  {child.title}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
        pathname === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
      )}
    >
      <Icon className="h-5 w-5 shrink-0" />
      {item.title}
    </Link>
  );
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();
  const user = useAuthStore((s) => s.user);
  const navItems = user ? getNavigationForRole(user.role).filter((item) => canAccessModule(user.role, item.module)) : [];

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={onClose} />
      )}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-card transition-transform duration-300 lg:static lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center gap-0.5">
              <span className="w-2 h-2 bg-neutral-500 rotate-45" />
              <span className="w-2 h-2 bg-primary rotate-45" />
            </div>
            <div>
              <span className="text-lg font-bold">Nexus<span className="text-primary">ERP</span></span>
              <p className="text-[10px] text-muted-foreground -mt-0.5">360 Tech Solution</p>
            </div>
          </Link>
          <button onClick={onClose} className="lg:hidden text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} pathname={pathname} onNavigate={onClose} />
          ))}
        </nav>

        <div className="border-t border-border p-4">
          <p className="text-xs text-muted-foreground">NexusERP v1.0.0</p>
        </div>
      </aside>
    </>
  );
}
