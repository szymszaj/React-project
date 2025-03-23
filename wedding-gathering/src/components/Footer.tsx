
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-wedding-dark text-white text-center">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Heart size={20} className="text-wedding-rose mr-2" />
          <p className="font-display text-lg">Anna & Bartosz</p>
        </div>
        
        <p className="font-serif text-sm text-white/70 mb-8">
          Dziękujemy za odwiedzenie naszej strony ślubnej.<br />
          Z niecierpliwością czekamy na wspólne świętowanie tego wyjątkowego dnia.
        </p>
        
        <div className="text-xs text-white/50">
          &copy; {new Date().getFullYear()} · Wszelkie prawa zastrzeżone
        </div>
      </div>
    </footer>
  );
};

export default Footer;
