"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, BarChart3, Lightbulb } from "lucide-react";

// 🎯 Section content
const sectionContent = {
  headline: "Your invisible co-teacher.",
  subtext: "AI doesn't replace you. It simply helps you behind the scenes — like a cheerful assistant who knows exactly what you need, before you even ask. 😊",
  tagline: "Less stress. More teaching. That's the power of AI working for you. 🎯",
};

// 🤖 AI Support Cards
const aiCards = [
  {
    icon: BookOpen,
    title: "Prepare with ease",
    description: "AI sends friendly reminders to your students about upcoming sessions and shares all your materials ahead of time. Everyone shows up ready!",
    example: "Hey! Your math session starts at 5 PM. Study notes are already shared. See you soon!",
  },
  {
    icon: Users,
    title: "Teach with smart support",
    description: "Attendance tracked automatically. AI keeps an eye on engagement and gently alerts you if someone needs a little extra attention.",
    example: "Priya hasn't responded in a while — maybe check in? She might need help.",
  },
  {
    icon: BarChart3,
    title: "Support every student",
    description: "Get clear summaries of who attended, who's thriving, and where students might need more support. No guesswork, just insights.",
    example: "You completed 5 lessons this week! Students loved your quizzes — 92% average score.",
  },
  {
    icon: Lightbulb,
    title: "Grow your reach",
    description: "AI spots trends like full weekend batches and suggests smart ways to expand. Your teaching can reach more students, effortlessly.",
    example: "Saturday sessions fill fastest! Want to open another slot? You could add 15 more students.",
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

export function AISupportSection() {
  return (
    <section className="bg-gradient-to-b from-white to-[#F9FAFB] py-20 lg:py-32">
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

        {/* Z-Format Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20"
        >
          {aiCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-6">
                {/* Title with Icon */}
                <div className="flex items-center gap-4">
                  <motion.div 
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5, ease: "easeInOut" }
                    }}
                  >
                    <card.icon className="w-8 h-8 text-[#ED7424]" />
                  </motion.div>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-[#111827] leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-body text-lg md:text-xl text-[#4B5563] leading-relaxed" style={{ fontFamily: 'Karla, sans-serif', lineHeight: '1.7' }}>
                  {card.description}
                </p>

                {/* Example Box */}
                <div className="bg-gradient-to-br from-[#ED7424]/5 to-[#FF9B55]/5 rounded-xl p-6 border border-[#ED7424]/10">
                  <p className="font-body text-base text-[#ED7424] font-medium" style={{ fontFamily: 'Karla, sans-serif', lineHeight: '1.6' }}>
                    💬 &ldquo;{card.example}&rdquo;
                  </p>
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <card.icon className="w-16 h-16 mb-4 opacity-50" />
                    <p className="text-lg font-medium">Placeholder Image</p>
                    <p className="text-sm opacity-75">{card.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="font-body text-lg md:text-xl text-[#4B5563] font-medium" style={{ fontFamily: 'Karla, sans-serif' }}>
            {sectionContent.tagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AISupportSection;

