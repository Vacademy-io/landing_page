"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-20 bg-[#F5F7FA]">

      {/* Content */}
      <div className="relative z-10 w-full flex justify-center h-full">
        <div className="w-full px-4 lg:w-3/4 lg:px-3 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full h-full">
            {/* Left Container - Content */}
            <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-[#111827] mb-6 font-medium"
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
                className="font-body text-base sm:text-lg md:text-xl text-[#4B5563] mb-8 max-w-2xl mx-auto lg:mx-0"
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
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-[#ED7424] to-[#FF9B55] text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg shadow-[#ED7424]/20 hover:brightness-110 hover:shadow-[0_0_20px_rgba(237,116,36,0.35)] transition-all duration-300"
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
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111827] mb-1 sm:mb-2">
                      10+
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-[#6B7280]">
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
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111827] mb-1 sm:mb-2">
                      4.8★
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-[#6B7280]">
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
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111827] mb-1 sm:mb-2">
                      50K+
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-[#6B7280]">
                      Active Tutors
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Right Container - Hero Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-6 flex items-center justify-center"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="w-full h-full flex items-center justify-center"
              >
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  src="https://res.cloudinary.com/dwtmtd0oz/image/upload/t_distant-learning-tutor-transformed/distant-learning-_tutor_nwmb6b"
                  alt="Distance Learning Hero Visual"
                  className="max-w-full h-auto object-contain max-h-[420px] lg:max-h-[520px] drop-shadow-lg rounded-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}

