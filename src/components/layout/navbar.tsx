"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Menu,
  Search,
  Bell,
  Sun,
  Moon,
  LogOut,
  User,
  Settings,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth-store";
import { useNotificationStore } from "@/store/notification-store";
import { getInitials, getRoleLabel } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const { user, logout } = useAuthStore();
  const { notifications, unreadCount, markAsRead } = useNotificationStore();
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-card/95 backdrop-blur-md px-4 lg:px-6">
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
        <Menu className="h-5 w-5" />
      </Button>

      <div className="relative flex-1 max-w-md hidden sm:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          placeholder="Search modules, users, invoices..."
          className="flex h-10 w-full rounded-lg border border-border bg-background pl-9 pr-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        />
      </div>

      <div className="flex items-center gap-1 ml-auto">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>

        <div className="relative">
          <Button variant="ghost" size="icon" onClick={() => { setNotifOpen(!notifOpen); setProfileOpen(false); }}>
            <Bell className="h-5 w-5" />
            {unreadCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                {unreadCount}
              </span>
            )}
          </Button>
          {notifOpen && (
            <div className="absolute right-0 mt-2 w-80 rounded-xl border border-border bg-card shadow-xl z-50">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <span className="font-semibold text-sm">Notifications</span>
                <Link href="/notifications" className="text-xs text-primary hover:underline" onClick={() => setNotifOpen(false)}>
                  View all
                </Link>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.slice(0, 5).map((n) => (
                  <button
                    key={n.id}
                    onClick={() => { markAsRead(n.id); if (n.link) router.push(n.link); setNotifOpen(false); }}
                    className={cn("w-full text-left px-4 py-3 border-b border-border last:border-0 hover:bg-muted/50 transition-colors", !n.read && "bg-primary/5")}
                  >
                    <p className="text-sm font-medium">{n.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{n.message}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => { setProfileOpen(!profileOpen); setNotifOpen(false); }}
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-muted transition-colors"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
              {user ? getInitials(user.name) : "?"}
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium leading-none">{user?.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{user ? getRoleLabel(user.role) : ""}</p>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground hidden md:block" />
          </button>
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-card shadow-xl z-50 py-1">
              <Link href="/profile" className="flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-muted transition-colors" onClick={() => setProfileOpen(false)}>
                <User className="h-4 w-4" /> Profile
              </Link>
              <Link href="/settings" className="flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-muted transition-colors" onClick={() => setProfileOpen(false)}>
                <Settings className="h-4 w-4" /> Settings
              </Link>
              <hr className="my-1 border-border" />
              <button onClick={handleLogout} className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-muted transition-colors">
                <LogOut className="h-4 w-4" /> Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
