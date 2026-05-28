import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/75 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight text-white">
          <span className="grid size-8 place-items-center rounded-xl border border-blue-400/30 bg-blue-500/15 text-blue-200">LF</span>
          {homeContent.brand}
        </a>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {homeContent.nav.map((item) => (
            <a key={item} href={item === "Templates" ? "/templates" : `#${item.toLowerCase()}`} className="transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>
        <Button href="#process" className="hidden md:inline-flex">Plan first build</Button>
      </Container>
    </header>
  );
}
