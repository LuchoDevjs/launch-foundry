import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { StudioShell } from "@/components/studio/StudioShell";
import { templates } from "@/content/templates";
import { cn } from "@/lib/utils";

const metrics = [
  { label: "Plantillas", value: "3" },
  { label: "Listas para usar", value: "1" },
  { label: "Clientes", value: "0" },
  { label: "Sistema", value: "v0.1" },
];

const nextSteps = [
  "Terminar la plantilla Landing Dark Premium",
  "Crear la plantilla Negocio Local Pro",
  "Definir el flujo Ecommerce + Tiendanube",
];

export default function Home() {
  return (
    <StudioShell>
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader className="p-8">
              <Badge variant="outline" className="w-fit border-white/15 text-zinc-300">Panel interno</Badge>
              <CardTitle className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                La fábrica donde ordenamos plantillas, clientes y piezas reutilizables.
              </CardTitle>
              <CardDescription className="max-w-2xl text-base leading-7 text-zinc-400">
                Esto no es una landing para vender. Es nuestro taller: desde acá vemos demos, estados y próximos pasos.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 p-8 pt-0 sm:flex-row">
              <Link href="/templates" className={cn(buttonVariants(), "font-sans")}>Ver plantillas</Link>
              <Link href="/templates/dark-premium" className={cn(buttonVariants({ variant: "outline" }), "font-sans")}>Abrir Dark Premium</Link>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle>Próximo foco</CardTitle>
              <CardDescription>Qué conviene hacer antes de vender.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {nextSteps.map((step, index) => (
                <div key={step} className="flex gap-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white text-xs font-semibold text-black">{index + 1}</span>
                  <p className="text-sm text-zinc-300">{step}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {metrics.map((metric) => (
            <Card key={metric.label} className="border-white/10 bg-zinc-950 text-white">
              <CardHeader>
                <CardDescription>{metric.label}</CardDescription>
                <CardTitle className="text-3xl text-white">{metric.value}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="mt-6 border-white/10 bg-zinc-950 text-white">
          <CardHeader>
            <CardTitle>Plantillas activas</CardTitle>
            <CardDescription>Las demos que vamos transformando en activos reutilizables.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {templates.map((template) => (
                <div key={template.slug} className="flex flex-col gap-3 rounded-xl px-2 py-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <p className="font-medium text-white">{template.name}</p>
                      <Badge variant="secondary">{template.status}</Badge>
                    </div>
                    <p className="mt-1 text-sm text-zinc-400">{template.description}</p>
                  </div>
                  {template.studioHref !== "#" ? (
                    <Link href={template.studioHref} className={cn(buttonVariants({ variant: "outline", size: "sm" }), "font-sans")}>Abrir</Link>
                  ) : (
                    <Badge variant="outline">Más adelante</Badge>
                  )}
                  <Separator className="md:hidden" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </StudioShell>
  );
}
