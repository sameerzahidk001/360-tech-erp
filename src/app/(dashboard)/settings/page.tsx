"use client";

import { useState } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useNotificationStore } from "@/store/notification-store";

export default function SettingsPage() {
  const { addToast } = useNotificationStore();
  const [tab, setTab] = useState("company");

  const tabs = [
    { id: "company", label: "Company" },
    { id: "currency", label: "Currency & Tax" },
    { id: "email", label: "Email" },
    { id: "invoice", label: "Invoice" },
    { id: "theme", label: "Theme" },
    { id: "backup", label: "Backup" },
  ];

  const handleSave = () => {
    addToast({ title: "Settings saved", type: "success" });
  };

  return (
    <div>
      <PageHeader title="Settings" description="Configure company profile, preferences and system settings" />
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex lg:flex-col gap-1 overflow-x-auto lg:w-48 shrink-0">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium text-left whitespace-nowrap transition-colors ${tab === t.id ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground"}`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <Card className="flex-1">
          <CardHeader><CardTitle className="text-base capitalize">{tab} Settings</CardTitle></CardHeader>
          <CardContent className="space-y-4 max-w-lg">
            {tab === "company" && (
              <>
                <Input id="companyName" label="Company Name" defaultValue="Acme Corporation" />
                <Input id="companyEmail" label="Company Email" defaultValue="info@acme.com" />
                <Input id="companyPhone" label="Phone" defaultValue="+1 555-0100" />
                <Input id="companyAddress" label="Address" defaultValue="123 Business Ave, New York, NY" />
              </>
            )}
            {tab === "currency" && (
              <>
                <Select id="currency" label="Currency" options={[
                  { value: "USD", label: "USD - US Dollar" },
                  { value: "EUR", label: "EUR - Euro" },
                  { value: "GBP", label: "GBP - British Pound" },
                  { value: "PKR", label: "PKR - Pakistani Rupee" },
                ]} defaultValue="USD" />
                <Input id="taxRate" label="Default Tax Rate (%)" type="number" defaultValue="10" />
              </>
            )}
            {tab === "email" && (
              <>
                <Input id="smtpHost" label="SMTP Host" defaultValue="smtp.gmail.com" />
                <Input id="smtpPort" label="SMTP Port" defaultValue="587" />
                <Input id="smtpUser" label="SMTP Username" />
                <Input id="smtpPass" label="SMTP Password" type="password" />
              </>
            )}
            {tab === "invoice" && (
              <>
                <Input id="invoicePrefix" label="Invoice Prefix" defaultValue="INV" />
                <Input id="invoiceFooter" label="Invoice Footer Text" defaultValue="Thank you for your business!" />
              </>
            )}
            {tab === "theme" && (
              <>
                <Select id="language" label="Language" options={[
                  { value: "en", label: "English" },
                  { value: "es", label: "Spanish" },
                  { value: "fr", label: "French" },
                ]} />
                <p className="text-sm text-muted-foreground">Use the theme toggle in the navbar to switch between light and dark mode.</p>
              </>
            )}
            {tab === "backup" && (
              <>
                <p className="text-sm text-muted-foreground">Last backup: July 4, 2026 at 2:00 AM</p>
                <Button variant="outline" onClick={() => addToast({ title: "Backup started", type: "info" })}>Run Backup Now</Button>
              </>
            )}
            <Button onClick={handleSave}>Save Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
