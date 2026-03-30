"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ArrowUp,
  MapPinned,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-title",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: { trigger: ".contact-heading", start: "top 85%" },
        },
      );

      gsap.fromTo(
        ".contact-form",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          scrollTrigger: { trigger: ".contact-form", start: "top 85%" },
        },
      );

      gsap.fromTo(
        ".contact-info-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: { trigger: ".contact-info", start: "top 85%" },
        },
      );

      gsap.fromTo(
        ".destination-badge",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(2)",
          scrollTrigger: { trigger: ".destination-badge", start: "top 90%" },
        },
      );

      gsap.fromTo(
        ".footer-content",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: { trigger: ".footer-content", start: "top 95%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={sectionRef}>
      <section id="contact" className="relative py-32 md:py-44 overflow-hidden">
        <div className="flex justify-center mb-12">
          <div
            className="destination-badge flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
            style={{ opacity: 0 }}
          >
            <MapPinned className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-primary tracking-wider uppercase">
              Cel podróży osiągnięty
            </span>
          </div>
        </div>

        <div className="site-container">
          <div className="contact-heading text-center mb-20">
            <span className="inline-block px-5 py-2 text-xs font-bold tracking-[0.3em] uppercase text-primary border border-primary/20 rounded-full mb-6 backdrop-blur-sm bg-primary/5">
              ● Etap 4 — Kontakt
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white overflow-hidden">
              <span className="contact-title block" style={{ opacity: 0 }}>
                Porozmawiajmy o{" "}
                <span className="gradient-text">transporcie</span>
              </span>
              <span
                className="contact-title block text-white/30 text-2xl md:text-3xl font-light mt-2"
                style={{ opacity: 0 }}
              >
                Odpowiemy w ciągu 30 minut
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div
              className="contact-form lg:col-span-3 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 backdrop-blur-sm"
              style={{ opacity: 0 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">
                Zapytaj o wycenę
              </h3>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-white/50 mb-2 font-medium">
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      placeholder="Jan Kowalski"
                      className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="jan@firma.pl"
                      className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors duration-300"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-white/50 mb-2 font-medium">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      placeholder="+48 123 456 789"
                      className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-2 font-medium">
                      Typ transportu
                    </label>
                    <select className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white/60 focus:outline-none focus:border-primary/50 transition-colors duration-300">
                      <option value="">Wybierz...</option>
                      <option value="krajowy">Transport krajowy</option>
                      <option value="miedzynarodowy">Międzynarodowy</option>
                      <option value="ekspres">Ekspres / Same-Day</option>
                      <option value="adr">Transport ADR</option>
                      <option value="chlodnia">Transport chłodniczy</option>
                      <option value="inny">Inny</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-2 font-medium">
                    Opis zlecenia
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Opisz swoje potrzeby transportowe..."
                    className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-primary/50 transition-colors duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white text-lg font-bold rounded-2xl hover:bg-primary-dark transition-all duration-300 shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] mt-2"
                >
                  Wyślij zapytanie
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </form>
            </div>

            <div className="contact-info lg:col-span-2 space-y-5">
              {[
                {
                  icon: Phone,
                  label: "Telefon",
                  value: "+48 123 456 789",
                  sub: "Pon-Sob 6:00-22:00",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "biuro@transport.pl",
                  sub: "Odpowiedź w 30 min",
                },
                {
                  icon: MapPin,
                  label: "Adres",
                  value: "ul. Transportowa 15",
                  sub: "00-001 Warszawa",
                },
                {
                  icon: Clock,
                  label: "Godziny",
                  value: "Pon-Pt 6:00-22:00",
                  sub: "Sob 8:00-16:00",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="contact-info-card group flex items-start gap-4 p-6 bg-white/[0.02] border border-white/[0.06] rounded-xl hover:border-primary/20 transition-all duration-300"
                    style={{ opacity: 0 }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-[11px] text-white/30 uppercase tracking-wider mb-1">
                        {item.label}
                      </div>
                      <div className="text-white font-semibold text-lg">
                        {item.value}
                      </div>
                      <div className="text-sm text-white/30 mt-0.5">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 animate-border-glow">
                <div className="text-xl font-bold text-white mb-2">
                  Pilny transport?
                </div>
                <p className="text-white/40 text-sm mb-5 leading-relaxed">
                  Zadzwoń — dyspozytor odpowie natychmiast.
                </p>
                <a
                  href="tel:+48123456789"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all duration-300 text-sm hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  Zadzwoń teraz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/5 py-10">
        <div
          className="footer-content site-container flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ opacity: 0 }}
        >
          <div>
            <span className="text-lg font-bold gradient-text tracking-tight">
              TRANS<span className="text-white">PORT</span>
            </span>
            <span className="text-sm text-white/20 ml-4">
              © 2024 Profesjonalne usługi transportowe
            </span>
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-5 py-2.5 text-sm text-white/30 hover:text-primary border border-white/5 hover:border-primary/20 rounded-full transition-all duration-300"
          >
            Wróć na start
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </footer>
    </div>
  );
}
