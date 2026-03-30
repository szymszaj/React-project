"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxDivider() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".pd-bg", {
        backgroundPositionY: "30%",
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        ".pd-line",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 65%",
          },
        },
      );

      gsap.fromTo(
        ".pd-counter",
        { innerText: 0 },
        {
          innerText: 150000,
          duration: 2.5,
          snap: { innerText: 1000 },
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 60%",
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden"
    >
      <div
        className="pd-bg absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
        }}
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative z-10 text-center site-container max-w-3xl">
        <div className="pd-line mb-4" style={{ opacity: 0 }}>
          <span className="inline-block px-4 py-2 text-xs font-bold tracking-[0.3em] uppercase text-primary/60 border border-primary/20 rounded-full">
            Połowa drogi
          </span>
        </div>
        <p
          className="pd-line text-4xl md:text-6xl font-black text-white leading-tight"
          style={{ opacity: 0 }}
        >
          Twój ładunek.
        </p>
        <p
          className="pd-line text-4xl md:text-6xl font-black gradient-text leading-tight"
          style={{ opacity: 0 }}
        >
          Nasza odpowiedzialność.
        </p>
        <div
          className="pd-line mt-8 flex items-center justify-center gap-3"
          style={{ opacity: 0 }}
        >
          <span className="text-5xl md:text-6xl font-black text-primary">
            <span className="pd-counter">0</span>
          </span>
          <span className="text-white/30 text-lg text-left leading-tight">
            kilometrów
            <br />
            rocznie
          </span>
        </div>
      </div>
    </div>
  );
}
