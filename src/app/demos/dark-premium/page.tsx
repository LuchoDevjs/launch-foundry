import Link from "next/link";

import { FAQBlock, GlowBackground, PremiumButton, PremiumCard, SectionHeader, TrustRow } from "@/components/public";
import { darkPremiumDemo as content } from "@/content/demos/dark-premium";

export const metadata = {
  title: "Demo Dark Premium — LaunchFoundry",
  description: "Demo pública de la primera plantilla premium oscura reutilizable.",
};

export default function DarkPremiumDemoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative min-h-screen px-4 pb-24 pt-8">
        <GlowBackground />
        <div className="mx-auto max-w-6xl">
          <header className="mx-auto flex max-w-4xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 backdrop-blur-xl">
            <Link href="/templates/dark-premium" className="flex items-center gap-2 text-sm font-semibold text-white">
              <span className="grid size-7 place-items-center rounded-full bg-white text-xs text-black">CS</span>
              {content.brand}
            </Link>
            <nav className="hidden items-center gap-6 text-xs text-zinc-400 md:flex">
              {content.nav.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
                  {item}
                </a>
              ))}
            </nav>
            <a className="rounded-xl bg-red-500 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_24px_rgba(239,68,68,0.45)] transition hover:bg-red-400" href="#contacto">
              Agendar llamada
            </a>
          </header>

          <div className="mx-auto max-w-5xl py-28 text-center md:py-32">
            <div className="mx-auto mb-7 flex w-fit items-center gap-3 text-xs text-zinc-300">
              <div className="flex -space-x-2">
                <span className="size-7 rounded-full border border-black bg-red-200" />
                <span className="size-7 rounded-full border border-black bg-blue-200" />
                <span className="size-7 rounded-full border border-black bg-zinc-200" />
                <span className="size-7 rounded-full border border-black bg-orange-200" />
              </div>
              <span>{content.hero.proof}</span>
            </div>
            <h1 className="text-balance text-5xl font-medium tracking-[-0.065em] text-white sm:text-7xl lg:text-8xl">
              {content.hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-zinc-400 md:text-lg">
              {content.hero.description}
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <PremiumButton href="#contacto" className="bg-red-500 shadow-[0_0_34px_rgba(239,68,68,0.48)] hover:bg-red-400">
                {content.hero.primaryCta}
              </PremiumButton>
              <PremiumButton href="#servicios" variant="secondary">
                {content.hero.secondaryCta}
              </PremiumButton>
            </div>
          </div>

          <div id="resultados" className="mx-auto max-w-4xl text-center">
            <p className="mb-8 text-sm text-zinc-600">Estás en buenas manos</p>
            <TrustRow items={content.trust} />
          </div>
        </div>
      </section>

      <section id="servicios" className="relative px-4 py-24">
        <div className="absolute right-0 top-12 -z-10 h-96 w-80 bg-red-500/20 blur-3xl" />
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Comparación" title={content.comparison.title} />
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
            <PremiumCard className="bg-white/[0.025] md:p-8">
              <h3 className="text-lg text-zinc-500">Otras webs</h3>
              <div className="mt-7 space-y-4">
                {content.comparison.others.map((item) => (
                  <p key={item} className="text-sm text-zinc-500">× {item}</p>
                ))}
              </div>
            </PremiumCard>
            <PremiumCard glow className="md:p-8">
              <h3 className="text-lg text-white">Conversion Studio</h3>
              <div className="mt-7 space-y-4">
                {content.comparison.us.map((item) => (
                  <p key={item} className="text-sm text-zinc-200">✓ {item}</p>
                ))}
              </div>
            </PremiumCard>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-3">
            {content.services.map((service) => (
              <PremiumCard key={service.title} className="bg-zinc-950/70 p-7">
                <div className="mb-12 size-11 rounded-2xl border border-white/10 bg-white/[0.04]" />
                <h3 className="text-xl font-medium tracking-tight text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{service.description}</p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Proceso" title="Una forma simple de avanzar sin improvisar." />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {content.process.map((step, index) => (
              <div key={step} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
                <span className="text-sm text-red-300">0{index + 1}</span>
                <p className="mt-10 text-sm leading-6 text-zinc-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeader eyebrow="FAQ" title="Preguntas antes de avanzar." />
          <div className="mt-10">
            <FAQBlock faqs={content.faqs} />
          </div>
        </div>
      </section>

      <section id="contacto" className="px-4 pb-10 pt-20">
        <PremiumCard glow className="mx-auto max-w-5xl rounded-[2.5rem] p-8 text-center md:p-14">
          <h2 className="text-4xl font-medium tracking-[-0.055em] sm:text-6xl">Construyamos una web que se sienta premium.</h2>
          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            Esta demo es la base. Cada cliente puede tener su propio mensaje, colores, secciones y conexión comercial.
          </p>
          <div className="mt-8">
            <PremiumButton href="mailto:hola@example.com" className="bg-red-500 shadow-[0_0_34px_rgba(239,68,68,0.48)] hover:bg-red-400">
              Agendar llamada
            </PremiumButton>
          </div>
        </PremiumCard>
        <footer className="mx-auto mt-10 flex max-w-6xl flex-col gap-4 border-t border-white/10 py-8 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {content.brand}</p>
          <p>Landing premium · Sistema reusable · Deploy rápido</p>
        </footer>
      </section>
    </main>
  );
}
