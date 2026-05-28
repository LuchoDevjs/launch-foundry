export type StudioStatus = "idea" | "draft" | "in-progress" | "ready" | "archived";

export type TemplateCategory =
  | "premium-landing"
  | "local-business"
  | "ecommerce-storefront"
  | "portfolio"
  | "saas";

export type DeliveryTarget = "vercel" | "tiendanube" | "shopify" | "mercadopago" | "whatsapp" | "forms";

export type StudioSection = {
  id: string;
  name: string;
  purpose: string;
  reusable: boolean;
};

export type StudioTemplate = {
  slug: string;
  name: string;
  category: TemplateCategory;
  status: StudioStatus;
  studioHref: string;
  demoHref?: string;
  bestFor: string[];
  visualDirection: string;
  sections: StudioSection[];
  integrations: DeliveryTarget[];
  qualityChecklist: string[];
};

export type ClientProject = {
  slug: string;
  clientName: string;
  offerType: "landing" | "ecommerce";
  status: StudioStatus;
  templateSlug?: string;
  businessGoal: string;
  nextAction: string;
  links: {
    preview?: string;
    production?: string;
    repository?: string;
  };
};

export type ServiceOffer = {
  slug: string;
  name: string;
  description: string;
  includes: string[];
  notIncluded: string[];
  bestFor: string[];
};
