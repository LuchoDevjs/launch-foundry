import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { StudioShell } from "@/components/studio/StudioShell";
import { productionPipeline } from "@/content/studio/production-pipeline";
import { projectProductionStates } from "@/content/studio/project-production";
import { productionStatusLabels } from "@/lib/studio/production-pipeline";
import { calculateProjectProgress } from "@/lib/studio/project-production";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Production Pipeline — LaunchFoundry",
  description: "Línea de producción para crear webs vendibles con LaunchFoundry.",
};

export default function ProductionPage() {
  return (
    <StudioShell>
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <Badge variant="outline" className="border-white/15 text-zinc-300">Production Pipeline</Badge>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              La línea de producción para crear webs vendibles.
            </h1>
            <p className="mt-4 text-zinc-400">
              Si mañana aparece un cliente, no improvisamos. Seguimos estos pasos y transformamos una idea en demo, integración, QA y entrega.
            </p>
          </div>
          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle className="text-white">Cómo usar esto</CardTitle>
              <CardDescription>Tu rol es dirigir. El sistema mantiene el orden.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-zinc-400">
              <p>1. Entrás por el paso donde esté el proyecto.</p>
              <p>2. Me pasás contexto, capturas o feedback.</p>
              <p>3. Yo ejecuto y actualizo la fábrica.</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 border-white/10 bg-zinc-950 text-white">
          <CardHeader>
            <CardTitle className="text-white">Estado por proyecto</CardTitle>
            <CardDescription>Acá vemos en qué parte de la fábrica está cada web.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {projectProductionStates.map((project) => {
              const progress = calculateProjectProgress(project.steps);
              const currentStep = productionPipeline.find((step) => step.id === project.currentStepId);

              return (
                <div key={project.projectSlug} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-lg font-semibold text-white">{project.projectName}</h2>
                        <Badge>{progress}%</Badge>
                        {currentStep ? <Badge variant="secondary">Ahora: {currentStep.title}</Badge> : null}
                      </div>
                      <p className="mt-2 text-sm text-zinc-400">Progreso real de producción, no solo páginas sueltas.</p>
                    </div>
                    <Link href={`/clients/${project.projectSlug}`} className={cn(buttonVariants({ variant: "outline", size: "sm" }), "font-sans")}>Abrir ficha</Link>
                  </div>
                  <div className="mt-5 h-2 rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-white" style={{ width: `${progress}%` }} />
                  </div>
                  <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                    {project.steps.map((projectStep) => {
                      const step = productionPipeline.find((item) => item.id === projectStep.stepId);
                      if (!step) return null;

                      return (
                        <div key={projectStep.stepId} className="rounded-xl border border-white/10 bg-black/30 p-4">
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-sm font-medium text-white">{step.title}</p>
                            <Badge variant={projectStep.status === "done" ? "default" : "secondary"}>
                              {productionStatusLabels[projectStep.status]}
                            </Badge>
                          </div>
                          <p className="mt-3 text-xs leading-5 text-zinc-500">{projectStep.note}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <div className="mt-10 space-y-5">
          {productionPipeline.map((step, index) => (
            <Card key={step.id} className="border-white/10 bg-zinc-950 text-white">
              <CardContent className="grid gap-6 p-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
                <div className="grid size-12 place-items-center rounded-2xl bg-white text-lg font-semibold text-black">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-semibold text-white">{step.title}</h2>
                    <Badge variant={step.status === "ready" || step.status === "done" ? "default" : "secondary"}>
                      {productionStatusLabels[step.status]}
                    </Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{step.plainMeaning}</p>
                  <Separator className="my-4" />
                  <p className="text-sm text-zinc-300"><span className="text-zinc-500">Resultado:</span> {step.outcome}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.uses.map((item) => <Badge key={item} variant="outline">{item}</Badge>)}
                  </div>
                </div>
                <div>
                  {step.route ? (
                    <Link href={step.route} className={cn(buttonVariants({ variant: "outline" }), "w-full font-sans lg:w-auto")}>
                      Abrir
                    </Link>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </StudioShell>
  );
}
