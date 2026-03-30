"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { label: "Start", section: "#hero" },
  { label: "Usługi", section: "#services" },
  { label: "O nas", section: "#about" },
  { label: "Flota", section: "#fleet" },
  { label: "Kontakt", section: "#contact" },
];

export default function JourneyProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(fillRef.current, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.2,
      },
    });

    milestones.forEach((m, i) => {
      const section = document.querySelector(m.section);
      if (section) {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          onEnter: () => {
            const dot = dotsRef.current?.children[i] as HTMLElement;
            if (dot) {
              gsap.to(dot, {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                ease: "back.out(2)",
              });
              gsap.to(dot.querySelector(".milestone-label"), {
                opacity: 1,
                x: 0,
                duration: 0.3,
                delay: 0.1,
              });
            }
          },
          onLeaveBack: () => {
            const dot = dotsRef.current?.children[i] as HTMLElement;
            if (dot) {
              gsap.to(dot, { scale: 0.5, opacity: 0.3, duration: 0.3 });
              gsap.to(dot.querySelector(".milestone-label"), {
                opacity: 0,
                x: -10,
                duration: 0.2,
              });
            }
          },
        });
      }
    });

    gsap.fromTo(
      barRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, delay: 2 },
    );
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center"
      style={{ opacity: 0 }}
    >
      <div className="relative w-[2px] h-[200px] bg-white/10 rounded-full overflow-hidden">
        <div
          ref={fillRef}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-orange-400 to-amber-400 rounded-full origin-top"
          style={{ transform: "scaleY(0)" }}
        />
      </div>

      <div
        ref={dotsRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col justify-between h-[200px]"
      >
        {milestones.map((m, i) => (
          <div
            key={i}
            className="relative flex items-center"
            style={{ opacity: 0.3, transform: "scale(0.5)" }}
          >
            <div className="w-3 h-3 rounded-full bg-primary border-2 border-background" />
            <span
              className="milestone-label absolute left-6 text-xs text-white/70 whitespace-nowrap font-medium"
              style={{ opacity: 0, transform: "translateX(-10px)" }}
            >
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
