"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Fuel, Gauge, Snowflake, Container } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const trucks = [
  {
    name: "Ciężarowe 24t",
    image:
      "https://images.unsplash.com/photo-1586191582056-88e43bbdf7bb?w=600&q=80",
    specs: ["Ładowność do 24t", "Plandeka mega", "GPS tracking"],
    icon: Container,
    count: "80+",
  },
  {
    name: "Chłodnie",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80",
    specs: ["Zakres -25°C do +25°C", "Podwójna podłoga", "ATP certified"],
    icon: Snowflake,
    count: "40+",
  },
  {
    name: "Sprinterki & Busy",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    specs: ["Do 3.5t", "Same-day delivery", "Miasto & Trasa"],
    icon: Gauge,
    count: "60+",
  },
  {
    name: "Cysterny",
    image:
      "https://images.unsplash.com/photo-1630937113710-1b2be1b95063?w=600&q=80",
    specs: ["ADR certified", "Materiały płynne", "Pełna dokumentacja"],
    icon: Fuel,
    count: "20+",
  },
];

export default function Fleet() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fleet-title",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: { trigger: ".fleet-heading", start: "top 85%" },
        },
      );

      const cards = document.querySelectorAll(".fleet-card");
      cards.forEach((card, i) => {
        const fromX = i % 2 === 0 ? -100 : 100;
        gsap.fromTo(
          card,
          { x: fromX, opacity: 0, rotateY: i % 2 === 0 ? 10 : -10 },
          {
            x: 0,
            opacity: 1,
            rotateY: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          },
        );
      });

      gsap.fromTo(
        ".fleet-road",
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
      id="fleet"
      ref={sectionRef}
      className="relative py-32 md:py-44 overflow-hidden"
    >
      <div className="absolute top-2/3 left-0 w-full h-px z-0 pointer-events-none">
        <div
          className="fleet-road h-full bg-gradient-to-r from-transparent via-primary/15 to-transparent origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <div className="site-container relative z-10">
        <div className="fleet-heading text-center mb-20">
          <span className="inline-block px-5 py-2 text-xs font-bold tracking-[0.3em] uppercase text-primary border border-primary/20 rounded-full mb-6 backdrop-blur-sm bg-primary/5">
            ● Etap 3 — Flota
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white overflow-hidden">
            <span className="fleet-title block" style={{ opacity: 0 }}>
              Nasza <span className="gradient-text">flota</span>
            </span>
            <span
              className="fleet-title block text-white/30 text-2xl md:text-3xl font-light mt-2"
              style={{ opacity: 0 }}
            >
              200+ pojazdów gotowych do drogi
            </span>
          </h2>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          style={{ perspective: "1200px" }}
        >
          {trucks.map((truck, i) => {
            const Icon = truck.icon;
            return (
              <div
                key={i}
                className="fleet-card group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden backdrop-blur-sm"
                style={{ opacity: 0 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={truck.image}
                    alt={truck.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 backdrop-blur-xl bg-black/50 border border-white/10 px-4 py-1.5 rounded-full">
                    <span className="text-sm font-black text-primary">
                      {truck.count}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {truck.name}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {truck.specs.map((spec, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 text-sm text-white/40"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
