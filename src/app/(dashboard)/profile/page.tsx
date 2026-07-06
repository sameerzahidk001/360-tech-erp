"use client";

import { useState } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth-store";
import { useNotificationStore } from "@/store/notification-store";
import { getInitials, getRoleLabel } from "@/lib/utils";

export default function ProfilePage() {
  const { user, updateUser } = useAuthStore();
  const { addToast } = useNotificationStore();
  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [department, setDepartment] = useState(user?.department || "");

  const handleSave = () => {
    updateUser({ name, phone, department });
    addToast({ title: "Profile updated", type: "success" });
  };

  return (
    <div>
      <PageHeader title="Profile" description="Manage your personal information and preferences" />
      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
              {user ? getInitials(user.name) : "?"}
            </div>
            <h3 className="text-lg font-semibold">{user?.name}</h3>
            <p className="text-sm text-muted-foreground">{user ? getRoleLabel(user.role) : ""}</p>
            <p className="text-sm text-muted-foreground mt-1">{user?.email}</p>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle className="text-base">Personal Information</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <Input id="name" label="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input id="email" label="Email" value={user?.email || ""} disabled />
            <Input id="phone" label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <Input id="department" label="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
            <Button onClick={handleSave}>Save Changes</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
