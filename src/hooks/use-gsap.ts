"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal(selector: string, options?: { y?: number; opacity?: number; once?: boolean }) {
  useEffect(() => {
    const y = options?.y ?? 24;
    const opacity = options?.opacity ?? 0;
    const once = options?.once ?? true;

    const elements = gsap.utils.toArray<HTMLElement>(selector);
    const animations: Array<gsap.core.Tween> = [];

    elements.forEach((el) => {
      animations.push(
        gsap.fromTo(
          el,
          { y, opacity },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 0.6,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: once ? "play none none none" : "play none none reverse",
            },
          },
        ),
      );
    });

    return () => {
      animations.forEach((a) => a.kill());
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [selector, options?.y, options?.opacity, options?.once]);
}


