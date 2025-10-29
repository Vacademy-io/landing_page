"use client";

import { motion } from "framer-motion";
import { Boxes, Repeat, TrendingDown, Clock } from "lucide-react";

type PainPointData = {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradientIndex: number;
};

const painPoints: PainPointData[] = [
  {
    icon: <Boxes className="w-5 h-5" strokeWidth={2} color="#000000" />,
    title: "Too many apps to run a single class",
    description: "Zoom, WhatsApp, payment links, reminders, attendance… all scattered.",
    gradientIndex: 0,
  },
  {
    icon: <Repeat className="w-5 h-5" strokeWidth={2} color="#000000" />,
    title: "Constant follow-ups to keep students active",
    description: "Message fatigue and inconsistent replies drain your time.",
    gradientIndex: 1,
  },
  {
    icon: <TrendingDown className="w-5 h-5" strokeWidth={2} color="#000000" />,
    title: "Students losing interest without accountability",
    description: "Engagement drops, and progress becomes unclear.",
    gradientIndex: 2,
  },
  {
    icon: <Clock className="w-5 h-5" strokeWidth={2} color="#000000" />,
    title: "Manual admin work eating into your teaching hours",
    description: "Scheduling, reports, payments, parent updates… nonstop.",
    gradientIndex: 3,
  },
];

export function TutorPainPointsEmpathySection() {
  // CSS variables for card gradients
  const cssVars: React.CSSProperties = {
    // 1: Soft Blush Pink
    ["--grad-1-start" as keyof React.CSSProperties]: "#FFE6F1",
    ["--grad-1-end" as keyof React.CSSProperties]: "#FFF3F9",
    // 2: Mint Green
    ["--grad-2-start" as keyof React.CSSProperties]: "#E9FBEA",
    ["--grad-2-end" as keyof React.CSSProperties]: "#F6FFF7",
    // 3: Soft Butter Yellow
    ["--grad-3-start" as keyof React.CSSProperties]: "#FFF9D6",
    ["--grad-3-end" as keyof React.CSSProperties]: "#FFFAE8",
    // 4: Lavender
    ["--grad-4-start" as keyof React.CSSProperties]: "#EFE7FF",
    ["--grad-4-end" as keyof React.CSSProperties]: "#F8F4FF",
  };

  return (
    <section aria-labelledby="tutor-pain-points-heading" className="bg-[#F5F7FA] py-16 md:py-20" style={cssVars}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title and Subtext at the top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <h2 id="tutor-pain-points-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#111827] leading-tight">
            Your online classroom should be as simple as your passion to teach
          </h2>
          <p className="mt-4 text-[#4B5563] text-base md:text-lg">
            Every class, every student, every follow-up depends entirely on you.
          </p>
        </motion.div>

        {/* Two-column layout: Image left, Cards right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start md:items-center">
          {/* Illustration Left */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 flex items-center"
          >
            <motion.img
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              src="https://res.cloudinary.com/dwtmtd0oz/image/upload/t_distant-tutor-multitask-transform/automations-illustration_zom9p8"
              alt="Overwhelmed tutor managing multiple apps"
              className="w-full h-auto object-contain mx-auto max-h-[480px] md:max-h-[560px] lg:max-h-[640px] xl:max-h-[720px]"
            />
          </motion.div>

          {/* Pain Points Cards Right */}
          <div className="md:col-span-6">
            <div className="grid grid-cols-2 gap-4 md:gap-6 items-stretch">
              {painPoints.map((point, i) => (
                <PainPoint 
                  key={i}
                  icon={point.icon}
                  title={point.title}
                  description={point.description}
                  gradientIndex={point.gradientIndex}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Reassurance and CTA at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 text-center"
        >
          <p className="text-[#111827] text-base md:text-lg max-w-3xl mx-auto">
            Vacademy centralizes your teaching workflow so you focus on results, not routine.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PainPoint({ icon, title, description, gradientIndex }: { icon: React.ReactNode; title: string; description: string; gradientIndex: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group h-full"
    >
      <div
        className="flex items-start gap-3 rounded-[24px] p-4 transition-all duration-200 backdrop-blur-[2px] group-hover:scale-[1.02] h-full"
        style={{
          background: `linear-gradient(180deg, var(--grad-${gradientIndex + 1}-start), var(--grad-${gradientIndex + 1}-end))`,
          boxShadow: "0 10px 24px rgba(17,24,39,0.08)",
        }}
      >
        <span
          className="inline-flex items-center justify-center rounded-xl shrink-0 transition-transform duration-200 group-hover:scale-105"
          style={{ width: 48, height: 48 }}
        >
          {icon}
        </span>
        <div className="min-w-0">
          <div className="font-semibold text-[#111827] text-[16px] leading-5">
            {title}
          </div>
          <div className="text-[12px] text-[#505050] mt-1 leading-5">
            {description}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TutorPainPointsEmpathySection;


