"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// 📊 Stats data - easily editable
const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Institutes",
  },
  {
    value: 1,
    suffix: "M+",
    label: "Students",
  },
  {
    value: 95,
    suffix: "%",
    label: "Satisfaction",
  },
];

// 🎯 Section content - easily editable
const sectionContent = {
  headline: "Education, powered at scale.",
  tagline: "Join the growing community of institutes and learners making a difference online.",
};

// 🔢 Count-up animation hook
function useCountUp(end: number, duration: number = 2000, inView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return count;
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="bg-[#F9FAFB] py-20 lg:py-32"
      aria-labelledby="stats-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            id="stats-heading"
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#111827] mb-4"
          >
            {sectionContent.headline}
          </h2>
          <p className="font-body text-lg text-[#6B7280] max-w-2xl mx-auto">
            {sectionContent.tagline}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard 
              key={stat.label} 
              stat={stat} 
              index={index} 
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// 📈 Individual stat card component
function StatCard({ 
  stat, 
  index, 
  isInView 
}: { 
  stat: typeof stats[0]; 
  index: number; 
  isInView: boolean;
}) {
  const count = useCountUp(stat.value, 2000, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="flex flex-col items-center text-center group cursor-pointer"
    >
      {/* Number with gradient */}
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.15 + 0.3,
          ease: "easeOut"
        }}
        className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#ED7424] to-[#FF9B55] bg-clip-text text-transparent mb-2"
      >
        {count}{stat.suffix}
      </motion.div>
      
      {/* Label */}
      <div className="font-body text-lg text-[#6B7280] group-hover:text-[#ED7424] transition-colors duration-200">
        {stat.label}
      </div>
      
      {/* Subtle accent line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.15 + 0.5,
          ease: "easeOut"
        }}
        className="h-0.5 bg-gradient-to-r from-[#ED7424] to-[#FF9B55] mt-3 rounded-full"
      />
    </motion.div>
  );
}
