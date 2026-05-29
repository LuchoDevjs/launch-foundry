"use client";

import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { cn } from "@/lib/utils";

const smoothEase = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      transition={{ duration: 0.7, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollGlow({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.22, 0.75], [0.9, 0.45, 0.15]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ y, opacity }}
      className={cn(
        "pointer-events-none absolute left-1/2 top-[330px] -z-10 h-[280px] w-[min(760px,90vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,104,46,0.72),rgba(239,68,68,0.22)_36%,rgba(59,130,246,0.13)_55%,transparent_72%)] blur-3xl",
        className
      )}
    />
  );
}
