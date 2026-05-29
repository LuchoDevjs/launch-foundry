import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  CircleDollarSign,
  Crosshair,
  LineChart,
  MousePointerClick,
  Play,
  Radar,
  Rocket,
  ShieldCheck,
  Sparkles,
  Store,
  TrendingUp,
  Zap,
} from "lucide-react";

import {
  FAQBlock,
  GlowBackground,
  PremiumButton,
  PremiumCard,
  Reveal,
  ScrollGlow,
  SectionHeader,
  Stagger,
  StaggerItem,
  TrustRow,
} from "@/components/public";
import { darkPremiumDemo as content } from "@/content/demos/dark-premium";

export const metadata = {
  title: "ConversionLab — Dark Premium Demo",
  description: "Demo premium de agencia de paid ads para ecommerce, creada con Next.js, Motion y componentes reutilizables.",
};

const serviceIcons = [Crosshair, Sparkles, MousePointerClick, Activity, Store, LineChart];
const processIcons = [Radar, BarChart3, Rocket, TrendingUp];

export default function DarkPremiumDemoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <section id="top" className="relative min-h-screen px-4 pb-20 pt-6 md:pt-8">
        <GlowBackground />
        <ScrollGlow />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.12] [mask-image:radial-gradient(circle_at_50%_18%,black,transparent_58%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#030303] to-transparent" />

        <div className="mx-auto max-w-6xl">
          <Reveal>
            <header className="mx-auto flex max-w-4xl items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-3 py-3 shadow-[0_0_80px_rgba(255,255,255,0.035)] backdrop-blur-2xl md:px-4">
              <a href="#top" className="flex items-center gap-2 text-sm font-semibold text-white">
                <span className="grid size-8 place-items-center rounded-full bg-white text-black shadow-[0_0_24px_rgba(255,255,255,0.2)]">
                  <Zap className="size-4" />
                </span>
                {content.brand}
              </a>
              <nav className="hidden items-center gap-6 text-xs text-zinc-400 md:flex">
                {content.nav.map((item) => (
                  <a key={item.href} href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                ))}
              </nav>
              <a
                className="inline-flex h-10 items-center gap-2 rounded-full bg-red-500 px-4 text-xs font-semibold text-white shadow-[0_0_34px_rgba(239,68,68,0.48)] transition hover:bg-red-400"
                href="#contacto"
              >
                Book a call
                <ArrowRight className="size-3.5" />
              </a>
            </header>
          </Reveal>

          <div className="mx-auto max-w-5xl py-24 text-center md:py-32 lg:py-36">
            <Reveal delay={0.08}>
              <div className="mx-auto mb-7 flex w-fit flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs text-zinc-300 shadow-[0_0_50px_rgba(239,68,68,0.08)] backdrop-blur-xl">
                <div className="flex -space-x-2">
                  <span className="size-7 rounded-full border border-black bg-[radial-gradient(circle_at_30%_30%,#fff,#f97316_50%,#3f0b0b)]" />
                  <span className="size-7 rounded-full border border-black bg-[radial-gradient(circle_at_30%_30%,#fff,#ef4444_50%,#180505)]" />
                  <span className="size-7 rounded-full border border-black bg-[radial-gradient(circle_at_30%_30%,#fff,#64748b_50%,#050505)]" />
                  <span className="grid size-7 place-items-center rounded-full border border-black bg-white text-[10px] font-bold text-black">+</span>
                </div>
                <span>{content.hero.proof}</span>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <h1 className="mx-auto max-w-5xl text-balance text-5xl font-semibold tracking-[-0.07em] text-white sm:text-7xl lg:text-[6.9rem] lg:leading-[0.89]">
                Escalá tu ecommerce con <span className="font-[family-name:var(--font-display)] font-normal italic tracking-[-0.035em] text-red-200">paid ads</span> que no queman presupuesto.
              </h1>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-zinc-400 md:text-lg">
                {content.hero.description}
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <PremiumButton href="#contacto" className="gap-2 bg-red-500 shadow-[0_0_44px_rgba(239,68,68,0.52)] hover:bg-red-400">
                  {content.hero.primaryCta}
                  <ArrowRight className="size-4" />
                </PremiumButton>
                <PremiumButton href="#servicios" variant="secondary" className="gap-2">
                  <Play className="size-4" />
                  {content.hero.secondaryCta}
                </PremiumButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div id="resultados" className="mx-auto max-w-5xl">
              <p className="mb-7 text-center text-sm text-zinc-600">Conecta con las herramientas que tus clientes ya usan</p>
              <TrustRow items={content.trust} />
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {content.metrics.map((metric) => (
                  <PremiumCard key={metric.label} className="bg-white/[0.025] p-6 text-center">
                    <p className="text-4xl font-semibold tracking-[-0.055em] text-white">{metric.value}</p>
                    <p className="mx-auto mt-2 max-w-44 text-sm leading-5 text-zinc-500">{metric.label}</p>
                  </PremiumCard>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-4 py-24">
        <div className="absolute right-[-10%] top-12 -z-10 h-96 w-96 rounded-full bg-red-500/15 blur-3xl" />
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeader eyebrow="Comparación" title={content.comparison.title} description={content.comparison.subtitle} />
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            <Reveal delay={0.1}>
              <PremiumCard className="h-full bg-white/[0.022] p-7 md:p-8">
                <h3 className="flex items-center gap-3 text-lg text-zinc-500">
                  <span className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-500">×</span>
                  {content.comparison.othersTitle}
                </h3>
                <div className="mt-8 space-y-4">
                  {content.comparison.others.map((item) => (
                    <p key={item} className="flex gap-3 text-sm leading-6 text-zinc-500">
                      <span className="mt-1 text-red-500/60">×</span>
                      {item}
                    </p>
                  ))}
                </div>
              </PremiumCard>
            </Reveal>
            <Reveal delay={0.18}>
              <PremiumCard glow className="h-full p-7 md:p-8">
                <h3 className="flex items-center gap-3 text-lg text-white">
                  <span className="grid size-9 place-items-center rounded-full border border-red-300/25 bg-red-500/15 text-red-100">
                    <BadgeCheck className="size-4" />
                  </span>
                  {content.comparison.usTitle}
                </h3>
                <div className="mt-8 space-y-4">
                  {content.comparison.us.map((item) => (
                    <p key={item} className="flex gap-3 text-sm leading-6 text-zinc-200">
                      <Check className="mt-1 size-4 shrink-0 text-red-300" />
                      {item}
                    </p>
                  ))}
                </div>
              </PremiumCard>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="servicios" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeader eyebrow="Servicios" title="Todo lo que necesita una marca para vender con más claridad." description="No vendemos humo: armamos piezas conectadas. La landing, las campañas y la medición tienen que empujar para el mismo lado." />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {content.services.map((service, index) => {
              const Icon = serviceIcons[index] ?? Sparkles;
              return (
                <StaggerItem key={service.title}>
                  <PremiumCard className="group h-full bg-zinc-950/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-red-200/20 hover:bg-white/[0.045] hover:shadow-[0_0_70px_rgba(239,68,68,0.09)]">
                    <div className="mb-12 grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-red-200 transition group-hover:border-red-200/30 group-hover:bg-red-500/10">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-[-0.035em] text-white">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-zinc-400">{service.description}</p>
                  </PremiumCard>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section id="proceso" className="relative px-4 py-24">
        <div className="absolute inset-x-0 top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-red-300/20 to-transparent" />
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeader eyebrow="Proceso" title="Un sprint corto, controlado y vendible." description="Ideal para trabajar con clientes: primero ordenamos la estrategia, después diseñamos, conectamos y medimos." />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {content.process.map((step, index) => {
              const Icon = processIcons[index] ?? Rocket;
              return (
                <Reveal key={step.title} delay={index * 0.08}>
                  <div className="relative h-full rounded-[1.75rem] border border-white/10 bg-black/55 p-6 backdrop-blur-xl">
                    <span className="text-sm text-red-300">0{index + 1}</span>
                    <div className="mt-8 grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-red-200">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-8 text-lg font-semibold tracking-[-0.035em] text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div>
              <p className="mb-5 text-sm font-medium text-red-200">Growth Sprint</p>
              <h2 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">
                La parte visual se siente premium. La parte comercial tiene números.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400">
                Esta sección es clave para vender: muestra autoridad sin inventar magia. En una demo real, estos datos se reemplazan por resultados, casos o benchmarks del cliente.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">Meta Ads</span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">Google Ads</span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">Tiendanube</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <PremiumCard glow className="p-5 md:p-7">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm text-zinc-500">Live dashboard</p>
                    <h3 className="mt-1 text-xl font-semibold tracking-[-0.04em] text-white">Campaign health</h3>
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">Tracking active</span>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {content.results.map((result) => (
                    <div key={result.label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                      <p className="text-2xl font-semibold tracking-[-0.05em] text-white">{result.value}</p>
                      <p className="mt-1 text-xs leading-5 text-zinc-500">{result.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  {[
                    ["Offer audit completed", "100%"],
                    ["Pixel + events validated", "92%"],
                    ["Creative tests launched", "74%"],
                  ].map(([label, width]) => (
                    <div key={label}>
                      <div className="mb-2 flex justify-between text-xs text-zinc-500">
                        <span>{label}</span>
                        <span>{width}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                        <div className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-300" style={{ width }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PremiumCard>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeader eyebrow="FAQ" title="Preguntas antes de avanzar." />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10">
              <FAQBlock faqs={content.faqs} />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contacto" className="px-4 pb-10 pt-20">
        <Reveal>
          <PremiumCard glow className="mx-auto max-w-5xl rounded-[2.5rem] p-8 text-center md:p-14">
            <div className="mx-auto mb-6 grid size-14 place-items-center rounded-2xl border border-red-200/20 bg-red-500/10 text-red-100">
              <CircleDollarSign className="size-6" />
            </div>
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
              Hagamos que la próxima visita tenga un camino claro hacia la compra.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-zinc-400">
              Esta demo ya tiene historia, estructura, animación y sistema visual. Lo próximo es adaptarla a un cliente real o convertirla en plantilla vendible.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <PremiumButton href="mailto:hola@example.com" className="gap-2 bg-red-500 shadow-[0_0_34px_rgba(239,68,68,0.48)] hover:bg-red-400">
                Agendar diagnóstico
                <ArrowRight className="size-4" />
              </PremiumButton>
              <PremiumButton href="#top" variant="secondary" className="gap-2">
                <ShieldCheck className="size-4" />
                Revisar desde arriba
              </PremiumButton>
            </div>
          </PremiumCard>
        </Reveal>
        <footer className="mx-auto mt-10 flex max-w-6xl flex-col gap-4 border-t border-white/10 py-8 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {content.brand}</p>
          <p>Dark Premium Demo · Ecommerce Growth · LaunchFoundry</p>
        </footer>
      </section>
    </main>
  );
}
