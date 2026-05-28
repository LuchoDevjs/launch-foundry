import type { ServiceOffer } from "@/lib/studio/types";

export const serviceOffers: ServiceOffer[] = [
  {
    slug: "premium-landing",
    name: "Landing Premium",
    description:
      "Una página comercial de alto impacto para convertir visitas en consultas, llamadas o mensajes.",
    includes: [
      "Diseño responsive",
      "Copy base orientado a conversión",
      "Formulario o WhatsApp",
      "SEO técnico básico",
      "Deploy en Vercel",
    ],
    notIncluded: [
      "Ecommerce custom completo",
      "Sistema de usuarios",
      "Panel administrativo a medida",
    ],
    bestFor: ["Servicios", "Coaches", "Consultores", "Negocios locales", "Cursos"],
  },
  {
    slug: "ecommerce-storefront",
    name: "Vidriera Ecommerce + Tiendanube",
    description:
      "Una web premium para presentar marca y productos, usando Tiendanube como motor de stock, checkout, pagos y pedidos.",
    includes: [
      "Home premium de marca",
      "Secciones de productos destacados",
      "Links a productos/categorías de Tiendanube",
      "SEO técnico básico",
      "Deploy en Vercel",
    ],
    notIncluded: [
      "Checkout custom",
      "Pasarela de pagos propia",
      "Gestión de stock fuera de Tiendanube",
    ],
    bestFor: ["Ropa", "Cosmética", "Accesorios", "Deco", "Productos físicos"],
  },
];
