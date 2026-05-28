import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { StudioShell } from "@/components/studio/StudioShell";
import { integrationRecipes } from "@/content/studio/integration-recipes";

export const metadata = {
  title: "Integraciones — LaunchFoundry",
  description: "Recetas para conectar WhatsApp, formularios, Tiendanube, Vercel y más.",
};

export default function IntegrationsPage() {
  return (
    <StudioShell>
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="max-w-3xl">
          <Badge variant="outline" className="border-white/15 text-zinc-300">Integration Recipes</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Recetas para conectar lo que se repite.
          </h1>
          <p className="mt-4 text-zinc-400">
            Son chuletas profesionales: qué pedir, cómo conectarlo, qué revisar y qué no prometer.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {integrationRecipes.map((recipe) => (
            <Card key={recipe.slug} className="border-white/10 bg-zinc-950 text-white">
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{recipe.name}</Badge>
                  <Badge variant="secondary">{recipe.target}</Badge>
                </div>
                <CardTitle className="pt-4 text-2xl text-white">{recipe.plainMeaning}</CardTitle>
                <CardDescription>{recipe.whenToUse}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <RecipeBlock title="Qué necesitamos" items={recipe.whatWeNeed} />
                <Separator />
                <RecipeBlock title="Pasos" items={recipe.implementationSteps} ordered />
                <Separator />
                <RecipeBlock title="QA" items={recipe.qaChecklist} />
                <Separator />
                <RecipeBlock title="Límites" items={recipe.boundaries} />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </StudioShell>
  );
}

function RecipeBlock({ title, items, ordered = false }: { title: string; items: string[]; ordered?: boolean }) {
  return (
    <div>
      <h2 className="text-sm font-medium text-white">{title}</h2>
      <div className="mt-3 space-y-2">
        {items.map((item, index) => (
          <p key={item} className="text-sm leading-6 text-zinc-400">
            <span className="text-zinc-600">{ordered ? `${index + 1}.` : "•"}</span> {item}
          </p>
        ))}
      </div>
    </div>
  );
}
