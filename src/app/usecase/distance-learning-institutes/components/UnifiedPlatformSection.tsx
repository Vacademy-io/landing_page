"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Users, GraduationCap } from "lucide-react";

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

        {/* Visual Equation: Vacademy = ERP + CRM + LMS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-10"
          aria-label="Vacademy equals ERP plus CRM plus LMS"
        >
          <div className="flex flex-nowrap items-start justify-center gap-4 md:gap-6">
            <div className="flex flex-col items-center">
              <span className="inline-flex items-center rounded-full bg-[#111827] px-5 py-2 text-white font-semibold shadow-sm">
                <span className="mr-2 rounded-full bg-white/10 p-1 ring-1 ring-white/20">
                  <Image
                    src="/images/Vacademy Short logo.png"
                    alt="Vacademy logo"
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                </span>
                Vacademy
              </span>
            </div>
            <span aria-hidden="true" className="text-[#6B7280] text-xl md:text-2xl font-semibold">=</span>

            <div className="flex flex-col items-center w-40 md:w-56">
              <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-[#111827] font-medium shadow-sm ring-1 ring-black/5">
                <span className="mr-2 rounded-full bg-indigo-50 p-1">
                  <Building2 className="h-4 w-4 text-indigo-600" aria-hidden="true" />
                </span>
                ERP
              </span>
              <p className="mt-2 text-center text-sm md:text-base text-[#4B5563]">Seamless operations for running classes and admin tasks</p>
            </div>

            <span aria-hidden="true" className="text-[#6B7280] text-xl md:text-2xl font-semibold">+</span>

            <div className="flex flex-col items-center w-40 md:w-56">
              <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-[#111827] font-medium shadow-sm ring-1 ring-black/5">
                <span className="mr-2 rounded-full bg-rose-50 p-1">
                  <Users className="h-4 w-4 text-rose-600" aria-hidden="true" />
                </span>
                CRM
              </span>
              <p className="mt-2 text-center text-sm md:text-base text-[#4B5563]">Stronger relationships to keep students engaged and growing</p>
            </div>

            <span aria-hidden="true" className="text-[#6B7280] text-xl md:text-2xl font-semibold">+</span>

            <div className="flex flex-col items-center w-40 md:w-56">
              <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-[#111827] font-medium shadow-sm ring-1 ring-black/5">
                <span className="mr-2 rounded-full bg-emerald-50 p-1">
                  <GraduationCap className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                </span>
                LMS
              </span>
              <p className="mt-2 text-center text-sm md:text-base text-[#4B5563]">Learning experiences that work for every student</p>
            </div>
          </div>
        </motion.div>

        {/* Supporting Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-0"
        >
          <p className="sr-only">
            A successful online tutoring journey depends on having a platform that understands the realities of teaching remotely. With Vacademy as your partner, your classes become easier to run, your students stay more engaged, and your business grows with confidence. Enjoy seamless teaching, effortless automation, and learning experiences that work for every student.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default UnifiedPlatformSection;


