import type { ClientIntake } from "@/lib/studio/intake";

export const clientIntakes: ClientIntake[] = [
  {
    slug: "poker-coach-demo",
    businessName: "Poker Coach Demo",
    buildType: "premium-landing",
    goal: "leads",
    industry: "Coaching / Poker",
    offerSummary: "Coaching para jugadores de cash games NL25 y NL50 que quieren ordenar su juego postflop.",
    audience: "Jugadores que ya estudian poker, pero sienten que no tienen un sistema claro para tomar decisiones.",
    visualReferences: ["Dark premium", "SaaS minimal", "Negro/rojo con glow"],
    requiredIntegrations: ["vercel", "whatsapp", "forms"],
    suggestedTemplateSlug: "dark-premium",
    decisionNotes: [
      "Conviene empezar desde Landing Dark Premium.",
      "El CTA principal debería ser agendar una llamada o mandar WhatsApp.",
      "Evitar estética casino; tiene que sentirse serio, de estudio y performance.",
    ],
  },
];

export function getClientIntakeBySlug(slug: string) {
  return clientIntakes.find((intake) => intake.slug === slug);
}
