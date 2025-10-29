"use client";

import { motion } from "framer-motion";

export function UnifiedPlatformSection() {
  return (
    <section aria-labelledby="unified-platform-heading" className="bg-[#F5F7FA] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2
            id="unified-platform-heading"
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827]"
          >
            Everything your online tutoring needs,<br />
            in one place
          </h2>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-10"
        >
          <img
            src="https://res.cloudinary.com/dwtmtd0oz/image/upload/t_laptop-mobile-mockup-transformed/Laptop-mobile-mockup-1_ezmdlm"
            alt="Vacademy product mockup"
            className="w-full max-w-5xl mx-auto h-auto object-contain"
          />
        </motion.div>

        {/* Supporting Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10"
        >
          <p className="text-center text-[#4B5563] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            A successful online tutoring journey depends on having a platform that understands the realities of teaching remotely. With Vacademy as your partner, your classes become easier to run, your students stay more engaged, and your business grows with confidence. Enjoy seamless teaching, effortless automation, and learning experiences that work for every student.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default UnifiedPlatformSection;


