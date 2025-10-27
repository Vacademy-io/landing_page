"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dwtmtd0oz/image/upload/t_distant-hero-trasnformed/distant-learning-_hero-background_a4sgnd')"
        }}
      />
      
      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      
      {/* Optional Top Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 w-full flex justify-center h-full">
        <div className="w-full px-4 lg:w-3/4 lg:px-3 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-8 w-full h-full">
          {/* Left Container - Content */}
          <div className="lg:col-span-3 flex flex-col justify-center text-center lg:text-left">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-6 font-black"
            >
              Because teaching online should feel{" "}
              <span className="bg-gradient-to-r from-[#ED7424] to-[#FF9B55] bg-clip-text text-transparent">
                effortless.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              We make digital learning simple, interactive, and rewarding — for you and your students.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              {/* Primary CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-[#ED7424] to-[#FF9B55] text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg shadow-[#ED7424]/30 hover:brightness-110 hover:shadow-[0_0_20px_rgba(237,116,36,0.5)] transition-all duration-300"
                >
                  Start My Digital Classroom
                  <ArrowRight className="ml-2 size-4 sm:size-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Hero Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 lg:mt-16"
            >
              <div className="flex flex-row justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-16">
                {/* Stat 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
                    10+
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white/90">
                    Countries Using Vacademy
                  </div>
                </motion.div>

                {/* Stat 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
                    4.8★
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white/90">
                    Average Platform Rating
                  </div>
                </motion.div>

                {/* Stat 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
                    50K+
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white/90">
                    Active Tutors
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Container - Hero Image */}
          <div className="lg:col-span-2 flex items-end justify-center">
            <div className="w-full h-full flex items-end justify-center">
              <img 
                src="https://res.cloudinary.com/dwtmtd0oz/image/upload/t_distant-hero-trasnformed/distant-learning-_hero_gyhwk6"
                alt="Distance Learning Hero Visual"
                className="max-w-full h-auto object-contain max-h-80 lg:max-h-full"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}

