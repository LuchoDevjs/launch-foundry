export type TemplateStatus = "Idea" | "En progreso" | "Lista";

export type TemplateDefinition = {
  slug: string;
  name: string;
  type: "Landing Page" | "Ecommerce";
  status: TemplateStatus;
  description: string;
  bestFor: string[];
  studioHref: string;
  demoHref?: string;
  sections: string[];
  todo: string[];
  notes: string[];
};

export const templates: TemplateDefinition[] = [
  {
    slug: "dark-premium",
    name: "Landing Dark Premium",
    type: "Landing Page",
    status: "En progreso",
    description:
      "Una landing oscura, elegante y de alto impacto para coaches, SaaS, agencias y servicios premium.",
    bestFor: ["Coaches", "Consultores", "SaaS", "Agencias"],
    studioHref: "/templates/dark-premium",
    demoHref: "/demos/dark-premium",
    sections: ["Hero", "Prueba social", "Comparación", "Servicios", "Proceso", "FAQ", "CTA final"],
    todo: [
      "Pulir hero con la referencia visual del usuario",
      "Crear secciones completas debajo del fold",
      "Agregar responsive fino para mobile",
      "Sumar animaciones con Motion",
    ],
    notes: [
      "La demo pública debe sentirse custom y premium, no como dashboard.",
      "El panel interno puede usar shadcn; la demo debe usar componentes propios.",
    ],
  },
  {
    slug: "local-business",
    name: "Negocio Local Pro",
    type: "Landing Page",
    status: "Idea",
    description:
      "Una página clara y vendedora para negocios locales que necesitan llamadas, WhatsApp y confianza rápido.",
    bestFor: ["Dentistas", "Abogados", "Plomeros", "Clínicas"],
    studioHref: "#",
    sections: ["Hero", "Servicios", "Reseñas", "Zona de atención", "FAQ", "WhatsApp CTA"],
    todo: ["Definir referencia visual", "Crear primera demo"],
    notes: ["Tiene que priorizar confianza y contacto rápido."],
  },
  {
    slug: "tiendanube-storefront",
    name: "Vidriera Tiendanube",
    type: "Ecommerce",
    status: "Idea",
    description:
      "Una vidriera premium que muestra la marca y deriva la compra a Tiendanube para stock, carrito y pagos.",
    bestFor: ["Ropa", "Belleza", "Accesorios", "Deco"],
    studioHref: "#",
    sections: ["Hero", "Productos destacados", "Categorías", "Marca", "Beneficios", "CTA a Tiendanube"],
    todo: ["Definir flujo de links a Tiendanube", "Crear demo ecommerce base"],
    notes: ["La caja registradora vive en Tiendanube; la vidriera vive en LaunchFoundry."],
  },
];

export function getTemplateBySlug(slug: string) {
  return templates.find((template) => template.slug === slug);
}
