import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { StudioShell } from "@/components/studio/StudioShell";
import { getClientIntakeBySlug } from "@/content/studio/intakes";
import { buildTypeLabels, goalLabels } from "@/lib/studio/intake";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Poker Coach Demo — LaunchFoundry",
  description: "Ficha de intake para demo de coach de poker.",
};

export default function PokerCoachClientPage() {
  const intake = getClientIntakeBySlug("poker-coach-demo");

  if (!intake) notFound();

  return (
    <StudioShell>
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="border-white/15 text-zinc-300">Ficha cliente</Badge>
              <Badge>{buildTypeLabels[intake.buildType]}</Badge>
              <Badge variant="secondary">{goalLabels[intake.goal]}</Badge>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">{intake.businessName}</h1>
            <p className="mt-4 text-lg leading-8 text-zinc-400">{intake.offerSummary}</p>
          </div>
          <div className="flex gap-3">
            <Link href="/clients" className={cn(buttonVariants({ variant: "outline" }), "font-sans")}>Volver</Link>
            <Link href="/templates/dark-premium" className={cn(buttonVariants(), "font-sans")}>Ver plantilla sugerida</Link>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle className="text-white">Contexto comercial</CardTitle>
              <CardDescription>Qué necesita vender y a quién.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 text-sm leading-7 text-zinc-300">
              <div>
                <p className="text-zinc-500">Rubro</p>
                <p>{intake.industry}</p>
              </div>
              <Separator />
              <div>
                <p className="text-zinc-500">Audiencia</p>
                <p>{intake.audience}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle className="text-white">Decisiones iniciales</CardTitle>
              <CardDescription>Notas para construir sin arrancar en caos.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {intake.decisionNotes.map((note, index) => (
                <div key={note} className="flex gap-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white text-xs font-semibold text-black">{index + 1}</span>
                  <p className="text-sm text-zinc-300">{note}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle className="text-white">Referencias visuales</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {intake.visualReferences.map((reference) => <Badge key={reference} variant="secondary">{reference}</Badge>)}
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle className="text-white">Integraciones necesarias</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {intake.requiredIntegrations.map((integration) => <Badge key={integration} variant="outline">{integration}</Badge>)}
            </CardContent>
          </Card>
        </div>
      </section>
    </StudioShell>
  );
}
