import Link from "next/link";

import { MarketingButton } from "@/components/template-ui/MarketingButton";
import { darkPremiumDemo as content } from "@/content/demos/dark-premium";

export const metadata = {
  title: "Demo Dark Premium — LaunchFoundry",
  description: "Demo pública de la primera plantilla premium oscura reutilizable.",
};

function SectionLabel({ children }: { children: string }) {
  return <p className="text-center text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">{children}</p>;
}

export default function DarkPremiumDemoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative min-h-screen px-4 pb-24 pt-8">
        <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_68%_0%,rgba(239,68,68,0.48),transparent_32%),linear-gradient(90deg,transparent,rgba(248,113,113,0.16),transparent)]" />
        <div className="absolute inset-x-0 top-[430px] -z-10 mx-auto h-64 max-w-2xl rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.6),rgba(239,68,68,0.2)_36%,rgba(59,130,246,0.12)_54%,transparent_72%)] blur-3xl" />
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
              <MarketingButton href="#contacto" className="bg-red-500 shadow-[0_0_34px_rgba(239,68,68,0.48)] hover:bg-red-400">
                {content.hero.primaryCta}
              </MarketingButton>
              <MarketingButton href="#servicios" variant="secondary">
                {content.hero.secondaryCta}
              </MarketingButton>
            </div>
          </div>

          <div id="resultados" className="mx-auto max-w-4xl text-center">
            <p className="mb-8 text-sm text-zinc-600">Estás en buenas manos</p>
            <div className="grid grid-cols-2 gap-4 opacity-75 md:grid-cols-4">
              {content.trust.map((logo) => (
                <div key={logo} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-sm font-medium text-zinc-300">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="relative px-4 py-24">
        <div className="absolute right-0 top-12 -z-10 h-96 w-80 bg-red-500/20 blur-3xl" />
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Comparación</SectionLabel>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-medium tracking-[-0.055em] text-white sm:text-6xl">
            {content.comparison.title}
          </h2>
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 md:p-8">
              <h3 className="text-lg text-zinc-500">Otras webs</h3>
              <div className="mt-7 space-y-4">
                {content.comparison.others.map((item) => (
                  <p key={item} className="text-sm text-zinc-500">× {item}</p>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-red-300/20 bg-[radial-gradient(circle_at_80%_0%,rgba(239,68,68,0.38),rgba(255,255,255,0.035)_40%)] p-6 shadow-[0_0_60px_rgba(239,68,68,0.12)] md:p-8">
              <h3 className="text-lg text-white">Conversion Studio</h3>
              <div className="mt-7 space-y-4">
                {content.comparison.us.map((item) => (
                  <p key={item} className="text-sm text-zinc-200">✓ {item}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-3">
            {content.services.map((service) => (
              <article key={service.title} className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-7">
                <div className="mb-12 size-11 rounded-2xl border border-white/10 bg-white/[0.04]" />
                <h3 className="text-xl font-medium tracking-tight text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Proceso</SectionLabel>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-medium tracking-[-0.055em] sm:text-6xl">
            Una forma simple de avanzar sin improvisar.
          </h2>
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
          <SectionLabel>FAQ</SectionLabel>
          <div className="mt-10 divide-y divide-white/10 rounded-[2rem] border border-white/10 bg-white/[0.025] px-6">
            {content.faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-medium text-white">
                  {faq.question}
                  <span className="text-zinc-500 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="px-4 pb-10 pt-20">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-red-300/20 bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.28),rgba(255,255,255,0.035)_42%)] p-8 text-center md:p-14">
          <h2 className="text-4xl font-medium tracking-[-0.055em] sm:text-6xl">Construyamos una web que se sienta premium.</h2>
          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            Esta demo es la base. Cada cliente puede tener su propio mensaje, colores, secciones y conexión comercial.
          </p>
          <div className="mt-8">
            <MarketingButton href="mailto:hola@example.com" className="bg-red-500 shadow-[0_0_34px_rgba(239,68,68,0.48)] hover:bg-red-400">
              Agendar llamada
            </MarketingButton>
          </div>
        </div>
        <footer className="mx-auto mt-10 flex max-w-6xl flex-col gap-4 border-t border-white/10 py-8 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {content.brand}</p>
          <p>Landing premium · Sistema reusable · Deploy rápido</p>
        </footer>
      </section>
    </main>
  );
}
