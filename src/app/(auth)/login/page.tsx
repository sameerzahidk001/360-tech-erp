"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/auth-store";
import { useNotificationStore } from "@/store/notification-store";

const demoAccounts = [
  { role: "Super Admin", email: "superadmin@erp.com" },
  { role: "Admin", email: "admin@erp.com" },
  { role: "Manager", email: "manager@erp.com" },
  { role: "Employee", email: "employee@erp.com" },
  { role: "HR", email: "hr@erp.com" },
  { role: "Accountant", email: "accountant@erp.com" },
  { role: "Customer", email: "customer@erp.com" },
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuthStore();
  const { addToast } = useNotificationStore();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = await login(email, password);
    setLoading(false);
    if (result.success) {
      addToast({ title: "Welcome back!", message: "Login successful", type: "success" });
      router.push("/dashboard");
    } else {
      setError(result.error || "Login failed");
    }
  };

  const quickLogin = async (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword("admin123");
    setLoading(true);
    const result = await login(demoEmail, "admin123");
    setLoading(false);
    if (result.success) {
      addToast({ title: "Welcome!", message: `Logged in as ${demoEmail}`, type: "success" });
      router.push("/dashboard");
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-8 lg:hidden">
        <div className="flex h-10 w-10 items-center justify-center gap-1">
          <span className="w-2.5 h-2.5 bg-neutral-500 rotate-45" />
          <span className="w-2.5 h-2.5 bg-primary rotate-45" />
        </div>
        <span className="text-2xl font-bold">Nexus<span className="text-primary">ERP</span></span>
      </div>

      <h2 className="text-2xl font-bold mb-1">Welcome back</h2>
      <p className="text-muted-foreground mb-8">Sign in to your account to continue</p>

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
        <div className="relative">
          <Input
            id="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[34px] text-muted-foreground hover:text-foreground"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="rounded border-border" />
            Remember me
          </label>
          <Link href="/forgot-password" className="text-sm text-primary hover:underline">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground mt-6">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-primary hover:underline font-medium">
          Register
        </Link>
      </p>

      <div className="mt-8 border-t border-border pt-6">
        <p className="text-xs text-muted-foreground mb-3 text-center">Quick demo login (password: admin123)</p>
        <div className="grid grid-cols-2 gap-2">
          {demoAccounts.map((acc) => (
            <button
              key={acc.email}
              onClick={() => quickLogin(acc.email)}
              disabled={loading}
              className="rounded-lg border border-border px-3 py-2 text-xs hover:bg-muted transition-colors text-left"
            >
              <span className="font-medium block">{acc.role}</span>
              <span className="text-muted-foreground">{acc.email}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
