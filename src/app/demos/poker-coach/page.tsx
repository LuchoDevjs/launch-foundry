import Link from "next/link";

import { FAQBlock, GlowBackground, PremiumButton, PremiumCard, SectionHeader, TrustRow } from "@/components/public";
import { pokerCoachDemo as content } from "@/content/demos/poker-coach";

export const metadata = {
  title: "RiverEdge Coaching — Poker Coach NL100",
  description: "Demo premium para coach de poker cash games NL25/NL50 hacia NL100.",
};

export default function PokerCoachDemoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative min-h-screen px-4 pb-24 pt-8">
        <GlowBackground />
        <div className="mx-auto max-w-6xl">
          <header className="mx-auto flex max-w-4xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 backdrop-blur-xl">
            <Link href="/clients/poker-coach-demo" className="flex items-center gap-2 text-sm font-semibold text-white">
              <span className="grid size-7 place-items-center rounded-full bg-white text-xs text-black">RE</span>
              {content.brand}
            </Link>
            <nav className="hidden items-center gap-6 text-xs text-zinc-400 md:flex">
              {content.nav.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
                  {item}
                </a>
              ))}
            </nav>
            <a className="rounded-xl bg-red-500 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_24px_rgba(239,68,68,0.45)] transition hover:bg-red-400" href="#aplicar">
              Aplicar
            </a>
          </header>

          <div className="mx-auto max-w-5xl py-28 text-center md:py-32">
            <div className="mx-auto mb-7 w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-zinc-300">
              {content.hero.proof}
            </div>
            <h1 className="text-balance text-5xl font-medium tracking-[-0.065em] text-white sm:text-7xl lg:text-8xl">
              {content.hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-7 text-zinc-400 md:text-lg">
              {content.hero.description}
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <PremiumButton href="#aplicar">{content.hero.primaryCta}</PremiumButton>
              <PremiumButton href="#método" variant="secondary">{content.hero.secondaryCta}</PremiumButton>
            </div>
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-8 text-sm text-zinc-600">Sistema de trabajo</p>
            <TrustRow items={content.trust} />
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="El problema" title={content.problem.title} />
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
            {content.problem.points.map((point) => (
              <PremiumCard key={point}>
                <p className="text-sm leading-7 text-zinc-300">{point}</p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section id="método" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Método" title="Tres capas para dejar de estudiar a ciegas." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {content.method.map((item, index) => (
              <PremiumCard key={item.title} glow={index === 1}>
                <span className="text-sm text-red-300">0{index + 1}</span>
                <h3 className="mt-10 text-xl font-medium tracking-tight text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{item.description}</p>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <section id="programa" className="px-4 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader eyebrow="Programa" title="4 semanas para ordenar tu juego antes de shotear más alto." className="text-left [&_*]:text-left" />
          <PremiumCard glow>
            <div className="grid gap-3 sm:grid-cols-2">
              {content.program.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-zinc-200">
                  ✓ {item}
                </div>
              ))}
            </div>
          </PremiumCard>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Fit" title="Para quién es — y para quién no." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <PremiumCard glow>
              <h3 className="text-xl font-medium text-white">Sí es para vos si...</h3>
              <div className="mt-6 space-y-3">
                {content.fit.yes.map((item) => <p key={item} className="text-sm text-zinc-200">✓ {item}</p>)}
              </div>
            </PremiumCard>
            <PremiumCard>
              <h3 className="text-xl font-medium text-zinc-500">No es para vos si...</h3>
              <div className="mt-6 space-y-3">
                {content.fit.no.map((item) => <p key={item} className="text-sm text-zinc-500">× {item}</p>)}
              </div>
            </PremiumCard>
          </div>
        </div>
      </section>

      <section id="coach" className="px-4 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <PremiumCard className="min-h-96 bg-[radial-gradient(circle_at_50%_20%,rgba(239,68,68,0.24),rgba(255,255,255,0.03)_42%)]">
            <div className="flex h-full min-h-72 items-center justify-center text-center text-zinc-600">
              Coach portrait / graph visual
            </div>
          </PremiumCard>
          <div>
            <SectionHeader eyebrow="Coach" title={content.coach.title} description={content.coach.description} className="text-left [&_*]:text-left" />
            <div className="mt-8 grid gap-3">
              {content.results.map((result) => (
                <div key={result} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-200">
                  {result}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeader eyebrow="FAQ" title="Preguntas antes de aplicar." />
          <div className="mt-10">
            <FAQBlock faqs={content.faqs} />
          </div>
        </div>
      </section>

      <section id="aplicar" className="px-4 pb-10 pt-20">
        <PremiumCard glow className="mx-auto max-w-5xl rounded-[2.5rem] p-8 text-center md:p-14">
          <h2 className="text-4xl font-medium tracking-[-0.055em] sm:text-6xl">Si querés subir de límite, necesitás más que volumen.</h2>
          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            Aplicá al coaching y revisamos si tu juego, volumen y objetivos encajan con el programa.
          </p>
          <div className="mt-8">
            <PremiumButton href="mailto:hola@example.com">Aplicar al coaching</PremiumButton>
          </div>
        </PremiumCard>
        <footer className="mx-auto mt-10 flex max-w-6xl flex-col gap-4 border-t border-white/10 py-8 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {content.brand}</p>
          <p>Poker involves financial risk. Coaching does not guarantee results.</p>
        </footer>
      </section>
    </main>
  );
}
