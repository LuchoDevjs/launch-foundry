import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function Process() {
  return (
    <section id="process" className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">How we work</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Fast, but not random.</h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {homeContent.process.map((step, index) => (
            <div key={step} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm text-blue-200">Step {index + 1}</p>
              <p className="mt-8 font-medium text-white">{step}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
