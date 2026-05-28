import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Dark Premium Landing — LaunchFoundry",
  description: "First reusable premium dark landing page template.",
};

const cards = [
  "High-contrast hero",
  "Glass cards",
  "Blue glow system",
  "Conversion sections",
];

export default function DarkPremiumTemplatePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white">
      <section className="relative min-h-screen pb-24 pt-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.32),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.16),transparent_28%)]" />
        <Container>
          <header className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">
            <Link href="/templates" className="text-sm text-slate-300 hover:text-white">← Templates</Link>
            <p className="text-sm font-semibold text-white">Dark Premium Landing</p>
            <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-100">Draft</span>
          </header>
          <div className="mx-auto max-w-5xl py-28 text-center">
            <div className="mx-auto mb-6 w-fit rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
              Premium dark template
            </div>
            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
              A serious landing page for premium offers.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300">
              This is the first template we will shape with your references: dark, minimal, polished, and built to become reusable for clients.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button href="#preview">Review structure</Button>
              <Button href="/templates" variant="secondary">Back to library</Button>
            </div>
          </div>
          <div id="preview" className="grid gap-4 md:grid-cols-4">
            {cards.map((card) => (
              <div key={card} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-blue-950/20">
                <div className="mb-12 size-10 rounded-2xl bg-blue-400/15 ring-1 ring-blue-300/20" />
                <p className="font-medium text-white">{card}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
