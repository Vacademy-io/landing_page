"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LearnerAppBanner() {
  const userTypes = [
    { label: "Paid Member", icon: "💳" },
    { label: "Demo Member", icon: "🎫" },
    { label: "Guardian App", icon: "👨‍👩‍👧" },
  ];

  const platforms = [
    { label: "Android", icon: "🤖" },
    { label: "iOS", icon: "🍎" },
    { label: "Web", icon: "🌐" },
    { label: "Mac", icon: "🍎" },
    { label: "Windows", icon: "🪟" },
  ];
  return (
    <section aria-labelledby="learner-app-banner" className="relative w-full bg-emerald-100">
      <h2 id="learner-app-banner" className="sr-only">Learner App Banner</h2>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 min-h-[60vh] md:min-h-[70vh] flex items-center py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
          {/* Text on the left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left"
          >
            <div className="font-heading font-black leading-tight text-slate-900">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Learner</div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">App</div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
              {userTypes.map((t) => (
                <span
                  key={t.label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-1.5 text-base font-medium text-slate-700 shadow-sm"
                >
                  <span aria-hidden>{t.icon}</span>
                  <span className="sr-only">User type: </span>
                  <span>{t.label}</span>
                </span>
              ))}
            </div>
            <div className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-600">Supports</div>
            <div className="mt-2 flex flex-wrap gap-2 justify-center lg:justify-start">
              {platforms.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm"
                >
                  <span aria-hidden>{p.icon}</span>
                  <span className="sr-only">Platform: </span>
                  <span>{p.label}</span>
                </span>
              ))}
            </div>
          </motion.div>

          {/* Image on the right, at the bottom */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-end justify-center lg:justify-end pb-0"
          >
            <Image
              src="https://res.cloudinary.com/dwtmtd0oz/image/upload/t_learner-app-transformed/mobile-app-Hand_and_iPhone_16_Pro_poznpr"
              alt="Vacademy learner app mockup"
              width={900}
              height={900}
              priority
              sizes="(min-width: 1024px) 50vw, 90vw"
              className="w-full h-auto max-w-[520px] md:max-w-[620px] max-h-[50vh] md:max-h-[60vh] object-contain drop-shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


