"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function ScrollRoad() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const glowPathRef = useRef<SVGPathElement>(null);
  const truckGroupRef = useRef<SVGGElement>(null);
  const dashedRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (
      !pathRef.current ||
      !truckGroupRef.current ||
      !glowPathRef.current ||
      !dashedRef.current
    )
      return;

    const path = pathRef.current;
    const glowPath = glowPathRef.current;
    const dashedPath = dashedRef.current;
    const totalLength = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: totalLength,
      strokeDashoffset: totalLength,
    });
    gsap.set(glowPath, {
      strokeDasharray: totalLength,
      strokeDashoffset: totalLength,
    });
    gsap.set(dashedPath, {
      strokeDasharray: "12 18",
      strokeDashoffset: totalLength,
    });

    gsap.to([path, glowPath, dashedPath], {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });

    gsap.to(truckGroupRef.current, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });

    gsap.to(dashedPath, {
      strokeDashoffset: -36,
      duration: 1,
      repeat: -1,
      ease: "none",
    });

    gsap.to(".truck-glow", {
      opacity: 0.3,
      scale: 1.5,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "sine.inOut",
    });
  }, []);

  const roadPath =
    "M 80,0 C 80,150 320,200 320,400 C 320,550 60,600 60,800 C 60,950 340,1000 340,1200 C 340,1350 80,1400 80,1600 C 80,1750 300,1800 300,2000 C 300,2150 100,2200 100,2400 C 100,2550 280,2600 280,2800 C 280,2950 80,3000 80,3200 C 80,3350 320,3400 320,3600 C 320,3750 80,3850 80,4000";

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 400 4000"
        preserveAspectRatio="none"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <defs>
          <filter id="roadGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="bigGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="15" result="blur" />
          </filter>
          <filter id="truckGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
          <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="30%" stopColor="#fb923c" />
            <stop offset="60%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>

        <path
          ref={glowPathRef}
          d={roadPath}
          fill="none"
          stroke="#f97316"
          strokeWidth="20"
          strokeLinecap="round"
          filter="url(#bigGlow)"
          opacity="0.15"
        />

        <path
          ref={pathRef}
          d={roadPath}
          fill="none"
          stroke="url(#roadGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#roadGlow)"
          opacity="0.7"
        />

        <path
          ref={dashedRef}
          d={roadPath}
          fill="none"
          stroke="#fbbf24"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.3"
        />

        <g ref={truckGroupRef}>
          <circle
            className="truck-glow"
            r="20"
            fill="#f97316"
            opacity="0.2"
            filter="url(#truckGlow)"
          />
          <rect x="-12" y="-7" width="24" height="14" rx="3" fill="#f97316" />
          <rect x="-16" y="-5" width="6" height="10" rx="2" fill="#ea580c" />
          <circle cx="12" cy="-3" r="1.5" fill="#fbbf24" />
          <circle cx="12" cy="3" r="1.5" fill="#fbbf24" />
          <circle
            cx="-8"
            cy="7"
            r="2.5"
            fill="#333"
            stroke="#555"
            strokeWidth="0.5"
          />
          <circle
            cx="6"
            cy="7"
            r="2.5"
            fill="#333"
            stroke="#555"
            strokeWidth="0.5"
          />
        </g>
      </svg>
    </div>
  );
}
