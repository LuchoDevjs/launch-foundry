import type { NicheDemo } from "@/lib/studio/niche-demo";

export const nicheDemos: NicheDemo[] = [
  {
    slug: "premium-service-business",
    name: "Premium Service Business Demo",
    status: "idea",
    baseTemplateSlug: "dark-premium",
    industry: "Servicios premium",
    goal: "Captar consultas calificadas para un servicio de alto ticket.",
    demoHref: "/demos/dark-premium",
    contentChanges: [
      "Definir una historia comercial fuerte para una oferta demandada",
      "Convertir Dark Premium en demo completa y vendible",
      "Evitar crear demos nuevas hasta que la base esté excelente",
    ],
    keptSections: ["Hero", "Prueba social", "Problema", "Método", "Servicios", "Proceso", "FAQ", "CTA final"],
    requiredIntegrations: ["vercel", "whatsapp", "forms"],
    nextActions: [
      "Elegir nicho demandado para Dark Premium",
      "Reescribir /demos/dark-premium con esa historia",
      "Pulir visual desktop/mobile antes de crear otra demo",
    ],
  },
];

export function getNicheDemoBySlug(slug: string) {
  return nicheDemos.find((demo) => demo.slug === slug);
}
