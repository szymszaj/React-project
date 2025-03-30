
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBlocks from '@/components/AnimatedBlocks';
import LocationMap from '@/components/LocationMap';

const Index = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Apartament" 
            className="w-full h-full object-cover object-center hero-img-mask"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-beige-light/90 to-beige-light/30"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl space-y-6 animate-slide-down">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Luksusowy Apartament w Sercu Miasta
            </h1>
            <p className="text-xl text-muted-foreground">
              Komfortowe miejsce do wypoczynku, które sprawi, że Twój pobyt będzie niezapomniany.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/gallery">Zobacz Galerię</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Rezerwuj Teraz</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <Button 
            onClick={scrollToFeatures}
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-beige-light/50 backdrop-blur-sm hover:bg-beige-light"
          >
            <ArrowDown />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-beige-light">
        <div className="container">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold">Doskonały wybór na Twój pobyt</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Nasz apartament oferuje wyjątkowe udogodnienia i komfort, który sprawi, że poczujesz się jak w domu.
            </p>
          </div>

          <AnimatedBlocks />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-beige p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Nowoczesne Wyposażenie</h3>
              <p className="text-muted-foreground">
                Apartament jest w pełni wyposażony w najnowocześniejszy sprzęt AGD, telewizor oraz szybkie Wi-Fi.
              </p>
            </div>
            <div className="bg-beige p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Komfortowe Przestrzenie</h3>
              <p className="text-muted-foreground">
                Przestronne pokoje, wygodne łóżka i eleganckie meble zapewniają maksymalny komfort.
              </p>
            </div>
            <div className="bg-beige p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Doskonała Lokalizacja</h3>
              <p className="text-muted-foreground">
                Bliskość centrum miasta, restauracji, sklepów i komunikacji miejskiej.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-beige">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Udogodnienia</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Wszystko, czego potrzebujesz, by Twój pobyt był wygodny i bezproblemowy.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Wi-Fi", "Telewizor", "Klimatyzacja", "Pralka",
              "Suszarka", "Żelazko", "Kuchnia", "Łazienka",
              "Parking", "Balkon", "Lodówka", "Ekspres do kawy"
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center p-4 bg-beige-light rounded-lg shadow-sm"
              >
                <div className="h-3 w-3 rounded-full bg-primary mr-3"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link to="/gallery">Zobacz więcej zdjęć</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <LocationMap />

      <Footer />
    </div>
  );
};

export default Index;
