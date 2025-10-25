"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dwtmtd0oz/image/upload/t_distant-learning/distant-learning-hero_ndo6sh')"
        }}
      />
      
      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      
      {/* Optional Top Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-6xl leading-tight text-white mb-6 font-black"
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
            className="font-body text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto mb-8"
          >
            We make digital learning simple, interactive, and rewarding — for you and your students.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-[#ED7424] to-[#FF9B55] text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg shadow-[#ED7424]/30 hover:brightness-110 hover:shadow-[0_0_20px_rgba(237,116,36,0.5)] transition-all duration-300"
              >
                Start My Digital Classroom
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="group bg-transparent border-2 border-white text-white rounded-full px-8 py-4 text-lg font-semibold hover:bg-white/10 hover:border-[#ED7424] hover:text-[#ED7424] hover:shadow-[0_0_15px_rgba(237,116,36,0.3)] transition-all duration-300"
              >
                <Play className="mr-2 size-5" />
                Explore My Teaching Space
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </header>
  );
}

