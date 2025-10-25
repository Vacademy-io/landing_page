"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";
import {
  BookOpen,
  BarChart3,
  Plug,
  Award,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Course Management",
    description:
      "Manage, schedule, and track courses easily with our intuitive platform. Create comprehensive curricula and organize content effortlessly.",
    iconColor: "bg-gradient-to-br from-[#ED7424] to-[#FF9B55]",
  },
  {
    icon: BarChart3,
    title: "Student Analytics",
    description:
      "Get deep insights into student engagement and performance with real-time analytics and comprehensive reporting tools.",
    iconColor: "bg-gradient-to-br from-[#ED7424] to-[#FF9B55]",
  },
  {
    icon: Plug,
    title: "Seamless Integration",
    description:
      "Connect with LMS, Zoom, Google Meet, and other essential tools. Streamline your workflow with powerful integrations.",
    iconColor: "bg-gradient-to-br from-[#ED7424] to-[#FF9B55]",
  },
  {
    icon: Award,
    title: "Certification & Assessments",
    description:
      "Create custom assessments, quizzes, and automated certificate generation. Track learning outcomes and issue credentials.",
    iconColor: "bg-gradient-to-br from-[#ED7424] to-[#FF9B55]",
  },
];

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

export function FeaturesSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading mb-4 text-4xl font-semibold text-[#111827] sm:text-5xl lg:text-6xl">
            Everything You Need to Succeed
          </h2>
          <p className="font-body mx-auto max-w-3xl text-xl text-[#6B7280]">
            Powerful features designed specifically for distance learning
            institutes to deliver exceptional educational experiences.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:gap-10"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

