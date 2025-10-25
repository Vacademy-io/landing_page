"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ 
        y: -8, 
        boxShadow: "0 20px 25px -5px rgba(237, 116, 36, 0.15), 0 0 15px rgba(237, 116, 36, 0.1)" 
      }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl border-2 border-transparent bg-white p-8 shadow-md transition-all duration-300 hover:border-[#ED7424]/20"
    >
      {/* Icon */}
      <div
        className={`mb-6 inline-flex rounded-xl p-3 ${iconColor}`}
      >
        <Icon className="size-8 text-white" />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-2xl font-bold text-[#111827]">{title}</h3>

      {/* Description */}
      <p className="leading-relaxed text-[#6B7280]">{description}</p>
    </motion.div>
  );
}

