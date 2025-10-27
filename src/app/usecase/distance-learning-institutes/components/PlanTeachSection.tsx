"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";
import { FeatureCarousel } from "./FeatureCarousel";

// 🎯 Section content - easily editable
const sectionContent = {
  headline: "Teach the Way You Were Meant To",
  description: "With Vacademy, everything flows naturally — from lesson planning to class recordings, student tracking, and smart reminders. You focus on lessons, and we handle the rest quietly in the background.",
  primaryCta: "Explore all features",
  secondaryCta: "See it in action",
};


// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export function PlanTeachSection() {
  return (
    <section className="bg-[#000000] py-12 md:py-24 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-[-0.02em]"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              {sectionContent.headline}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-300 leading-relaxed"
              style={{ fontFamily: 'Karla, sans-serif', lineHeight: '1.6' }}
            >
              {sectionContent.description}
            </motion.p>

            {/* Feature Carousel */}
            <motion.div
              variants={itemVariants}
              className="mt-8"
            >
              {/* Full-screen width carousel */}
              <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
                <FeatureCarousel />
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              className="pt-8"
            >
              {/* Primary CTA */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-[#ED7424] to-[#FF9B55] text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg shadow-[#ED7424]/30 hover:brightness-110 hover:shadow-[0_0_20px_rgba(237,116,36,0.5)] transition-all duration-300"
                  aria-label="Get back to teaching with our tools"
                >
                  {sectionContent.primaryCta}
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
