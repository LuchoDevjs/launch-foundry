import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function Ecommerce() {
  return (
    <section id="ecommerce" className="py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Ecommerce model</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">{homeContent.ecommerce.title}</h2>
            <p className="mt-5 leading-8 text-slate-300">{homeContent.ecommerce.description}</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            {homeContent.ecommerce.bullets.map((bullet, index) => (
              <div key={bullet} className="flex gap-4 border-b border-white/10 py-5 last:border-0">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-blue-500/20 text-blue-200">{index + 1}</span>
                <p className="text-slate-200">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
