import type { DeliveryTarget } from "@/lib/studio/types";

export type IntegrationRecipe = {
  slug: string;
  target: DeliveryTarget | "analytics" | "domain";
  name: string;
  plainMeaning: string;
  whenToUse: string;
  whatWeNeed: string[];
  implementationSteps: string[];
  qaChecklist: string[];
  boundaries: string[];
};
