import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export function PremiumCard({
  children,
  className,
  glow = false,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  glow?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-white/10 bg-white/[0.03] p-6",
        glow && "border-red-300/20 bg-[radial-gradient(circle_at_80%_0%,rgba(239,68,68,0.38),rgba(255,255,255,0.035)_40%)] shadow-[0_0_60px_rgba(239,68,68,0.12)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
