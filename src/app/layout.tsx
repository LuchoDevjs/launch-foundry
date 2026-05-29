import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({ variable: "--font-display", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "LaunchFoundry — Fábrica de Landings Premium",
  description: "Sistema reusable para landing pages premium y vidrieras ecommerce conectadas a Tiendanube.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="dark">
      <body className={`${manrope.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}>{children}</body>
    </html>
  );
}
