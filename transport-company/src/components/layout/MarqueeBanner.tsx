"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const marqueeItems = [
  "TRANSPORT KRAJOWY",
  "—",
  "PRZEWOZY MIĘDZYNARODOWE",
  "—",
  "LOGISTYKA",
  "—",
  "EKSPRES DELIVERY",
  "—",
  "TRANSPORT ADR",
  "—",
  "CHŁODNIE",
  "—",
];

export default function MarqueeBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const track1 = useRef<HTMLDivElement>(null);
  const track2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 92%",
          },
        },
      );

      const setMarquee = (track: HTMLDivElement | null, direction: number) => {
        if (!track) return;
        gsap.set(track, { xPercent: direction > 0 ? 0 : -50 });
        gsap.to(track, {
          xPercent: direction > 0 ? -50 : 0,
          ease: "none",
          duration: 25,
          repeat: -1,
        });
      };

      setMarquee(track1.current, 1);
      setMarquee(track2.current, -1);
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  const renderItems = () =>
    [...marqueeItems, ...marqueeItems].map((item, i) => (
      <span
        key={i}
        className={`shrink-0 ${
          item === "—"
            ? "text-primary/30 text-xl mx-6"
            : "text-3xl md:text-5xl font-black text-white/[0.03] tracking-wider mx-6 hover:text-white/10 transition-colors duration-700"
        }`}
      >
        {item}
      </span>
    ));

  return (
    <div
      ref={bannerRef}
      className="relative py-16 overflow-hidden"
      style={{ opacity: 0 }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="space-y-6">
        <div ref={track1} className="flex whitespace-nowrap">
          {renderItems()}
        </div>
        <div ref={track2} className="flex whitespace-nowrap">
          {renderItems()}
        </div>
      </div>
    </div>
  );
}
