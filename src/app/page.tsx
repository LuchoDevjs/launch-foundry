import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { StudioShell } from "@/components/studio/StudioShell";
import { clientProjects } from "@/content/studio/client-projects";
import { serviceOffers } from "@/content/studio/offers";
import { sectionLibrary } from "@/content/studio/section-library";
import { studioTemplates } from "@/content/studio/templates";
import { getTemplateReadiness } from "@/content/studio/template-readiness";
import { integrationRecipes } from "@/content/studio/integration-recipes";
import { nicheDemos } from "@/content/studio/niche-demos";
import { calculateReadiness, getReadinessStatus } from "@/lib/studio/template-readiness";
import { cn } from "@/lib/utils";

const statusLabel = {
  idea: "Idea",
  draft: "Borrador",
  "in-progress": "En progreso",
  ready: "Lista",
  archived: "Archivada",
};

const metrics = [
  { label: "Ofertas vendibles", value: serviceOffers.length.toString(), helper: "Lo que podés salir a vender" },
  { label: "Plantillas", value: studioTemplates.length.toString(), helper: "Activos reutilizables" },
  { label: "Proyectos", value: clientProjects.length.toString(), helper: "Clientes o intakes" },
  { label: "Demos nicho", value: nicheDemos.length.toString(), helper: "Derivadas de plantillas" },
  { label: "Secciones", value: sectionLibrary.length.toString(), helper: "Piezas para recombinar" },
  { label: "Integraciones", value: integrationRecipes.length.toString(), helper: "Recetas para conectar" },
];

export default function Home() {
  return (
    <StudioShell>
      <section className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="pointer-events-none absolute inset-x-6 top-0 -z-10 h-80 rounded-full bg-white/[0.06] blur-3xl" />

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <Card className="overflow-hidden border-white/10 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.14),rgba(9,9,11,0.96)_38%)] text-white shadow-2xl shadow-black/40">
            <CardHeader className="p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="border-white/15 text-zinc-300">Studio OS</Badge>
                <Badge variant="secondary">Fábrica activa</Badge>
              </div>
              <CardTitle className="mt-8 max-w-4xl text-4xl font-semibold tracking-[-0.055em] text-white md:text-7xl">
                Tu centro de control para vender webs premium más rápido.
              </CardTitle>
              <CardDescription className="mt-2 max-w-2xl text-base leading-7 text-zinc-400">
                Acá ordenamos ofertas, plantillas, demos, clientes y secciones reutilizables. La idea es simple: cada trabajo mejora la fábrica.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 p-8 pt-0 sm:flex-row md:px-10 md:pb-10">
              <Link href="/production" className={cn(buttonVariants(), "font-sans")}>Abrir línea de producción</Link>
              <Link href="/templates" className={cn(buttonVariants({ variant: "outline" }), "font-sans")}>Explorar plantillas</Link>
              <Link href="/demos/dark-premium" className={cn(buttonVariants({ variant: "outline" }), "font-sans")}>Ver demo pública</Link>
              <Link href="/checklist" className={cn(buttonVariants({ variant: "outline" }), "font-sans")}>Launch checklist</Link>
              <Link href="/integrations" className={cn(buttonVariants({ variant: "outline" }), "font-sans")}>Integraciones</Link>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-zinc-950 text-white shadow-2xl shadow-black/30">
            <CardHeader>
              <CardTitle className="text-white">Próxima jugada</CardTitle>
              <CardDescription>Lo que más impacto tiene ahora.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-zinc-500">Prioridad</p>
                <p className="mt-2 text-lg font-medium text-white">Convertir Dark Premium en plantilla lista para vender.</p>
              </div>
              <Separator />
              <div className="space-y-4">
                {[
                  "Pulir demo desktop y mobile",
                  "Crear ficha de nicho: Poker Coach",
                  "Usar checklist de lanzamiento",
                ].map((step, index) => (
                  <div key={step} className="flex gap-3">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white text-xs font-semibold text-black">{index + 1}</span>
                    <p className="text-sm text-zinc-300">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
          {metrics.map((metric) => (
            <Card key={metric.label} className="border-white/10 bg-zinc-950 text-white">
              <CardHeader>
                <CardDescription>{metric.label}</CardDescription>
                <CardTitle className="text-4xl text-white">{metric.value}</CardTitle>
                <p className="text-xs text-zinc-500">{metric.helper}</p>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-white">Ofertas para vender</CardTitle>
                  <CardDescription>Paquetes simples para no vender “cualquier web”.</CardDescription>
                </div>
                <Badge variant="outline" className="border-white/15 text-zinc-300">{serviceOffers.length} activas</Badge>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              {serviceOffers.map((offer) => (
                <article key={offer.slug} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <h3 className="text-lg font-semibold text-white">{offer.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{offer.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {offer.bestFor.slice(0, 4).map((item) => <Badge key={item} variant="secondary">{item}</Badge>)}
                  </div>
                </article>
              ))}
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle className="text-white">Proyectos / intakes</CardTitle>
              <CardDescription>Briefs ordenados para arrancar sin caos.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {clientProjects.map((project) => (
                <div key={project.slug} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-white">{project.clientName}</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">{project.businessGoal}</p>
                    </div>
                    <Badge variant="secondary">{statusLabel[project.status]}</Badge>
                  </div>
                  <Separator className="my-4" />
                  <p className="text-sm text-zinc-300"><span className="text-zinc-500">Siguiente:</span> {project.nextAction}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>


        <Card className="mt-6 border-white/10 bg-zinc-950 text-white">
          <CardHeader>
            <CardTitle className="text-white">Demos de nicho</CardTitle>
            <CardDescription>Versiones específicas que nacen desde una plantilla base.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {nicheDemos.map((demo) => (
              <div key={demo.slug} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-white">{demo.name}</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{demo.goal}</p>
                  </div>
                  <Badge>{statusLabel[demo.status]}</Badge>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge variant="secondary">Base: {demo.baseTemplateSlug}</Badge>
                  <Badge variant="outline">{demo.industry}</Badge>
                </div>
                <Separator className="my-5" />
                <p className="text-sm text-zinc-300"><span className="text-zinc-500">Siguiente:</span> {demo.nextActions[0]}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle className="text-white">Plantillas</CardTitle>
              <CardDescription>Activos reutilizables que podemos convertir en ventas.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {studioTemplates.map((template) => {
                const readiness = getTemplateReadiness(template.slug);
                const score = readiness ? calculateReadiness(readiness.items) : 0;

                return (
                  <div key={template.slug} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-medium text-white">{template.name}</p>
                          <Badge>{statusLabel[template.status]}</Badge>
                          <Badge variant="secondary">{getReadinessStatus(score)} · {score}%</Badge>
                        </div>
                        <p className="mt-2 text-sm text-zinc-400">{template.visualDirection}</p>
                      </div>
                      <div className="flex gap-2">
                        <Link href={template.studioHref} className={cn(buttonVariants({ variant: "outline", size: "sm" }), "font-sans")}>Ficha</Link>
                        {template.demoHref ? <Link href={template.demoHref} className={cn(buttonVariants({ size: "sm" }), "font-sans")}>Demo</Link> : null}
                      </div>
                    </div>
                    <div className="mt-5 h-2 rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-white" style={{ width: `${score}%` }} />
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle className="text-white">Biblioteca de secciones</CardTitle>
              <CardDescription>Las piezas que vamos recombinando para trabajar más rápido.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-2">
              {sectionLibrary.map((section) => (
                <div key={section.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="font-medium text-white">{section.name}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{section.purpose}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </StudioShell>
  );
}
