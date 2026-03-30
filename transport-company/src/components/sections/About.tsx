"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, TrendingUp, Users, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: CheckCircle,
    title: "Gwarancja terminowości",
    text: "99% naszych transportów dociera na czas. Monitorujemy każdy ładunek w czasie rzeczywistym.",
  },
  {
    icon: TrendingUp,
    title: "Optymalizacja kosztów",
    text: "Dzięki rozbudowanej sieci partnerów oferujemy konkurencyjne stawki bez kompromisów w jakości.",
  },
  {
    icon: Users,
    title: "Dedykowany opiekun",
    text: "Każdy klient ma przypisanego opiekuna, który dba o sprawny przebieg każdego zlecenia.",
  },
  {
    icon: Award,
    title: "Certyfikaty & Ubezpieczenia",
    text: "Posiadamy wszystkie wymagane certyfikaty. Pełne ubezpieczenie OCP do 500 000 EUR.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-title",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: { trigger: ".about-heading", start: "top 85%" },
        },
      );

      gsap.fromTo(
        ".about-image",
        { clipPath: "inset(100% 0% 0% 0%)", scale: 1.2 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: { trigger: ".about-image", start: "top 80%" },
        },
      );

      gsap.fromTo(
        ".about-feature",
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-features", start: "top 80%" },
        },
      );

      gsap.fromTo(
        ".about-stat",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: { trigger: ".about-stats", start: "top 85%" },
        },
      );

      gsap.fromTo(
        ".about-road",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 md:py-44 overflow-hidden"
    >
      <div className="absolute top-1/3 left-0 w-full h-px z-0 pointer-events-none">
        <div
          className="about-road h-full bg-gradient-to-r from-transparent via-primary/15 to-transparent origin-right"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <div className="site-container relative z-10">
        <div className="about-heading text-center mb-20">
          <span className="inline-block px-5 py-2 text-xs font-bold tracking-[0.3em] uppercase text-primary border border-primary/20 rounded-full mb-6 backdrop-blur-sm bg-primary/5">
            ● Etap 2 — O firmie
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white overflow-hidden">
            <span className="about-title block" style={{ opacity: 0 }}>
              Dlaczego <span className="gradient-text">my?</span>
            </span>
            <span
              className="about-title block text-white/30 text-2xl md:text-3xl font-light mt-2"
              style={{ opacity: 0 }}
            >
              15 lat na drogach Europy
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div
              className="about-image rounded-2xl overflow-hidden"
              style={{ clipPath: "inset(100% 0% 0% 0%)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80"
                alt="Fleet of trucks"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            <div className="about-stats absolute -bottom-6 left-6 right-6 backdrop-blur-xl bg-black/60 border border-white/10 rounded-xl p-5 grid grid-cols-3 gap-4">
              {[
                { val: "200+", label: "Pojazdów" },
                { val: "24/7", label: "GPS" },
                { val: "ISO", label: "Certyfikat" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="about-stat text-center"
                  style={{ opacity: 0 }}
                >
                  <div className="text-xl font-black text-primary">{s.val}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          <div className="about-features space-y-4 lg:pt-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="about-feature group flex gap-4 p-5 rounded-xl border border-transparent hover:border-white/5 hover:bg-white/[0.02] transition-all duration-300"
                  style={{ opacity: 0 }}
                >
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
