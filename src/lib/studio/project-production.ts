import type { ProductionStepStatus } from "@/lib/studio/production-pipeline";

export type ProjectProductionStep = {
  stepId: string;
  status: ProductionStepStatus;
  note: string;
};

export type ProjectProductionState = {
  projectSlug: string;
  projectName: string;
  currentStepId: string;
  steps: ProjectProductionStep[];
};

export function calculateProjectProgress(steps: ProjectProductionStep[]) {
  if (steps.length === 0) return 0;
  const done = steps.filter((step) => step.status === "done").length;
  return Math.round((done / steps.length) * 100);
}
