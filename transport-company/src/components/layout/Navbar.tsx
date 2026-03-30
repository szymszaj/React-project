"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X, Truck } from "lucide-react";

const navLinks = [
  { label: "Start", href: "#hero" },
  { label: "Usługi", href: "#services" },
  { label: "O nas", href: "#about" },
  { label: "Flota", href: "#fleet" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" },
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1.5, ease: "power3.out" },
      );
    }
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-background/90 backdrop-blur-2xl border-b border-white/[0.06]"
          : "py-6 bg-transparent"
      }`}
      style={{ opacity: 0 }}
    >
      <div className="site-container flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "#hero")}
          className="flex items-center gap-3 group shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-105">
            <Truck className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-black tracking-tight">
            <span className="gradient-text">TRANS</span>
            <span className="text-white">PORT</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`relative text-[15px] font-medium transition-all duration-300 ${
                activeSection === link.href
                  ? "text-white"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <a
            href="tel:+48123456789"
            className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-medium"
          >
            +48 123 456 789
          </a>
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="px-7 py-3 text-sm font-bold bg-primary text-white rounded-xl hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/25"
          >
            Darmowa wycena
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <Menu className="w-5 h-5 text-white" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden mt-3 mx-5 p-5 rounded-2xl bg-surface/95 backdrop-blur-2xl border border-white/[0.06] shadow-2xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`px-4 py-3.5 text-[15px] font-medium rounded-xl transition-all duration-300 ${
                  activeSection === link.href
                    ? "text-primary bg-primary/5"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-white/[0.06] flex flex-col gap-3">
            <a
              href="tel:+48123456789"
              className="text-center text-sm text-white/40 py-2"
            >
              +48 123 456 789
            </a>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="block py-3.5 text-[15px] font-bold bg-primary text-white rounded-xl text-center hover:bg-primary-dark transition-colors duration-300"
            >
              Darmowa wycena
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
