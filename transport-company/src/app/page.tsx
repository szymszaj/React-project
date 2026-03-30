import Navbar from "@/components/layout/Navbar";
import MarqueeBanner from "@/components/layout/MarqueeBanner";
import ParallaxDivider from "@/components/layout/ParallaxDivider";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Fleet from "@/components/sections/Fleet";
import Contact from "@/components/sections/Contact";
import ScrollRoad from "@/components/effects/ScrollRoad";
import FloatingParticles from "@/components/effects/FloatingParticles";

export default function Home() {
  return (
    <main className="relative">
      <FloatingParticles />
      <ScrollRoad />
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <Services />
      <About />
      <ParallaxDivider />
      <Fleet />
      <Contact />
    </main>
  );
}
