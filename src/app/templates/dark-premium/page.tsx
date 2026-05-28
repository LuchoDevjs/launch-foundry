import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { StudioShell } from "@/components/studio/StudioShell";
import { studioTemplates } from "@/content/studio/templates";
import { getTemplateReadiness } from "@/content/studio/template-readiness";
import { calculateReadiness, getReadinessStatus, readinessAreaLabels } from "@/lib/studio/template-readiness";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Landing Dark Premium — LaunchFoundry",
  description: "Ficha interna de la plantilla Landing Dark Premium.",
};

export default function DarkPremiumTemplateStudioPage() {
  const template = studioTemplates.find((item) => item.slug === "dark-premium");
  const readiness = getTemplateReadiness("dark-premium");
  const readinessScore = readiness ? calculateReadiness(readiness.items) : 0;

  if (!template) {
    notFound();
  }

  return (
    <StudioShell>
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="outline" className="border-white/15 text-zinc-300">Ficha interna</Badge>
              <Badge>En progreso</Badge>
              <Badge variant="secondary">{getReadinessStatus(readinessScore)} · {readinessScore}%</Badge>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">{template.name}</h1>
            <p className="mt-4 text-lg leading-8 text-zinc-400">{template.visualDirection}</p>
          </div>
          <div className="flex gap-3">
            <Link href="/templates" className={cn(buttonVariants({ variant: "outline" }), "font-sans")}>Volver</Link>
            {template.demoHref ? (
              <Link href={template.demoHref} className={cn(buttonVariants(), "font-sans")}>Abrir demo pública</Link>
            ) : null}
          </div>
        </div>


        {readiness ? (
          <Card className="mt-8 border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle>Readiness de plantilla</CardTitle>
              <CardDescription>Cuánto falta para que esta plantilla esté lista para vender.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 h-3 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-white" style={{ width: `${readinessScore}%` }} />
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {readiness.items.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-white">{item.label}</p>
                        <p className="mt-1 text-xs text-zinc-500">{readinessAreaLabels[item.area]} · peso {item.weight}</p>
                      </div>
                      <Badge variant={item.done ? "default" : "secondary"}>{item.done ? "OK" : "Falta"}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : null}

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle>Sirve para</CardTitle>
              <CardDescription>Casos donde esta plantilla debería funcionar bien.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {template.bestFor.map((item) => <Badge key={item} variant="secondary">{item}</Badge>)}
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle>Secciones planeadas</CardTitle>
              <CardDescription>La estructura reusable que después adaptamos por cliente.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {template.sections.map((section) => (
                <div key={section.id} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm font-medium text-zinc-100">{section.name}</p>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">{section.purpose}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle>Checklist de calidad</CardTitle>
              <CardDescription>Qué tiene que cumplir antes de estar lista para vender.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {template.qualityChecklist.map((item, index) => (
                <div key={item} className="flex gap-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white text-xs font-semibold text-black">{index + 1}</span>
                  <p className="text-sm text-zinc-300">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle>Integraciones posibles</CardTitle>
              <CardDescription>Conexiones pensadas para esta plantilla.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {template.integrations.map((integration) => <Badge key={integration} variant="outline">{integration}</Badge>)}
              </div>
              <Separator />
              <p className="text-sm leading-7 text-zinc-400">
                Regla: la ficha interna puede usar shadcn. La demo pública no debe mezclar UI interna ni controles de Studio.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </StudioShell>
  );
}
