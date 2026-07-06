import { NextResponse } from "next/server";
import { demoUsers, products, salesInvoices, employees } from "@/lib/mock-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const resource = searchParams.get("resource");

  switch (resource) {
    case "users":
      return NextResponse.json(demoUsers.map(({ password: _, ...u }) => u));
    case "products":
      return NextResponse.json(products);
    case "invoices":
      return NextResponse.json(salesInvoices);
    case "employees":
      return NextResponse.json(employees);
    default:
      return NextResponse.json({
        message: "NexusERP API",
        version: "1.0.0",
        endpoints: ["/api?resource=users", "/api?resource=products", "/api?resource=invoices", "/api?resource=employees"],
      });
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ success: true, data: body, id: `api_${Date.now()}` }, { status: 201 });
}
