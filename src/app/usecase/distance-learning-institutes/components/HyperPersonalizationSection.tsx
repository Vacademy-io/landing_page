"use client";

import { motion } from "framer-motion";
import { Clock, SlidersHorizontal, BellRing, UserSearch } from "lucide-react";

// 🎯 Section content
const sectionContent = {
  headline: "Every student learns differently. We see that.",
  subtext: "Some students rush ahead, some take their time. We personalize the learning journey for each one — automatically. That means every student gets the attention they deserve, even in a large batch.",
};

// 📋 Personalization Cards
const personalizationCards = [
  {
    icon: Clock,
    description: "Reminds slow learners when they miss a task.",
    gradient: "from-blue-50 to-blue-100",
  },
  {
    icon: SlidersHorizontal,
    description: "Adjusts quiz difficulty based on past scores.",
    gradient: "from-purple-50 to-purple-100",
  },
  {
    icon: BellRing,
    description: "Sends gentle nudges before tests.",
    gradient: "from-green-50 to-green-100",
  },
  {
    icon: UserSearch,
    description: "Highlights students who might need extra help.",
    gradient: "from-orange-50 to-orange-100",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function HyperPersonalizationSection() {
  return (
    <section className="bg-gradient-to-b from-[#F9FAFB] to-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
            {sectionContent.headline}
          </h2>
          <p className="font-body text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Karla, sans-serif' }}>
            {sectionContent.subtext}
          </p>
        </motion.div>

        {/* Personalization Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {personalizationCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-white`}
            >
              {/* Icon */}
              <motion.div 
                className="mb-6 flex justify-center"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="bg-white rounded-full p-4 shadow-sm">
                  <card.icon className="w-8 h-8 text-[#ED7424]" />
                </div>
              </motion.div>

              {/* Description */}
              <p className="font-body text-base text-[#111827] text-center leading-relaxed font-medium" style={{ fontFamily: 'Karla, sans-serif', lineHeight: '1.6' }}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HyperPersonalizationSection;

