"use client";

import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

const plans = [
  { id: "starter", name: "Starter", price: 29, users: 5, companies: 1, features: ["Basic modules", "Email support", "5 users"] },
  { id: "professional", name: "Professional", price: 79, users: 25, companies: 3, features: ["All modules", "Priority support", "25 users", "API access"] },
  { id: "enterprise", name: "Enterprise", price: 199, users: 100, companies: 10, features: ["All modules", "24/7 support", "Unlimited users", "Custom integrations", "Dedicated account manager"] },
];

const subscriptions = [
  { company: "Acme Corporation", plan: "Enterprise", status: "active", mrr: 199, nextBilling: "2026-08-01" },
  { company: "TechFlow Solutions", plan: "Professional", status: "active", mrr: 79, nextBilling: "2026-08-15" },
];

export default function SubscriptionsPage() {
  return (
    <div>
      <PageHeader title="Subscriptions & Plans" description="Manage SaaS plans and company subscriptions" />
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        {plans.map((plan) => (
          <Card key={plan.id} className={plan.id === "professional" ? "border-primary ring-1 ring-primary" : ""}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{plan.name}</CardTitle>
                {plan.id === "professional" && <Badge>Popular</Badge>}
              </div>
              <p className="text-3xl font-bold">{formatCurrency(plan.price)}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-emerald-500">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Button variant={plan.id === "professional" ? "default" : "outline"} className="w-full">Edit Plan</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader><CardTitle className="text-base">Active Subscriptions</CardTitle></CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-2 text-left text-muted-foreground">Company</th>
                  <th className="px-4 py-2 text-left text-muted-foreground">Plan</th>
                  <th className="px-4 py-2 text-left text-muted-foreground">MRR</th>
                  <th className="px-4 py-2 text-left text-muted-foreground">Next Billing</th>
                  <th className="px-4 py-2 text-left text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map((sub) => (
                  <tr key={sub.company} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium">{sub.company}</td>
                    <td className="px-4 py-3">{sub.plan}</td>
                    <td className="px-4 py-3">{formatCurrency(sub.mrr)}</td>
                    <td className="px-4 py-3">{sub.nextBilling}</td>
                    <td className="px-4 py-3"><Badge variant="status" status="active">active</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
