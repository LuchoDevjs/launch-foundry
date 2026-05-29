import type { NicheDemo } from "@/lib/studio/niche-demo";

export const nicheDemos: NicheDemo[] = [
  {
    slug: "poker-coach",
    name: "Poker Coach Demo",
    status: "in-progress",
    baseTemplateSlug: "dark-premium",
    intakeSlug: "poker-coach-demo",
    industry: "Coaching / Poker",
    goal: "Captar alumnos para coaching NL25/NL50.",
    demoHref: "/demos/poker-coach",
    studioHref: "/clients/poker-coach-demo",
    contentChanges: [
      "Cambiar promesa principal hacia mejora postflop",
      "Reemplazar prueba social genérica por resultados/estudio",
      "Evitar estética casino o gambling",
      "CTA principal: agendar revisión estratégica",
    ],
    keptSections: ["Hero", "Prueba social", "Comparación", "Servicios", "Proceso", "FAQ", "CTA final"],
    requiredIntegrations: ["vercel", "whatsapp", "forms"],
    nextActions: [
      "Pulir copy específico de Poker Coach",
      "Revisar visualmente /demos/poker-coach",
      "Revisar si el estilo dark/red sirve o si conviene azul premium",
    ],
  },
];

export function getNicheDemoBySlug(slug: string) {
  return nicheDemos.find((demo) => demo.slug === slug);
}
