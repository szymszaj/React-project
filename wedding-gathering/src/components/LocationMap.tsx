import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "../utils/animations";
import { MapPin, Phone, Mail } from "lucide-react";

const LocationMap = () => {
  const [mapRef, isVisible] = useIntersectionObserver();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (isVisible && iframeRef.current) {
      iframeRef.current.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9774.968355308895!2d21.01213687424931!3d52.232430241349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c92692e49%3A0xc5c7a2e24ce6fca2!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sus!4v1688475546321!5m2!1sen!2sus";

      iframeRef.current.onload = () => {
        setMapLoaded(true);
      };
    }
  }, [isVisible]);

  return (
    <section
      id="location"
      className="section-padding"
      ref={mapRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-reveal" : "opacity-0"
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-wedding-sage text-wedding-dark font-medium text-sm mb-4">
            Miejsce
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-wedding-dark mb-6">
            Jak do nas dotrzeć
          </h2>
          <p className="font-serif text-wedding-accent max-w-2xl mx-auto">
            Szczegółowe informacje dotyczące lokalizacji ceremonii oraz
            przyjęcia weselnego.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div
              className={`rounded-2xl overflow-hidden shadow-subtle h-96 relative ${
                isVisible ? "animate-reveal" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-wedding-secondary">
                  <div className="w-12 h-12 rounded-full border-4 border-wedding-accent border-t-transparent animate-spin"></div>
                </div>
              )}
              <iframe
                ref={iframeRef}
                className={`w-full h-full border-0 ${
                  mapLoaded ? "opacity-100" : "opacity-0"
                }`}
                title="Mapa lokalizacji wesela"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div
            className={`space-y-8 ${
              isVisible ? "animate-reveal" : "opacity-0"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="neo-morphism p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full neo-morphism flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-wedding-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2">Adres</h3>
                  <p className="font-serif text-wedding-accent mb-1">
                    Hotel Panorama
                  </p>
                  <p className="font-serif text-wedding-accent">
                    ul. Widokowa 25
                    <br />
                    00-000 Warszawa
                  </p>
                </div>
              </div>
            </div>

            <div className="neo-morphism p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full neo-morphism flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-wedding-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2">Telefon</h3>
                  <p className="font-serif text-wedding-accent">
                    <a
                      href="tel:+48123456789"
                      className="hover:text-wedding-dark transition-colors"
                    >
                      +48 123 456 789
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="neo-morphism p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full neo-morphism flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-wedding-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-2">Email</h3>
                  <p className="font-serif text-wedding-accent">
                    <a
                      href="mailto:kontakt@wesele.pl"
                      className="hover:text-wedding-dark transition-colors"
                    >
                      kontakt@wesele.pl
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
