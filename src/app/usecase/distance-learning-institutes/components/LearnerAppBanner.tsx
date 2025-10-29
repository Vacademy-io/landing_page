"use client";

import { motion } from "framer-motion";

export default function LearnerAppBanner() {
  return (
    <section aria-labelledby="learner-app-banner" className="relative w-full" style={{
      background: "linear-gradient(135deg, #FF9B57 0%, #ED7424 100%)",
      height: "70vh",
    }}>
      <h2 id="learner-app-banner" className="sr-only">Learner App Banner</h2>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full h-full">
          {/* Text on the left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center lg:justify-start text-center lg:text-left"
          >
            <div className="font-heading font-black leading-none text-white" style={{
              WebkitTextStroke: '2px white',
              textShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)',
              fontWeight: 900,
            }}>
              <div className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl">Learner</div>
              <div className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl">App</div>
            </div>
          </motion.div>

          {/* Image on the right, at the bottom */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-end justify-center lg:justify-end pb-0 h-full"
          >
            <img
              src="https://res.cloudinary.com/dwtmtd0oz/image/upload/t_learner-app-transformed/mobile-app-Hand_and_iPhone_16_Pro_poznpr"
              alt="Vacademy learner app mockup"
              className="max-w-full max-h-[60vh] w-auto object-contain drop-shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


