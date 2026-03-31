import Navbar from "@/components/layout/Navbar";
import MarqueeBanner from "@/components/layout/MarqueeBanner";
import ParallaxDivider from "@/components/layout/ParallaxDivider";
import Hero from "@/components/sections/Hero";
import Services, { ServiceItem } from "@/components/sections/Services";
import About from "@/components/sections/About";
import Fleet from "@/components/sections/Fleet";
import Contact from "@/components/sections/Contact";
import ScrollRoad from "@/components/effects/ScrollRoad";
import FloatingParticles from "@/components/effects/FloatingParticles";
import { Truck, Package, Globe, Clock, Shield, Warehouse } from "lucide-react";

const services: ServiceItem[] = [
  {
    icon: Truck,
    title: "Transport krajowy",
    description:
      "Szybkie i niezawodne przewozy na terenie całego kraju. Dostarczamy ładunki od małych paczek po pełne załadunki tirów.",
    highlight: "24h",
    km: "500",
  },
  {
    icon: Globe,
    title: "Przewozy międzynarodowe",
    description:
      "Kompleksowa obsługa transportu w ponad 30 krajach Europy. Pełna dokumentacja celna i logistyka.",
    highlight: "30+ krajów",
    km: "3000",
  },
  {
    icon: Package,
    title: "Transport ładunków",
    description:
      "Przewóz ładunków gabarytowych, niestandardowych i wymagających specjalnych warunków transportu.",
    highlight: "Do 24t",
    km: "∞",
  },
  {
    icon: Clock,
    title: "Ekspres & Same-Day",
    description:
      "Pilne dostawy tego samego dnia. Dedykowany kierowca i pojazd do Twojej dyspozycji.",
    highlight: "Same day",
    km: "800",
  },
  {
    icon: Shield,
    title: "Transport ADR",
    description:
      "Certyfikowany przewóz materiałów niebezpiecznych zgodnie z przepisami ADR. Pełne ubezpieczenie.",
    highlight: "ADR",
    km: "ADR",
  },
  {
    icon: Warehouse,
    title: "Logistyka & Magazyn",
    description:
      "Kompleksowe usługi logistyczne — magazynowanie, kompletacja, cross-docking i dystrybucja.",
    highlight: "Full service",
    km: "HUB",
  },
];

export default function Home() {
  return (
    <main className="relative">
      <FloatingParticles />
      <ScrollRoad />
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <Services services={services} />
      <About />
      <ParallaxDivider />
      <Fleet />
      <Contact />
    </main>
  );
}
