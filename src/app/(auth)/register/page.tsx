"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { useNotificationStore } from "@/store/notification-store";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const { addToast } = useNotificationStore();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    addToast({ title: "Registration successful", message: "Please sign in with your credentials", type: "success" });
    router.push("/login");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-1">Create an account</h2>
      <p className="text-muted-foreground mb-8">Get started with NexusERP for your business</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input id="name" label="Full Name" placeholder="John Doe" required />
        <Input id="email" label="Email" type="email" placeholder="you@company.com" required />
        <Input id="company" label="Company Name" placeholder="Your Company Ltd." required />
        <Select
          id="role"
          label="Account Type"
          options={[
            { value: "admin", label: "Business Admin" },
            { value: "customer", label: "Customer" },
            { value: "vendor", label: "Vendor" },
          ]}
        />
        <Input id="password" label="Password" type="password" placeholder="Min. 8 characters" required />
        <Input id="confirm" label="Confirm Password" type="password" placeholder="Confirm password" required />

        <label className="flex items-start gap-2 text-sm">
          <input type="checkbox" className="rounded border-border mt-0.5" required />
          <span>I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a></span>
        </label>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Creating account..." : "Create account"}
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground mt-6">
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:underline font-medium">Sign in</Link>
      </p>
    </div>
  );
}
