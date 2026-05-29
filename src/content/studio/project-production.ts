import type { ProjectProductionState } from "@/lib/studio/project-production";

export const projectProductionStates: ProjectProductionState[] = [
  {
    projectSlug: "dark-premium-template",
    projectName: "Landing Dark Premium",
    currentStepId: "niche-demo",
    steps: [
      {
        stepId: "intake",
        status: "done",
        note: "Dirección base definida: landing dark premium para servicios de alto valor.",
      },
      {
        stepId: "offer",
        status: "done",
        note: "Oferta recomendada: Landing Premium.",
      },
      {
        stepId: "template",
        status: "done",
        note: "Plantilla base: Dark Premium.",
      },
      {
        stepId: "niche-demo",
        status: "ready",
        note: "Falta elegir historia/nicho y convertir /demos/dark-premium en una demo excelente.",
      },
      {
        stepId: "integrations",
        status: "not-started",
        note: "Probables integraciones: WhatsApp, formulario y Vercel.",
      },
      {
        stepId: "qa",
        status: "not-started",
        note: "Se corre cuando Dark Premium esté visualmente fuerte.",
      },
      {
        stepId: "deploy",
        status: "not-started",
        note: "Se define al final del flujo.",
      },
    ],
  },
];

export function getProjectProductionState(projectSlug: string) {
  return projectProductionStates.find((project) => project.projectSlug === projectSlug);
}
