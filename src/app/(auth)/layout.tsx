export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-black">
      <div className="hidden lg:flex lg:w-1/2 bg-black relative overflow-hidden border-r border-neutral-800">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-neutral-800 overflow-hidden opacity-90">
          <div className="w-full h-full bg-gradient-to-br from-neutral-800 via-neutral-900 to-black flex items-center justify-center">
            <div className="text-center px-8">
              <div className="flex justify-center gap-1 mb-6">
                <span className="w-3 h-3 bg-neutral-500 rotate-45" />
                <span className="w-3 h-3 bg-neutral-400 rotate-45" />
                <span className="w-3 h-3 bg-neutral-300 rotate-45" />
                <span className="w-3 h-3 bg-white rotate-45" />
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Enterprise resource planning built for modern businesses — sales, inventory, finance, and HR in one platform.
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex flex-col justify-center px-12 text-white w-full">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm text-neutral-400 uppercase tracking-widest">360 Tech Solution</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Nexus<span className="text-primary">ERP</span></h1>
          <p className="text-lg text-neutral-400 mb-8 max-w-md">
            Complete Enterprise Resource Planning Solution
          </p>
          <ul className="space-y-4 text-neutral-400">
            <li className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary text-sm font-bold">1</span>
              Manage sales, inventory, finance & HR in one place
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary text-sm font-bold">2</span>
              Role-based access with powerful dashboards
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary text-sm font-bold">3</span>
              Real-time reports, analytics & notifications
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center p-6 bg-background">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
