import type { DeliveryTarget, StudioStatus } from "@/lib/studio/types";

export type NicheDemo = {
  slug: string;
  name: string;
  status: StudioStatus;
  baseTemplateSlug: string;
  intakeSlug?: string;
  industry: string;
  goal: string;
  demoHref: string;
  studioHref?: string;
  contentChanges: string[];
  keptSections: string[];
  requiredIntegrations: DeliveryTarget[];
  nextActions: string[];
};
