import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function System() {
  return (
    <section id="system" className="py-24">
      <Container>
        <div className="rounded-[2.5rem] border border-white/10 bg-[#07101f] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Template engine</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">We keep the best parts and reuse them.</h2>
              <p className="mt-5 leading-8 text-slate-300">
                Every landing teaches the system something: better hero layouts, better cards, better CTAs, better ecommerce blocks. That makes each new build faster.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {homeContent.templates.map((template) => (
                <div key={template} className="min-h-40 rounded-3xl border border-blue-200/10 bg-blue-400/10 p-5 text-white">
                  <span className="text-sm text-blue-200">Template</span>
                  <p className="mt-8 font-medium">{template}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
