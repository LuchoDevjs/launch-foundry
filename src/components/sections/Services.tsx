import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function Services() {
  return (
    <section id="services" className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">What we sell</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Two offers, one system.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {homeContent.services.map((service) => (
            <article key={service.title} className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-8">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{service.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
