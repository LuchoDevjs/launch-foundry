import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StudioShell } from "@/components/studio/StudioShell";
import { clientIntakes } from "@/content/studio/intakes";
import { buildTypeLabels, goalLabels } from "@/lib/studio/intake";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Clientes — LaunchFoundry",
  description: "Intakes y proyectos de clientes dentro de LaunchFoundry.",
};

export default function ClientsPage() {
  return (
    <StudioShell>
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <Badge variant="outline" className="border-white/15 text-zinc-300">Client Intake</Badge>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">Clientes ordenados desde el primer minuto.</h1>
            <p className="mt-4 text-zinc-400">
              Cada proyecto arranca con una ficha: qué vende, qué objetivo tiene, qué integraciones necesita y qué plantilla conviene usar.
            </p>
          </div>
          <Link href="/" className={cn(buttonVariants({ variant: "outline" }), "font-sans")}>Volver al panel</Link>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {clientIntakes.map((intake) => (
            <Card key={intake.slug} className="border-white/10 bg-zinc-950 text-white">
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{buildTypeLabels[intake.buildType]}</Badge>
                  <Badge variant="secondary">{goalLabels[intake.goal]}</Badge>
                </div>
                <CardTitle className="pt-4 text-2xl text-white">{intake.businessName}</CardTitle>
                <CardDescription>{intake.offerSummary}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {intake.visualReferences.map((reference) => <Badge key={reference} variant="outline">{reference}</Badge>)}
                </div>
                <Link href={`/clients/${intake.slug}`} className={cn(buttonVariants(), "mt-8 font-sans")}>Abrir ficha</Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </StudioShell>
  );
}
