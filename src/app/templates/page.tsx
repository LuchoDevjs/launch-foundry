import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StudioShell } from "@/components/studio/StudioShell";
import { templates } from "@/content/templates";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Plantillas — LaunchFoundry",
  description: "Plantillas reutilizables para landing pages y ecommerce.",
};

export default function TemplatesPage() {
  return (
    <StudioShell>
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <Badge variant="outline" className="border-white/15 text-zinc-300">Biblioteca</Badge>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Plantillas reutilizables.
            </h1>
            <p className="mt-4 text-zinc-400">
              Acá vive nuestro inventario: lo que ya podemos usar, lo que está en construcción y lo que viene después.
            </p>
          </div>
          <Link href="/" className={cn(buttonVariants({ variant: "outline" }), "font-sans")}>Volver al panel</Link>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {templates.map((template) => {
            const isAvailable = template.studioHref !== "#";

            return (
              <Card key={template.slug} className="border-white/10 bg-zinc-950 text-white">
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <Badge variant="outline" className="border-white/15 text-zinc-300">{template.type}</Badge>
                    <Badge variant={template.status === "En progreso" ? "default" : "secondary"}>{template.status}</Badge>
                  </div>
                  <CardTitle className="pt-6 text-2xl text-white">{template.name}</CardTitle>
                  <CardDescription className="leading-6">{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {template.bestFor.map((item) => (
                      <Badge key={item} variant="secondary">{item}</Badge>
                    ))}
                  </div>
                  {isAvailable ? (
                    <Link href={template.studioHref} className={cn(buttonVariants(), "mt-8 font-sans")}>Abrir demo</Link>
                  ) : (
                    <p className="mt-8 text-sm text-zinc-500">Más adelante</p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </StudioShell>
  );
}
