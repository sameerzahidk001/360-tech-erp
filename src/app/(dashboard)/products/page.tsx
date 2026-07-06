"use client";

import { EntityPage, StatusBadge } from "@/components/modules/entity-page";
import { products } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";
import type { Product } from "@/types";

export default function ProductsPage() {
  return (
    <EntityPage<Product>
      title="Product"
      description="Manage products, categories, pricing and SKU codes"
      data={products}
      searchKeys={["name", "sku", "category"]}
      statusKey="status"
      addLabel="Add Product"
      columns={[
        { key: "name", header: "Product", render: (p) => <span className="font-medium">{p.name}</span> },
        { key: "sku", header: "SKU" },
        { key: "category", header: "Category" },
        { key: "price", header: "Price", render: (p) => formatCurrency(p.price) },
        { key: "cost", header: "Cost", render: (p) => formatCurrency(p.cost) },
        { key: "stock", header: "Stock" },
        { key: "status", header: "Status", render: (p) => <StatusBadge status={p.status} /> },
      ]}
      formFields={[
        { name: "name", label: "Product Name", required: true },
        { name: "sku", label: "SKU / Barcode", required: true },
        { name: "category", label: "Category", type: "select", options: [
          { value: "Electronics", label: "Electronics" }, { value: "Furniture", label: "Furniture" },
          { value: "Supplies", label: "Supplies" },
        ]},
        { name: "price", label: "Selling Price", type: "number" },
        { name: "cost", label: "Cost Price", type: "number" },
        { name: "stock", label: "Initial Stock", type: "number" },
        { name: "minStock", label: "Minimum Stock", type: "number" },
        { name: "warehouse", label: "Warehouse" },
      ]}
    />
  );
}
