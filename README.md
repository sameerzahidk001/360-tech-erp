# NexusERP - Modern Enterprise Resource Planning System

A complete, modern ERP system built with Next.js 16, TypeScript, and Tailwind CSS. Features role-based dashboards, 15+ modules, and a premium SaaS admin interface.

## Features

- **5 Role-Based Panels**: Super Admin, Admin, Manager, Employee, Customer/Vendor
- **15 ERP Modules**: Dashboard, Users, HR, Inventory, Sales, Purchases, Finance, CRM, Projects, Reports, and more
- **Premium UI**: Modern sidebar, top navbar, KPI cards, charts, data tables, dark/light mode
- **Full CRUD**: Add, edit, delete with form validation, modals, and toast notifications
- **API-Ready**: REST API structure at `/api` for backend integration
- **Responsive**: Desktop, tablet, and mobile layouts

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3002](http://localhost:3002)

## Demo Accounts

All accounts use password: `admin123`

| Role | Email |
|------|-------|
| Super Admin | superadmin@erp.com |
| Admin | admin@erp.com |
| Manager | manager@erp.com |
| Employee | employee@erp.com |
| HR | hr@erp.com |
| Accountant | accountant@erp.com |
| Customer | customer@erp.com |

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Option 2: GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Framework Preset: **Next.js** (auto-detected)
5. Click **Deploy**

No environment variables required for the demo. For production, add:

- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Auth secret key
- `NEXTAUTH_URL` - Your production URL

## Project Structure

```
src/
├── app/
│   ├── (auth)/          # Login, register, forgot password
│   ├── (dashboard)/     # All ERP module pages
│   └── api/             # REST API routes
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Sidebar, navbar, layout
│   ├── dashboard/       # KPI cards, charts
│   ├── modules/         # Entity CRUD pages
│   └── forms/           # Form modals
├── lib/                 # Utils, permissions, mock data
├── store/               # Zustand state management
└── types/               # TypeScript types
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Charts**: Recharts
- **Icons**: Lucide React
- **State**: Zustand
- **Theme**: next-themes

## Scalability

The modular architecture supports adding new modules:
- Manufacturing, POS, eCommerce
- School/Hospital management
- Warehouse, Sugar industry, etc.

Add new modules by:
1. Creating types in `src/types/`
2. Adding navigation in `src/lib/navigation.ts`
3. Adding permissions in `src/lib/permissions.ts`
4. Creating a page in `src/app/(dashboard)/`

## License

MIT
