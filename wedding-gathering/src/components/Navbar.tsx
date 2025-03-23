
import { useState, useEffect } from 'react';
import { scrollToElement } from '../utils/animations';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    scrollToElement(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-subtle py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-wedding-dark font-display font-medium text-lg">
          A & B
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => handleLinkClick('hero')}
            className="navigation-link font-medium"
          >
            Home
          </button>
          <button
            onClick={() => handleLinkClick('about')}
            className="navigation-link font-medium"
          >
            Para Młoda
          </button>
          <button
            onClick={() => handleLinkClick('event')}
            className="navigation-link font-medium"
          >
            Wydarzenie
          </button>
          <button
            onClick={() => handleLinkClick('location')}
            className="navigation-link font-medium"
          >
            Lokalizacja
          </button>
          <button
            onClick={() => handleLinkClick('stories')}
            className="navigation-link font-medium"
          >
            Historia
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-wedding-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X size={24} className="transition-transform duration-300 ease-in-out" />
          ) : (
            <Menu size={24} className="transition-transform duration-300 ease-in-out" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-24`}
      >
        <div className="flex flex-col items-center space-y-8 p-8">
          <button
            onClick={() => handleLinkClick('hero')}
            className="text-xl font-medium text-wedding-dark w-full text-center py-3"
          >
            Home
          </button>
          <button
            onClick={() => handleLinkClick('about')}
            className="text-xl font-medium text-wedding-dark w-full text-center py-3"
          >
            Para Młoda
          </button>
          <button
            onClick={() => handleLinkClick('event')}
            className="text-xl font-medium text-wedding-dark w-full text-center py-3"
          >
            Wydarzenie
          </button>
          <button
            onClick={() => handleLinkClick('location')}
            className="text-xl font-medium text-wedding-dark w-full text-center py-3"
          >
            Lokalizacja
          </button>
          <button
            onClick={() => handleLinkClick('stories')}
            className="text-xl font-medium text-wedding-dark w-full text-center py-3"
          >
            Historia
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
