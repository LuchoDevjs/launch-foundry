import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Landing Dark Premium — LaunchFoundry",
  description: "Primera plantilla premium oscura reutilizable.",
};

const trustLogos = ["Shopify Partner", "Meta Ads", "Google Partner", "Tiendanube"];
const comparison = [
  ["Comunicación reactiva", "Comunicación constante y proactiva"],
  ["Estrategia genérica", "Solución pensada para cada negocio"],
  ["Diseño copiado", "Sistema visual propio y reusable"],
  ["Sin investigación", "Oferta y mensaje antes de diseñar"],
];

export default function DarkPremiumTemplatePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative min-h-screen pb-24 pt-8">
        <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_70%_0%,rgba(239,68,68,0.42),transparent_34%),linear-gradient(90deg,transparent,rgba(248,113,113,0.16),transparent)]" />
        <div className="absolute inset-x-0 top-[410px] -z-10 mx-auto h-56 max-w-xl rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.55),rgba(239,68,68,0.18)_38%,transparent_70%)] blur-2xl" />
        <Container>
          <header className="mx-auto flex max-w-4xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 backdrop-blur-xl">
            <Link href="/templates" className="text-sm text-slate-300 hover:text-white">← Plantillas</Link>
            <nav className="hidden items-center gap-6 text-xs text-slate-300 md:flex">
              <a href="#resultados">Resultados</a>
              <a href="#servicios">Servicios</a>
              <a href="#proceso">Proceso</a>
              <a href="#faq">FAQ</a>
            </nav>
            <a className="rounded-xl bg-red-500 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_24px_rgba(239,68,68,0.45)]" href="#contacto">
              Agendar llamada
            </a>
          </header>

          <div className="mx-auto max-w-5xl py-28 text-center">
            <div className="mx-auto mb-7 flex w-fit items-center gap-3 text-xs text-slate-300">
              <div className="flex -space-x-2">
                <span className="size-7 rounded-full bg-red-200" />
                <span className="size-7 rounded-full bg-blue-200" />
                <span className="size-7 rounded-full bg-zinc-200" />
              </div>
              <span>200+ negocios listos para escalar</span>
            </div>
            <h1 className="text-balance text-5xl font-medium tracking-[-0.06em] sm:text-7xl">
              ¿Listo para escalar tu marca con una web premium?
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-400">
              Una plantilla oscura, minimalista y seria para vender servicios, captar leads y presentar una oferta con más autoridad.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button href="#contacto" className="bg-red-500 shadow-[0_0_30px_rgba(239,68,68,0.45)] hover:bg-red-400">Agendar llamada</Button>
              <Button href="#servicios" variant="secondary">Ver más</Button>
            </div>
          </div>

          <div id="resultados" className="mx-auto max-w-4xl text-center">
            <p className="mb-8 text-sm text-slate-500">Estás en buenas manos</p>
            <div className="grid grid-cols-2 gap-5 opacity-70 md:grid-cols-4">
              {trustLogos.map((logo) => (
                <div key={logo} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-sm text-slate-300">{logo}</div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="servicios" className="relative py-24">
        <div className="absolute right-0 top-0 -z-10 h-96 w-72 bg-red-500/20 blur-3xl" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm text-slate-500">Comparación</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
              ¿Por qué trabajar con esta plantilla?
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg text-slate-500">Otras webs</h3>
              <div className="mt-6 space-y-4">
                {comparison.map(([bad]) => <p key={bad} className="text-sm text-slate-400">× {bad}</p>)}
              </div>
            </div>
            <div className="rounded-[2rem] border border-red-300/20 bg-[radial-gradient(circle_at_80%_0%,rgba(239,68,68,0.35),rgba(255,255,255,0.035)_38%)] p-6">
              <h3 className="text-lg text-white">LaunchFoundry</h3>
              <div className="mt-6 space-y-4">
                {comparison.map(([, good]) => <p key={good} className="text-sm text-slate-200">✓ {good}</p>)}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
