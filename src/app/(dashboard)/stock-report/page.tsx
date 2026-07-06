"use client";

import { products } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartCard } from "@/components/dashboard/chart-card";

const stockByCategory = products.reduce((acc, p) => {
  const existing = acc.find((a) => a.name === p.category);
  if (existing) existing.value += p.stock;
  else acc.push({ name: p.category, value: p.stock });
  return acc;
}, [] as { name: string; value: number }[]);

export default function StockReportPage() {
  const totalValue = products.reduce((sum, p) => sum + p.stock * p.cost, 0);
  const lowStock = products.filter((p) => p.stock <= p.minStock);

  return (
    <div>
      <PageHeader title="Stock Report" description="Inventory stock analysis and warehouse summary" />
      <div className="grid gap-4 sm:grid-cols-3 mb-6">
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Total Products</CardTitle></CardHeader>
          <CardContent><p className="text-2xl font-bold">{products.length}</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Total Stock Value</CardTitle></CardHeader>
          <CardContent><p className="text-2xl font-bold">{formatCurrency(totalValue)}</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Low Stock Items</CardTitle></CardHeader>
          <CardContent><p className="text-2xl font-bold text-red-600">{lowStock.length}</p></CardContent>
        </Card>
      </div>
      <div className="grid gap-6 lg:grid-cols-2 mb-6">
        <ChartCard title="Stock by Category" data={stockByCategory} type="pie" />
        <Card>
          <CardHeader><CardTitle className="text-base">Stock Details</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-3">
              {products.map((p) => (
                <div key={p.id} className="flex items-center justify-between rounded-lg border border-border p-3">
                  <div>
                    <p className="text-sm font-medium">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.warehouse} · {p.sku}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">{p.stock} units</p>
                    {p.stock <= p.minStock && <Badge className="mt-1">Low Stock</Badge>}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
