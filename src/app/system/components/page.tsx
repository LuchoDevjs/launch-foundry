import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StudioShell } from "@/components/studio/StudioShell";
import { FAQBlock, GlowBackground, PremiumButton, PremiumCard, SectionHeader, TrustRow } from "@/components/public";
import { cn } from "@/lib/utils";

const sampleFaqs = [
  {
    question: "¿Esto se puede reutilizar en otra demo?",
    answer: "Sí. La idea es que estas piezas sean la base visual para crear demos más rápido sin arrancar desde cero.",
  },
  {
    question: "¿Esto reemplaza a shadcn?",
    answer: "No. shadcn queda para el panel interno. Estos componentes son para las landings públicas.",
  },
];

export const metadata = {
  title: "Componentes Públicos — LaunchFoundry",
  description: "Galería interna de componentes premium para demos públicas.",
};

export default function PublicComponentsPage() {
  return (
    <StudioShell>
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <Badge variant="outline" className="border-white/15 text-zinc-300">Public Components</Badge>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Nuestra caja de piezas premium.
            </h1>
            <p className="mt-4 text-zinc-400">
              Estos componentes son para demos públicas y landings vendibles. El panel usa shadcn; las demos usan esta biblioteca visual.
            </p>
          </div>
          <Link href="/system" className={cn(buttonVariants({ variant: "outline" }), "font-sans")}>Volver a Sistema</Link>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle className="text-white">Botones premium</CardTitle>
              <CardDescription>CTAs para demos públicas.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <PremiumButton href="#">Primary CTA</PremiumButton>
              <PremiumButton href="#" variant="secondary">Secondary CTA</PremiumButton>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle className="text-white">Header de sección</CardTitle>
              <CardDescription>Jerarquía visual reusable.</CardDescription>
            </CardHeader>
            <CardContent>
              <SectionHeader eyebrow="Sistema visual" title="Diseñamos una vez, reutilizamos muchas." description="La consistencia visual nos permite movernos más rápido sin que cada landing parezca improvisada." />
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-2">
          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle className="text-white">Cards premium</CardTitle>
              <CardDescription>Cards normales y con glow.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <PremiumCard>
                <div className="mb-10 size-10 rounded-2xl bg-white/10" />
                <h2 className="text-lg font-medium text-white">Card base</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">Para servicios, beneficios, pasos y bloques simples.</p>
              </PremiumCard>
              <PremiumCard glow>
                <div className="mb-10 size-10 rounded-2xl bg-red-400/20" />
                <h2 className="text-lg font-medium text-white">Card con glow</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-300">Para destacar una propuesta, comparación o CTA importante.</p>
              </PremiumCard>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle className="text-white">Trust row</CardTitle>
              <CardDescription>Fila de confianza, logos o partners.</CardDescription>
            </CardHeader>
            <CardContent>
              <TrustRow items={["Shopify", "Meta", "Google", "Tiendanube"]} />
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <Card className="relative overflow-hidden border-white/10 bg-zinc-950 text-white">
            <GlowBackground />
            <CardHeader>
              <CardTitle className="text-white">Glow background</CardTitle>
              <CardDescription>Fondo atmosférico para hero sections.</CardDescription>
            </CardHeader>
            <CardContent className="relative py-20 text-center">
              <h2 className="mx-auto max-w-2xl text-4xl font-medium tracking-[-0.055em] text-white md:text-6xl">
                Fondo premium para demos dark.
              </h2>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle className="text-white">FAQ block</CardTitle>
              <CardDescription>Preguntas frecuentes reutilizables.</CardDescription>
            </CardHeader>
            <CardContent>
              <FAQBlock faqs={sampleFaqs} />
            </CardContent>
          </Card>
        </div>
      </section>
    </StudioShell>
  );
}
