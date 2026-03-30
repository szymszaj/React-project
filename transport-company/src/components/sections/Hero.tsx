"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-bg-scale",
        { scale: 1.3, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2 },
      )
        .fromTo(
          ".hero-line",
          { scaleX: 0 },
          { scaleX: 1, duration: 1, stagger: 0.15 },
          0.5,
        )
        .fromTo(
          ".hero-word",
          { y: 120, opacity: 0, rotateX: 40 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.12 },
          0.8,
        )
        .fromTo(
          ".hero-sub",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          1.4,
        )
        .fromTo(
          ".hero-cta",
          { y: 30, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5 },
          1.6,
        )
        .fromTo(
          counterRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          1.8,
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.4 },
          2.0,
        );

      gsap.to(".hero-bg-scale", {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(mainContentRef.current, {
        y: -80,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "60% top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(scrollRef.current, {
        y: 12,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut",
      });

      const counters = document.querySelectorAll(".counter-num");
      counters.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target") || "0");
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            delay: 2,
            snap: { innerText: 1 },
            ease: "power2.out",
          },
        );
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="hero-bg-scale absolute inset-0" style={{ opacity: 0 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-aerial-view-of-a-highway-interchange-5765/1080p.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-[2]" />

      <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none">
        <div
          className="hero-line absolute top-[30%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent origin-left"
          style={{ transform: "scaleX(0)" }}
        />
        <div
          className="hero-line absolute top-[70%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent origin-right"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <div
        ref={mainContentRef}
        className="relative z-20 text-center site-container"
      >
        <div className="mb-6">
          <div
            className="hero-sub inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-white/60"
            style={{ opacity: 0 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Realizujemy zlecenia 24/7
          </div>
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-8"
          style={{ perspective: "600px" }}
        >
          <span
            className="hero-word inline-block text-white"
            style={{ opacity: 0 }}
          >
            Twoja
          </span>{" "}
          <span
            className="hero-word inline-block gradient-text glow-text"
            style={{ opacity: 0 }}
          >
            droga
          </span>
          <br />
          <span
            className="hero-word inline-block text-white/80 text-4xl md:text-5xl lg:text-7xl font-light tracking-normal"
            style={{ opacity: 0 }}
          >
            zaczyna się tutaj
          </span>
        </h1>

        <p
          className="hero-sub text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ opacity: 0 }}
        >
          Profesjonalne usługi transportowe i przewozowe w całej Europie.
          Scrolluj w dół i podróżuj z nami.
        </p>

        <div
          className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ opacity: 0 }}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-white text-lg font-bold rounded-full hover:bg-primary-dark transition-all duration-300 shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
          >
            Zamów transport
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#services")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-10 py-5 text-white/70 font-medium border border-white/15 rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
          >
            Odkryj usługi
          </a>
        </div>
      </div>

      <div
        ref={counterRef}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 w-full max-w-3xl px-5 md:px-8"
        style={{ opacity: 0 }}
      >
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-8 py-6 grid grid-cols-4 gap-6">
          {[
            { target: 15, suffix: "+", label: "Lat" },
            { target: 50, suffix: "k+", label: "Zleceń" },
            { target: 30, suffix: "+", label: "Krajów" },
            { target: 99, suffix: "%", label: "Na czas" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-primary">
                <span className="counter-num" data-target={item.target}>
                  0
                </span>
                {item.suffix}
              </div>
              <div className="text-xs text-white/40 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        onClick={() =>
          document
            .querySelector("#services")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        style={{ opacity: 0 }}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] text-white/30 uppercase tracking-[0.3em]">
            Scrolluj
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
