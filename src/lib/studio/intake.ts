import type { DeliveryTarget } from "@/lib/studio/types";

export type ClientGoal = "leads" | "whatsapp" | "sales" | "bookings" | "brand";
export type ClientBuildType = "premium-landing" | "ecommerce-storefront";

export type ClientIntake = {
  slug: string;
  businessName: string;
  buildType: ClientBuildType;
  goal: ClientGoal;
  industry: string;
  offerSummary: string;
  audience: string;
  visualReferences: string[];
  requiredIntegrations: DeliveryTarget[];
  suggestedTemplateSlug: string;
  decisionNotes: string[];
};

export const goalLabels: Record<ClientGoal, string> = {
  leads: "Conseguir consultas",
  whatsapp: "Llevar a WhatsApp",
  sales: "Vender productos",
  bookings: "Reservas / turnos",
  brand: "Presentar marca",
};

export const buildTypeLabels: Record<ClientBuildType, string> = {
  "premium-landing": "Landing premium",
  "ecommerce-storefront": "Vidriera ecommerce",
};
