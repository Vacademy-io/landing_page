"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight, Calendar } from "lucide-react";

// 🎯 Section content
const sectionContent = {
  headline: "Still figuring out your digital teaching path?",
  description: "Every tutor's journey looks different. Whether you teach five students or five hundred, we'll help you find what fits your style best.",
  primaryCta: "Talk to Our Mentor",
  secondaryCta: "Get Free Guidance Call",
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function GentleCloseSection() {
  return (
    <section className="bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] py-20 lg:py-32 relative overflow-hidden">
      {/* Soft Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #ED7424 2px, transparent 2px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >

          {/* Main Headline */}
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-6 leading-tight" 
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            {sectionContent.headline}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-body text-lg md:text-xl text-[#4B5563] leading-relaxed max-w-3xl mx-auto mb-12" 
            style={{ fontFamily: 'Karla, sans-serif', lineHeight: '1.7' }}
          >
            {sectionContent.description}
          </motion.p>


          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA - Talk to Our Mentor */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-[#ED7424] to-[#FF9B55] text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg shadow-[#ED7424]/30 hover:brightness-110 hover:shadow-[0_0_20px_rgba(237,116,36,0.5)] transition-all duration-300"
                aria-label="Talk to our mentor for personalized guidance"
              >
                {sectionContent.primaryCta}
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            {/* Secondary CTA - Get Free Guidance Call */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                size="lg"
                className="group bg-white text-[#ED7424] border-2 border-[#ED7424] rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:bg-[#ED7424] hover:text-white transition-all duration-300"
                aria-label="Schedule a free guidance call"
              >
                <Calendar className="mr-2 size-5" />
                {sectionContent.secondaryCta}
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#6B7280]"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Personalized guidance</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-[#ED7424]/10 to-[#FF9B55]/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-[#ED7424]/5 to-[#FF9B55]/5 rounded-full blur-2xl"></div>
    </section>
  );
}

export default GentleCloseSection;
