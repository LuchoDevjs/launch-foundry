import type { ProjectProductionState } from "@/lib/studio/project-production";

export const projectProductionStates: ProjectProductionState[] = [
  {
    projectSlug: "poker-coach-demo",
    projectName: "Poker Coach Demo",
    currentStepId: "niche-demo",
    steps: [
      {
        stepId: "intake",
        status: "done",
        note: "Ficha base creada con objetivo, audiencia, referencias e integraciones.",
      },
      {
        stepId: "offer",
        status: "done",
        note: "Oferta recomendada: Landing Premium.",
      },
      {
        stepId: "template",
        status: "done",
        note: "Plantilla base sugerida: Landing Dark Premium.",
      },
      {
        stepId: "niche-demo",
        status: "ready",
        note: "Falta crear la ruta visible /demos/poker-coach.",
      },
      {
        stepId: "integrations",
        status: "not-started",
        note: "Probables integraciones: WhatsApp, formulario y Vercel.",
      },
      {
        stepId: "qa",
        status: "not-started",
        note: "Se corre cuando exista la demo específica.",
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
