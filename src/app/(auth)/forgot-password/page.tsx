"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNotificationStore } from "@/store/notification-store";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToast } = useNotificationStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
    addToast({ title: "Reset link sent", message: "Check your email for password reset instructions", type: "success" });
  };

  return (
    <div>
      <Link href="/login" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to login
      </Link>

      {sent ? (
        <div className="text-center py-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Check your email</h2>
          <p className="text-muted-foreground mb-6">
            We&apos;ve sent a password reset link to <strong>{email}</strong>
          </p>
          <Button variant="outline" onClick={() => setSent(false)}>Try another email</Button>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-1">Forgot password?</h2>
          <p className="text-muted-foreground mb-8">Enter your email and we&apos;ll send you a reset link</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send reset link"}
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
