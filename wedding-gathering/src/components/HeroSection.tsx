import { useEffect, useState } from "react";
import { useLazyImage, useParallax } from "../utils/animations";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const parallaxOffset = useParallax();
  const [coupleImageSrc, coupleImageLoaded] = useLazyImage(
    "/couple-placeholder.jpg"
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setImageLoaded(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundPosition: `50% ${parallaxOffset * 0.5}px`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-radial from-wedding-muted to-wedding-primary opacity-70 z-0"></div>
      <div className="absolute inset-0 bg-noise opacity-30 z-0"></div>

      <div className="container mx-auto px-6 z-10 text-center">
        <div
          className={`relative rounded-full w-64 h-64 md:w-80 md:h-80 mx-auto mb-12 overflow-hidden transition-all duration-1000 ${
            imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div
            className={`absolute inset-0 ${
              coupleImageLoaded ? "" : "lazy-image"
            }`}
          >
            {coupleImageSrc && (
              <img
                src={coupleImageSrc}
                alt="Para Młoda"
                className={`w-full h-full object-cover ${
                  coupleImageLoaded ? "loaded" : ""
                }`}
              />
            )}
          </div>
          <div className="absolute inset-0 border-4 border-white rounded-full"></div>
        </div>

        <h1
          className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-wedding-dark animate-fade-in opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          Anna & Bartosz
        </h1>

        <p
          className="font-serif text-xl md:text-2xl text-wedding-accent max-w-2xl mx-auto mb-12 animate-fade-in opacity-0"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          Z radością zapraszamy na nasze wesele
        </p>

        <div
          className="animate-fade-in opacity-0"
          style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
        >
          <div className="neo-morphism inline-block px-8 py-4 rounded-full">
            <p className="font-display text-lg">12 Września 2024</p>
          </div>
        </div>

        <div
          className="absolute bottom-12 left-0 right-0 flex justify-center animate-fade-in opacity-0"
          style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
        >
          <button
            onClick={handleScrollDown}
            className="w-12 h-12 rounded-full neo-morphism flex items-center justify-center animate-float"
            aria-label="Scroll down"
          >
            <ChevronDown size={24} className="text-wedding-accent" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
