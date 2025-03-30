
import { Instagram, BookOpen, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-beige py-12 border-t border-beige-dark/30">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Luksusowy Apartament</h3>
          <p className="text-muted-foreground">
            Komfortowy i elegancki apartament, idealny na krótki lub długi pobyt w naszym pięknym mieście.
          </p>
          <div className="flex space-x-4 pt-2">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-beige-light rounded-full hover:bg-beige-dark/20 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.booking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-beige-light rounded-full hover:bg-beige-dark/20 transition-colors"
            >
              <BookOpen size={20} />
            </a>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Menu</h3>
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Strona główna
            </Link>
            <Link to="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
              Galeria
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Kontakt
            </Link>
          </nav>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Kontakt</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-primary" />
              <a href="mailto:info@apartament.pl" className="text-muted-foreground hover:text-foreground transition-colors">
                info@apartament.pl
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-primary" />
              <a href="tel:+48123456789" className="text-muted-foreground hover:text-foreground transition-colors">
                +48 123 456 789
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              <span className="text-muted-foreground">
                ul. Przykładowa 123, Warszawa
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mt-12 pt-6 border-t border-beige-dark/10 text-center text-muted-foreground text-sm">
        &copy; {currentYear} Luksusowy Apartament. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
};

export default Footer;
