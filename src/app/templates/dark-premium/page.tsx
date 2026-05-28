import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { StudioShell } from "@/components/studio/StudioShell";
import { getTemplateBySlug } from "@/content/templates";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Landing Dark Premium — LaunchFoundry",
  description: "Ficha interna de la plantilla Landing Dark Premium.",
};

export default function DarkPremiumTemplateStudioPage() {
  const template = getTemplateBySlug("dark-premium");

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
              <Badge>{template.status}</Badge>
              <Badge variant="secondary">{template.type}</Badge>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">{template.name}</h1>
            <p className="mt-4 text-lg leading-8 text-zinc-400">{template.description}</p>
          </div>
          <div className="flex gap-3">
            <Link href="/templates" className={cn(buttonVariants({ variant: "outline" }), "font-sans")}>Volver</Link>
            {template.demoHref ? (
              <Link href={template.demoHref} className={cn(buttonVariants(), "font-sans")}>Abrir demo pública</Link>
            ) : null}
          </div>
        </div>

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
                <div key={section} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-200">{section}</div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle>Falta hacer</CardTitle>
              <CardDescription>Checklist de construcción.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {template.todo.map((item, index) => (
                <div key={item} className="flex gap-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white text-xs font-semibold text-black">{index + 1}</span>
                  <p className="text-sm text-zinc-300">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle>Notas de arquitectura</CardTitle>
              <CardDescription>Reglas para no ensuciar la fábrica.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {template.notes.map((note) => (
                <div key={note}>
                  <p className="text-sm text-zinc-300">{note}</p>
                  <Separator className="mt-4" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </StudioShell>
  );
}
