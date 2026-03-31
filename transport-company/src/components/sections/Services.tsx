"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: string;
  km: string;
};

type ServicesProps = {
  services: ServiceItem[];
};

export default function Services({ services }: ServicesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-title-line",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-heading",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".service-card-item",
        { y: 100, opacity: 0, rotateX: 20, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".services-road",
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
      id="services"
      ref={sectionRef}
      className="relative py-32 md:py-44 overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-full h-px z-0 pointer-events-none">
        <div
          className="services-road h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <div className="services-heading text-center mb-20 site-container relative z-10">
        <span className="inline-block px-5 py-2 text-xs font-bold tracking-[0.3em] uppercase text-primary border border-primary/20 rounded-full mb-6 backdrop-blur-sm bg-primary/5">
          ● Etap 1 — Usługi
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white overflow-hidden">
          <span className="services-title-line block" style={{ opacity: 0 }}>
            Co <span className="gradient-text">przewozimy</span>
          </span>
          <span
            className="services-title-line block text-white/30 text-2xl md:text-3xl font-light mt-2"
            style={{ opacity: 0 }}
          >
            i jak daleko sięgamy
          </span>
        </h2>
      </div>

      <div
        className="services-grid site-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
        style={{ perspective: "1200px" }}
      >
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={i}
              className="service-card-item service-card group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 backdrop-blur-sm overflow-hidden"
              style={{ opacity: 0 }}
            >
              <div className="absolute top-5 right-5 text-[10px] font-mono font-bold text-primary/40 tracking-wider">
                {service.km} km
              </div>

              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <span className="text-[10px] font-bold text-primary/50 bg-primary/5 px-2 py-0.5 rounded-full border border-primary/10">
                    {service.highlight}
                  </span>
                </div>
                <p className="text-white/40 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
