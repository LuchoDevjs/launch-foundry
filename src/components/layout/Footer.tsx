import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-slate-400">
      <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© 2026 {homeContent.brand}. Built as a reusable web factory.</p>
        <p>Landing pages · Ecommerce storefronts · Templates</p>
      </Container>
    </footer>
  );
}
