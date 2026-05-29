import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export function PremiumButton({
  children,
  variant = "primary",
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-300",
        variant === "primary" && "bg-red-500 text-white shadow-[0_0_34px_rgba(239,68,68,0.48)] hover:bg-red-400",
        variant === "secondary" && "border border-white/12 bg-white/5 text-white hover:bg-white/10",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
