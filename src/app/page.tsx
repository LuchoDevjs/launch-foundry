import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Ecommerce } from "@/components/sections/Ecommerce";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { System } from "@/components/sections/System";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white">
      <Header />
      <Hero />
      <Services />
      <System />
      <Ecommerce />
      <Process />
      <Footer />
    </main>
  );
}
