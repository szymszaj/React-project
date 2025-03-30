import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Instagram, BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 w-full bg-beige-light/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="text-2xl font-semibold tracking-tight">
          Luksusowy Apartament
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={cn(
              "text-muted-foreground hover:text-foreground transition-colors",
              isActivePath("/") && "text-foreground font-medium"
            )}
          >
            Strona główna
          </Link>
          <Link
            to="/gallery"
            className={cn(
              "text-muted-foreground hover:text-foreground transition-colors",
              isActivePath("/gallery") && "text-foreground font-medium"
            )}
          >
            Galeria
          </Link>
          <Link
            to="/contact"
            className={cn(
              "text-muted-foreground hover:text-foreground transition-colors",
              isActivePath("/contact") && "text-foreground font-medium"
            )}
          >
            Kontakt
          </Link>

          <div className="flex items-center gap-2 ml-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-beige text-muted-foreground hover:text-foreground transition-all"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.booking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-beige text-muted-foreground hover:text-foreground transition-all"
            >
              <BookOpen size={20} />
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-beige-light z-40 animate-fade-in">
          <nav className="flex flex-col p-6 space-y-6">
            <Link
              to="/"
              className={cn("text-xl py-2", isActivePath("/") && "font-medium")}
              onClick={toggleMenu}
            >
              Strona główna
            </Link>
            <Link
              to="/gallery"
              className={cn(
                "text-xl py-2",
                isActivePath("/gallery") && "font-medium"
              )}
              onClick={toggleMenu}
            >
              Galeria
            </Link>
            <Link
              to="/contact"
              className={cn(
                "text-xl py-2",
                isActivePath("/contact") && "font-medium"
              )}
              onClick={toggleMenu}
            >
              Kontakt
            </Link>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-beige rounded-full"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.booking.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-beige rounded-full"
              >
                <BookOpen size={24} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
