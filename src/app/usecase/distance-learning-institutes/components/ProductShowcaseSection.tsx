"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

// 🎯 Section content - easily editable
const sectionContent = {
  headline: "Teaching online is already a superpower.",
  description: "No tutor should juggle reminders, payments, attendance, and fifty tabs at once. Vacademy brings it all together so you can focus on what you love most: guiding your students.",
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
        <div className="text-center space-y-12">
          
          {/* Centered Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight max-w-4xl mx-auto"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              Teaching online is already a <span className="bg-gradient-to-r from-[#ED7424] to-[#FF9B55] bg-clip-text text-transparent">Superpower</span>
            </h2>
          </motion.div>

          {/* Content and Image Row */}
          <div className="grid lg:grid-cols-12 lg:gap-12 items-center">
            
            {/* Left Column: Laptop-Mobile Mockup Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 flex items-center justify-center relative"
            >
              {/* Laptop-Mobile Mockup Image */}
              <div className="relative max-w-full">
                <img
                  src="https://res.cloudinary.com/dwtmtd0oz/image/upload/t_laptop-mobile-mockup-transformed/Laptop-mobile-mockup-1_ezmdlm"
                  alt="Vacademy laptop and mobile interface mockup showing seamless teaching experience"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Right Column: Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-5 text-center lg:text-left"
            >
              <p 
                className="text-lg md:text-xl text-[#4B5563] leading-relaxed"
                style={{ fontFamily: 'Karla, sans-serif' }}
              >
                {sectionContent.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
