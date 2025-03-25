import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import EventDetails from "../components/EventDetails";
import LocationMap from "../components/LocationMap";
import StoryTiles from "../components/StoryTiles";
import Footer from "../components/Footer";
import QRCodeAccess from "../components/QRCodeAccess";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-wedding-primary z-50">
        <div className="text-center">
          <h1 className="font-display text-3xl md:text-4xl text-wedding-dark mb-6 animate-pulse">
            A & B
          </h1>
          <div className="w-16 h-16 border-4 border-wedding-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <QRCodeAccess>
      <div className="min-h-screen bg-wedding-primary">
        <Navbar />

        <main>
          <HeroSection />

          <section id="about" className="section-padding">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1 rounded-full bg-wedding-gold text-wedding-dark font-medium text-sm mb-4">
                  O nas
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-wedding-dark mb-6">
                  Para Młoda
                </h2>
                <p className="font-serif text-wedding-accent max-w-2xl mx-auto">
                  Poznaj nas bliżej i dowiedz się więcej o naszej historii.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <div className="neo-morphism p-8 rounded-2xl text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 shadow-subtle">
                    <div className="w-full h-full bg-wedding-secondary"></div>
                  </div>
                  <h3 className="font-display text-2xl text-wedding-dark mb-4">
                    Anna
                  </h3>
                  <p className="font-serif text-wedding-accent">
                    Z zawodu architekt, pasjonatka sztuki i literatury. Kocha
                    podróże, dobre wino i długie spacery o zachodzie słońca. Jej
                    uśmiech potrafi rozświetlić nawet najciemniejszy dzień.
                  </p>
                </div>

                <div className="neo-morphism p-8 rounded-2xl text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 shadow-subtle">
                    <div className="w-full h-full bg-wedding-secondary"></div>
                  </div>
                  <h3 className="font-display text-2xl text-wedding-dark mb-4">
                    Bartosz
                  </h3>
                  <p className="font-serif text-wedding-accent">
                    Programista z zamiłowaniem do fotografii i sportów górskich.
                    Miłośnik dobrej kawy i technologicznych nowinek. Zawsze
                    gotowy na nowe wyzwania i przygody, zwłaszcza te dzielone z
                    Anną.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <EventDetails />
          <LocationMap />
          <StoryTiles />
        </main>

        <Footer />
      </div>
    </QRCodeAccess>
  );
};

export default Index;
