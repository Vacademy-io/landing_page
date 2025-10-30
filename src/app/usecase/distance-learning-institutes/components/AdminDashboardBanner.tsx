"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AdminDashboardBanner() {
  const roles = [
    { label: "Admin", icon: "🛠️" },
    { label: "Teacher", icon: "👩‍🏫" },
    { label: "Evaluator", icon: "✅" },
    { label: "Content Manager", icon: "🗂️" },
    { label: "Marketing Head", icon: "📣" },
    { label: "Finance Accountant", icon: "💼" },
    { label: "Admission Head", icon: "📝" },
  ];

  const platforms = [
    { label: "Web", icon: "🌐" },
    { label: "Mac", icon: "🍎" },
    { label: "Windows", icon: "🪟" },
  ];
  return (
    <section
      aria-labelledby="admin-dashboard-banner"
      className="relative w-full bg-sky-100"
    >
      <h2 id="admin-dashboard-banner" className="sr-only">Admin Dashboard Banner</h2>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 min-h-[60vh] md:min-h-[70vh] flex items-center py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Image on the left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center lg:justify-start"
          >
            <Image
              src="https://res.cloudinary.com/dwtmtd0oz/image/upload/t_admin-dashboard-transformed/admin-dashboard-mockup-MacBook_Air_15_inch_acqgco"
              alt="Vacademy admin dashboard mockup"
              width={1200}
              height={750}
              priority
              sizes="(min-width: 1024px) 50vw, 90vw"
              className="w-full h-auto max-w-[820px] max-h-[50vh] md:max-h-[60vh] object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Text on the right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center lg:items-end justify-center text-center lg:text-right"
          >
            <div className="font-heading font-black leading-tight text-slate-900">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Admin</div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Dashboard</div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-end">
              {roles.map((role) => (
                <span
                  key={role.label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-1.5 text-base font-medium text-slate-700 shadow-sm"
                >
                  <span aria-hidden>{role.icon}</span>
                  <span className="sr-only">Role: </span>
                  <span>{role.label}</span>
                </span>
              ))}
            </div>
            <div className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-600">Supports</div>
            <div className="mt-2 flex flex-wrap gap-2 justify-center lg:justify-end">
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
        </div>
      </div>
    </section>
  );
}


