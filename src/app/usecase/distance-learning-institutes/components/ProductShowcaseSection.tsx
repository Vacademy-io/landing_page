"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

// 🎯 Section content - easily editable
const sectionContent = {
  headline: "Teaching online shouldn't feel like multitasking on overdrive.",
  description: "You prepare lessons, check attendance, follow up with students, share links, collect payments — all while staying upbeat on camera. We bring everything together so your time goes back to where it belongs: teaching, not managing.",
  deviceCaption: "Vacademy interface (placeholder images)",
};


export function ProductShowcaseSection() {
  const ref = useRef(null);

  return (
    <section 
      ref={ref}
      className="bg-white py-20 lg:py-24"
      aria-label="Vacademy product showcase"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 lg:gap-12 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Headline */}
            <h2 
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              {sectionContent.headline}
            </h2>

            {/* Description */}
            <p 
              className="text-lg md:text-xl text-[#4B5563] leading-relaxed"
              style={{ fontFamily: 'Karla, sans-serif' }}
            >
              {sectionContent.description}
            </p>

          </motion.div>

          {/* Right Column: Laptop-Mobile Mockup Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex items-center justify-center relative"
          >
            {/* Laptop-Mobile Mockup Image */}
            <div className="relative max-w-full">
              <img
                src="https://res.cloudinary.com/dwtmtd0oz/image/upload/f_webp/Laptop-mobile-mockup-1_zvkgt6"
                alt="Vacademy laptop and mobile interface mockup showing seamless teaching experience"
                className="w-full h-auto"
              />
            </div>

          </motion.div>
        </div>
      </div>

    </section>
  );
}
