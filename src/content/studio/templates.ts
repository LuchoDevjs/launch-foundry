import type { StudioTemplate } from "@/lib/studio/types";

export const studioTemplates: StudioTemplate[] = [
  {
    slug: "dark-premium",
    name: "Landing Dark Premium",
    category: "premium-landing",
    status: "in-progress",
    studioHref: "/templates/dark-premium",
    demoHref: "/demos/dark-premium",
    bestFor: ["Coaches", "Consultores", "SaaS", "Agencias"],
    visualDirection: "Negro profundo, blanco, rojo/naranja glow, minimalismo premium.",
    integrations: ["vercel", "whatsapp", "forms"],
    sections: [
      {
        id: "hero-centered-proof",
        name: "Hero centrado con prueba social",
        purpose: "Presentar promesa principal y CTA.",
        reusable: true,
      },
      {
        id: "trust-logo-row",
        name: "Fila de confianza",
        purpose: "Mostrar señales de autoridad.",
        reusable: true,
      },
      {
        id: "comparison-cards",
        name: "Comparación",
        purpose: "Diferenciar la propuesta frente a alternativas genéricas.",
        reusable: true,
      },
      {
        id: "process-steps",
        name: "Proceso",
        purpose: "Explicar cómo se trabaja y bajar fricción.",
        reusable: true,
      },
      {
        id: "faq-accordion",
        name: "FAQ",
        purpose: "Responder objeciones antes del contacto.",
        reusable: true,
      },
    ],
    qualityChecklist: [
      "Desktop visual pass",
      "Mobile visual pass",
      "CTA claro arriba del fold",
      "Secciones completas",
      "Contenido editable separado del layout",
      "Sin UI interna en demo pública",
    ],
  },
];
