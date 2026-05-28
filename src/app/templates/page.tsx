import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { templates } from "@/content/templates";

export const metadata = {
  title: "Templates — LaunchFoundry",
  description: "Reusable landing page and ecommerce templates built by LaunchFoundry.",
};

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Header />
      <section className="pb-24 pt-36">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Template library</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">Our reusable starting points.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              This is where we keep the templates we can reuse for future clients. Each one becomes faster after every project.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {templates.map((template) => {
              const isAvailable = template.href !== "#";

              return (
                <article key={template.slug} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm text-blue-200">{template.type}</p>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{template.status}</span>
                  </div>
                  <h2 className="mt-8 text-2xl font-semibold text-white">{template.name}</h2>
                  <p className="mt-4 leading-7 text-slate-400">{template.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {template.bestFor.map((item) => (
                      <span key={item} className="rounded-full bg-blue-400/10 px-3 py-1 text-sm text-blue-100">{item}</span>
                    ))}
                  </div>
                  {isAvailable ? (
                    <Link className="mt-8 inline-flex text-sm font-semibold text-blue-300 hover:text-blue-200" href={template.href}>
                      Open demo →
                    </Link>
                  ) : (
                    <p className="mt-8 text-sm text-slate-500">Coming later</p>
                  )}
                </article>
              );
            })}
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
