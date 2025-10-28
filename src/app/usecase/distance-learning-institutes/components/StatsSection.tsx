"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  UsersRound,
  BookOpen,
  Globe,
} from "lucide-react";

const stats = [
  {
    number: "5,000+",
    label: "Tutors empowered",
    icon: GraduationCap,
  },
  {
    number: "1,50,000+",
    label: "Students learning",
    icon: UsersRound,
  },
  {
    number: "10,000+",
    label: "Courses created",
    icon: BookOpen,
  },
  {
    number: "10+",
    label: "Countries served",
    icon: Globe,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function StatsSection() {
  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="stats-heading">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header with CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12"
        >
          <h2
            id="stats-heading"
            className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]"
          >
            We’re building success for educators
          </h2>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button className="h-11 px-5 rounded-lg bg-[#ED7424] text-white hover:bg-[#ed7424]/90">
              Start for free
            </Button>
            <Button
              variant="outline"
              className="h-11 px-5 rounded-lg border-gray-200 text-[#1A1A1A] hover:bg-gray-50"
            >
              Book a Demo
            </Button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm ring-1 ring-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-[#FEE8D5]">
                    <IconComponent className="w-6 h-6 text-[#ED7424]" />
                  </div>

                  {/* Number */}
                  <div className="text-3xl lg:text-4xl font-bold mb-2 text-[#ED7424]">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-lg font-medium text-[#1A1A1A]">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
