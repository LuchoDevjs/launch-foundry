export type LaunchChecklistCategory =
  | "strategy"
  | "content"
  | "design"
  | "responsive"
  | "seo"
  | "integrations"
  | "performance"
  | "handoff";

export type LaunchChecklistItem = {
  id: string;
  category: LaunchChecklistCategory;
  title: string;
  description: string;
  required: boolean;
};

export const categoryLabels: Record<LaunchChecklistCategory, string> = {
  strategy: "Estrategia",
  content: "Contenido",
  design: "Diseño",
  responsive: "Responsive",
  seo: "SEO",
  integrations: "Integraciones",
  performance: "Performance",
  handoff: "Entrega",
};
