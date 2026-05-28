import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StudioShell } from "@/components/studio/StudioShell";
import { launchChecklist } from "@/content/studio/launch-checklist";
import { categoryLabels, type LaunchChecklistCategory } from "@/lib/studio/launch-checklist";

const categories = Object.keys(categoryLabels) as LaunchChecklistCategory[];

export const metadata = {
  title: "Launch Checklist — LaunchFoundry",
  description: "Checklist de calidad antes de entregar una landing o ecommerce.",
};

export default function ChecklistPage() {
  const requiredCount = launchChecklist.filter((item) => item.required).length;

  return (
    <StudioShell>
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Badge variant="outline" className="border-white/15 text-zinc-300">Launch Checklist</Badge>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              La barrera de calidad antes de entregar.
            </h1>
            <p className="mt-4 text-zinc-400">
              Esta lista evita entregar webs flojas. Si una landing no pasa esto, todavía no está lista para un cliente.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:min-w-72">
            <Card className="border-white/10 bg-zinc-950 text-white">
              <CardHeader>
                <CardDescription>Total</CardDescription>
                <CardTitle className="text-3xl text-white">{launchChecklist.length}</CardTitle>
              </CardHeader>
            </Card>
            <Card className="border-white/10 bg-zinc-950 text-white">
              <CardHeader>
                <CardDescription>Obligatorios</CardDescription>
                <CardTitle className="text-3xl text-white">{requiredCount}</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {categories.map((category) => {
            const items = launchChecklist.filter((item) => item.category === category);
            if (items.length === 0) return null;

            return (
              <Card key={category} className="border-white/10 bg-zinc-950 text-white">
                <CardHeader>
                  <CardTitle className="text-white">{categoryLabels[category]}</CardTitle>
                  <CardDescription>{items.length} punto{items.length === 1 ? "" : "s"} de control</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="flex items-start justify-between gap-4">
                        <h2 className="font-medium text-white">{item.title}</h2>
                        <Badge variant={item.required ? "default" : "secondary"}>{item.required ? "Obligatorio" : "Opcional"}</Badge>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </StudioShell>
  );
}
