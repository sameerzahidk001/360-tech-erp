"use client";

import { EntityPage, StatusBadge } from "@/components/modules/entity-page";
import { products } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";
import type { Product } from "@/types";

export default function InventoryPage() {
  return (
    <EntityPage<Product>
      title="Inventory"
      description="Manage stock levels, warehouses and inventory movements"
      data={products}
      searchKeys={["name", "sku", "category"]}
      statusKey="status"
      addLabel="Stock Adjustment"
      columns={[
        { key: "name", header: "Product", render: (p) => <span className="font-medium">{p.name}</span> },
        { key: "sku", header: "SKU" },
        { key: "category", header: "Category" },
        { key: "stock", header: "Stock", render: (p) => (
          <span className={p.stock <= p.minStock ? "text-red-600 font-semibold" : ""}>{p.stock}</span>
        )},
        { key: "minStock", header: "Min Stock" },
        { key: "warehouse", header: "Warehouse" },
        { key: "price", header: "Price", render: (p) => formatCurrency(p.price) },
        { key: "status", header: "Status", render: (p) => <StatusBadge status={p.status} /> },
      ]}
      formFields={[
        { name: "name", label: "Product Name", required: true },
        { name: "sku", label: "SKU" },
        { name: "stock", label: "Stock Quantity", type: "number" },
        { name: "warehouse", label: "Warehouse" },
      ]}
    />
  );
}
