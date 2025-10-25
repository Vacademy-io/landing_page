"use client";

import { motion } from "framer-motion";

// 🎯 Section content - easily editable
const sectionContent = {
  headline: "Teaching online shouldn't feel like multitasking on overdrive.",
  description: "You prepare lessons, check attendance, follow up with students, share links, collect payments — all while staying upbeat on camera. We bring everything together so your time goes back to where it belongs: teaching, not managing.",
};


export function RealitySection() {
  return (
    <section className="bg-gradient-to-b from-[#F9FAFB] to-white py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Headline */}
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
              {sectionContent.headline}
            </h2>

            {/* Description */}
            <p className="font-body text-lg md:text-xl text-[#4B4B4B] leading-relaxed max-w-3xl mx-auto">
              {sectionContent.description}
            </p>

            {/* Laptop-Mobile Mockup Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12"
            >
              <div className="relative max-w-4xl mx-auto">
                <img
                  src="https://res.cloudinary.com/dwtmtd0oz/image/upload/f_webp/Laptop-mobile-mockup-1_zvkgt6"
                  alt="Vacademy laptop and mobile interface mockup showing seamless teaching experience"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}