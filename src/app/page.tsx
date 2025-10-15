"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      "#main-heading",
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
    );
  }, []);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1
        className="text-4xl font-bold"
        style={{ opacity: 0, transform: "translateY(24px)" }}
        id="main-heading"
      >
        Vacademy Landing page
      </h1>
    </div>
  );
}
