import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">{eyebrow}</p> : null}
      <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] text-white sm:text-6xl">{title}</h2>
      {description ? <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">{description}</p> : null}
    </div>
  );
}
