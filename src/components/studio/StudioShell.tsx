import Link from "next/link";
import type { ReactNode } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Panel", href: "/" },
  { label: "Plantillas", href: "/templates" },
  { label: "Clientes", href: "/clients" },
  { label: "Sistema", href: "/system" },
  { label: "Checklist", href: "/checklist" },
];

export function StudioShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-black font-sans text-white">
      <div className="border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 font-sans font-semibold tracking-tight">
            <span className="grid size-8 place-items-center rounded-lg border border-white/15 bg-white text-sm text-black">LF</span>
            LaunchFoundry
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link key={item.label} href={item.href} className={cn(buttonVariants({ variant: "ghost" }), "font-sans")}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/demos/dark-premium" className={cn(buttonVariants({ variant: "outline" }), "font-sans")}>
            Ver demo
          </Link>
        </div>
      </div>
      {children}
    </main>
  );
}
