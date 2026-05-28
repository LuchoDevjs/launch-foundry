export type ProductionStepStatus = "not-started" | "ready" | "blocked" | "done";

export type ProductionStep = {
  id: string;
  order: number;
  title: string;
  plainMeaning: string;
  outcome: string;
  route?: string;
  uses: string[];
  status: ProductionStepStatus;
};

export const productionStatusLabels: Record<ProductionStepStatus, string> = {
  "not-started": "Sin empezar",
  ready: "Listo para usar",
  blocked: "Bloqueado",
  done: "Hecho",
};
