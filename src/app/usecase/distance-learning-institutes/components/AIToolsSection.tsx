"use client";

import { motion, type Variants } from "framer-motion";
import { 
  Users, 
  MessageSquare, 
  Calendar,
  FileText,
  Zap,
  BookOpen,
  Image,
  Mic,
  File
} from "lucide-react";

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
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

const iconVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

const aiTeachingFeatures = [
  {
    icon: Users,
    title: "Smart Attendance",
    description: "Auto-track student presence"
  },
  {
    icon: MessageSquare,
    title: "Auto Communication",
    description: "Send updates & reminders"
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Optimize class timings"
  },
  {
    icon: Zap,
    title: "Volt - AI Presentation",
    description: "Create stunning presentations"
  }
];

const aiGeneratorFeatures = [
  {
    icon: FileText,
    title: "Quiz Generator",
    description: "Instant assessments"
  },
  {
    icon: BookOpen,
    title: "Lesson Plans",
    description: "Structured content"
  },
  {
    icon: Image,
    title: "From Images",
    description: "Generate from photos"
  },
  {
    icon: Mic,
    title: "From Audio",
    description: "Voice to questions"
  },
  {
    icon: File,
    title: "From PDFs/Docs",
    description: "Extract & create"
  }
];

export function AIToolsSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#F5F7FA] relative overflow-hidden">
      {/* Background Waves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#B9E1FF]/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#D9C6FF]/20 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-[#ED7424]/5 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2B2B2B] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            AI Tools for Smarter Teaching
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
            Automate busywork and boost student outcomes with intelligent assistants and instant content generators.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1 - AI Teaching Assistants */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative h-full bg-gradient-to-br from-[#B9E1FF]/30 to-[#B9E1FF]/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              {/* Frosted Glass Overlay */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-3xl" />
              
              <div className="relative z-10">
                {/* Card Header */}
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#2B2B2B] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    AI Teaching Assistants
                  </h3>
                  <p className="text-[#6B7280] text-lg leading-relaxed">
                    Automate complex teaching tasks like attendance, communication, and scheduling.
                  </p>
                </div>

                {/* Feature Icons Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {aiTeachingFeatures.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={iconVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/80 transition-all duration-300 hover:scale-105"
                      >
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#B9E1FF]/40 flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-[#2B2B2B]" />
                        </div>
                        <h4 className="font-semibold text-[#2B2B2B] text-sm mb-1">{feature.title}</h4>
                        <p className="text-xs text-[#6B7280] leading-tight">{feature.description}</p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8"
                >
                  <button className="bg-[#ED7424] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#ED7424]/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Explore Assistants
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - AI Instant Generators */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <div className="relative h-full bg-gradient-to-br from-[#D9C6FF]/30 to-[#D9C6FF]/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              {/* Frosted Glass Overlay */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-3xl" />
              
              <div className="relative z-10">
                {/* Card Header */}
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#2B2B2B] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    AI Instant Generators
                  </h3>
                  <p className="text-[#6B7280] text-lg leading-relaxed">
                    Generate questions and content from images, audio, PDFs, and documents instantly.
                  </p>
                </div>

                {/* Feature Icons Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {aiGeneratorFeatures.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={iconVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/80 transition-all duration-300 hover:scale-105"
                      >
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#D9C6FF]/40 flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-[#2B2B2B]" />
                        </div>
                        <h4 className="font-semibold text-[#2B2B2B] text-sm mb-1">{feature.title}</h4>
                        <p className="text-xs text-[#6B7280] leading-tight">{feature.description}</p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8"
                >
                  <button className="bg-[#ED7424] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#ED7424]/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Try Generators
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
