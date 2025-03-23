
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../utils/animations';

const EventDetails = () => {
  const [containerRef, isVisible] = useIntersectionObserver();

  return (
    <section
      id="event"
      className="section-padding bg-wedding-muted"
      ref={containerRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-reveal' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1 rounded-full bg-wedding-rose text-wedding-dark font-medium text-sm mb-4">
            Szczegóły wydarzenia
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-wedding-dark mb-6">
            Ceremonia & Wesele
          </h2>
          <p className="font-serif text-wedding-accent max-w-2xl mx-auto">
            Mamy zaszczyt zaprosić Was do wspólnego świętowania naszego wyjątkowego dnia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ceremony */}
          <div className={`neo-morphism p-8 rounded-2xl transition-all duration-500 delay-100 ${isVisible ? 'animate-reveal' : 'opacity-0'}`}>
            <div className="w-16 h-16 rounded-full neo-morphism flex items-center justify-center mb-6 mx-auto">
              <Calendar size={28} className="text-wedding-accent" />
            </div>
            <h3 className="font-display text-2xl text-center mb-4">Ceremonia</h3>
            <div className="space-y-4 text-center font-serif">
              <p className="text-wedding-accent">
                12 Września 2024
              </p>
              <p className="text-wedding-accent">
                14:00 - 15:30
              </p>
              <p className="text-wedding-accent">
                Kościół Świętej Rodziny<br />
                ul. Kościelna 15, Warszawa
              </p>
            </div>
          </div>

          {/* Reception */}
          <div className={`neo-morphism p-8 rounded-2xl transition-all duration-500 delay-200 ${isVisible ? 'animate-reveal' : 'opacity-0'}`}>
            <div className="w-16 h-16 rounded-full neo-morphism flex items-center justify-center mb-6 mx-auto">
              <Clock size={28} className="text-wedding-accent" />
            </div>
            <h3 className="font-display text-2xl text-center mb-4">Wesele</h3>
            <div className="space-y-4 text-center font-serif">
              <p className="text-wedding-accent">
                12 Września 2024
              </p>
              <p className="text-wedding-accent">
                16:00 - 4:00
              </p>
              <p className="text-wedding-accent">
                Hotel Panorama<br />
                ul. Widokowa 25, Warszawa
              </p>
            </div>
          </div>

          {/* Accommodation */}
          <div className={`neo-morphism p-8 rounded-2xl transition-all duration-500 delay-300 ${isVisible ? 'animate-reveal' : 'opacity-0'}`}>
            <div className="w-16 h-16 rounded-full neo-morphism flex items-center justify-center mb-6 mx-auto">
              <MapPin size={28} className="text-wedding-accent" />
            </div>
            <h3 className="font-display text-2xl text-center mb-4">Zakwaterowanie</h3>
            <div className="space-y-4 text-center font-serif">
              <p className="text-wedding-accent">
                Hotel Panorama
              </p>
              <p className="text-wedding-accent">
                Rezerwacja do 1 Sierpnia 2024
              </p>
              <p className="text-wedding-accent">
                Kod zniżkowy: WESELE2024<br />
                Tel: +48 123 456 789
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
