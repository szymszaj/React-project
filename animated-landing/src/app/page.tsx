import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <Hero />

      {/* Placeholder sections for the menu links to work */}
      <section id="features" className="min-h-screen flex items-center justify-center bg-zinc-900 border-t border-white/10">
        <h2 className="text-4xl font-bold text-white/50">Features Section</h2>
      </section>
      <section id="pricing" className="min-h-screen flex items-center justify-center bg-black border-t border-white/10">
        <h2 className="text-4xl font-bold text-white/50">Pricing Section</h2>
      </section>
    </main>
  );
}
