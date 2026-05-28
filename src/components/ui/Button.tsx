import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const variants = {
    primary:
      "bg-blue-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:bg-blue-400",
    secondary:
      "border border-white/12 bg-white/5 text-white hover:bg-white/10",
  };

  return (
    <a
      className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
