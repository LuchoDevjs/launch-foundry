export type ReadinessArea =
  | "strategy"
  | "structure"
  | "visual"
  | "responsive"
  | "content"
  | "integrations"
  | "qa"
  | "assets";

export type ReadinessItem = {
  id: string;
  area: ReadinessArea;
  label: string;
  done: boolean;
  weight: number;
};

export type TemplateReadiness = {
  templateSlug: string;
  items: ReadinessItem[];
};

export const readinessAreaLabels: Record<ReadinessArea, string> = {
  strategy: "Estrategia",
  structure: "Estructura",
  visual: "Visual",
  responsive: "Responsive",
  content: "Contenido",
  integrations: "Integraciones",
  qa: "QA",
  assets: "Assets",
};

export function calculateReadiness(items: ReadinessItem[]) {
  const total = items.reduce((sum, item) => sum + item.weight, 0);
  const done = items.filter((item) => item.done).reduce((sum, item) => sum + item.weight, 0);

  if (total === 0) return 0;

  return Math.round((done / total) * 100);
}

export function getReadinessStatus(score: number) {
  if (score >= 90) return "Lista";
  if (score >= 65) return "Casi lista";
  if (score >= 35) return "En progreso";
  return "Borrador";
}
