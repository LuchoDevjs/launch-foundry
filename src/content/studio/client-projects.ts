import type { ClientProject } from "@/lib/studio/types";

export const clientProjects: ClientProject[] = [
  {
    slug: "poker-coach-demo",
    clientName: "Poker Coach Demo",
    offerType: "landing",
    status: "idea",
    templateSlug: "dark-premium",
    businessGoal: "Captar alumnos para coaching de cash games NL25/NL50.",
    nextAction: "Crear demo específica a partir de Landing Dark Premium.",
    links: {
      preview: "/clients/poker-coach-demo",
    },
  },
];
