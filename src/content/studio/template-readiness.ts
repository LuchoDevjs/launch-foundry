import type { TemplateReadiness } from "@/lib/studio/template-readiness";

export const templateReadiness: TemplateReadiness[] = [
  {
    templateSlug: "dark-premium",
    items: [
      { id: "offer-clear", area: "strategy", label: "Oferta y CTA claros", done: true, weight: 12 },
      { id: "sections-complete", area: "structure", label: "Secciones base completas", done: true, weight: 14 },
      { id: "visual-direction", area: "visual", label: "Dirección visual definida", done: true, weight: 14 },
      { id: "desktop-pass", area: "visual", label: "Revisión visual desktop fina", done: false, weight: 12 },
      { id: "mobile-pass", area: "responsive", label: "Revisión mobile fina", done: false, weight: 14 },
      { id: "content-model", area: "content", label: "Contenido separado del layout", done: true, weight: 10 },
      { id: "integration-plan", area: "integrations", label: "Integraciones recomendadas definidas", done: true, weight: 8 },
      { id: "launch-checklist", area: "qa", label: "Launch Checklist aprobado", done: false, weight: 10 },
      { id: "screenshots", area: "assets", label: "Capturas listas para vender", done: false, weight: 6 },
    ],
  },
];

export function getTemplateReadiness(templateSlug: string) {
  return templateReadiness.find((readiness) => readiness.templateSlug === templateSlug);
}
