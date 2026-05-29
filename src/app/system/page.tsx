import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StudioShell } from "@/components/studio/StudioShell";
import { cn } from "@/lib/utils";
import { serviceOffers } from "@/content/studio/offers";
import { sectionLibrary } from "@/content/studio/section-library";

const principles = [
  "Panel interno separado de demos públicas",
  "Cada cliente empieza con intake",
  "Cada demo mejora una plantilla reusable",
  "Ecommerce: vidriera propia, checkout en Tiendanube",
  "No vender cualquier web: vender paquetes claros",
];

export const metadata = {
  title: "Sistema — LaunchFoundry",
  description: "Arquitectura operativa de LaunchFoundry.",
};

export default function SystemPage() {
  return (
    <StudioShell>
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="max-w-3xl">
          <Badge variant="outline" className="border-white/15 text-zinc-300">Sistema</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">Las reglas para que la fábrica no se vuelva caos.</h1>
          <p className="mt-4 text-zinc-400">Esta página resume cómo pensamos el negocio y la herramienta a largo plazo.</p>
          <Link href="/system/components" className={cn(buttonVariants({ variant: "outline" }), "mt-6 font-sans")}>Ver componentes públicos</Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Card className="border-white/10 bg-zinc-950 text-white lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-white">Principios operativos</CardTitle>
              <CardDescription>Si respetamos esto, podemos escalar sin improvisar.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-2">
              {principles.map((principle, index) => (
                <div key={principle} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <span className="text-sm text-zinc-500">0{index + 1}</span>
                  <p className="mt-6 text-sm font-medium text-zinc-100">{principle}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-zinc-950 text-white">
            <CardHeader>
              <CardTitle className="text-white">Inventario</CardTitle>
              <CardDescription>Qué tenemos modelado hoy.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-3xl font-semibold text-white">{serviceOffers.length}</p>
                <p className="text-sm text-zinc-500">ofertas vendibles</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-3xl font-semibold text-white">{sectionLibrary.length}</p>
                <p className="text-sm text-zinc-500">secciones reutilizables</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </StudioShell>
  );
}
