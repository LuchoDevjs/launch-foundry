import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.28),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.16),transparent_24%)]" />
      <Container className="text-center">
        <div className="mx-auto mb-6 w-fit rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
          {homeContent.hero.eyebrow}
        </div>
        <h1 className="mx-auto max-w-5xl text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          {homeContent.hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300">
          {homeContent.hero.description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#system">{homeContent.hero.primaryCta}</Button>
          <Button href="#ecommerce" variant="secondary">{homeContent.hero.secondaryCta}</Button>
        </div>
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {homeContent.stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-blue-950/20 backdrop-blur">
              <p className="text-4xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
