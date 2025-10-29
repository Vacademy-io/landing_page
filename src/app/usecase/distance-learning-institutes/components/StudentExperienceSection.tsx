"use client";

import { motion } from "framer-motion";
import { RefreshCcw, Video, Brain, MessageSquare, Trophy, Smartphone } from "lucide-react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradientIndex: number;
};

const features: Feature[] = [
  { icon: <RefreshCcw className="w-5 h-5" strokeWidth={2} color="#000000" />, title: "Faster Feedback", description: "Instant quiz evaluation and visible progress insights keep students motivated.", gradientIndex: 1 },
  { icon: <Video className="w-5 h-5" strokeWidth={2} color="#000000" />, title: "Engaging Class Experience", description: "Interactive tools inside live lessons help students stay focused and attentive.", gradientIndex: 2 },
  { icon: <Brain className="w-5 h-5" strokeWidth={2} color="#000000" />, title: "Progress Transparency", description: "Students always know how they are performing through clear, real-time updates.", gradientIndex: 3 },
  { icon: <MessageSquare className="w-5 h-5" strokeWidth={2} color="#000000" />, title: "Doubts Cleared Faster", description: "Students raise questions directly on lessons and receive quick, contextual responses.", gradientIndex: 4 },
  { icon: <Trophy className="w-5 h-5" strokeWidth={2} color="#000000" />, title: "Gamified Achievements", description: "Badges, ranks, and rewards transform learning into a fun, motivating challenge.", gradientIndex: 5 },
  { icon: <Smartphone className="w-5 h-5" strokeWidth={2} color="#000000" />, title: "Learning on Any Device", description: "A smooth, mobile-first experience ensures learning continues anywhere, anytime.", gradientIndex: 6 },
];

export default function StudentExperienceSection() {
  // Card gradient palette (soft pastels)
  const cssVars: React.CSSProperties = {
    ["--grad-1-start" as keyof React.CSSProperties]: "#E9FBEA", ["--grad-1-end" as keyof React.CSSProperties]: "#F6FFF7", // mint
    ["--grad-2-start" as keyof React.CSSProperties]: "#E4F4FF", ["--grad-2-end" as keyof React.CSSProperties]: "#F2F9FF", // sky
    ["--grad-3-start" as keyof React.CSSProperties]: "#FFF9D6", ["--grad-3-end" as keyof React.CSSProperties]: "#FFFAE8", // butter
    ["--grad-4-start" as keyof React.CSSProperties]: "#FFE6F1", ["--grad-4-end" as keyof React.CSSProperties]: "#FFF3F9", // blush
    ["--grad-5-start" as keyof React.CSSProperties]: "#EFE7FF", ["--grad-5-end" as keyof React.CSSProperties]: "#F8F4FF", // lavender
    ["--grad-6-start" as keyof React.CSSProperties]: "#E8F4FF", ["--grad-6-end" as keyof React.CSSProperties]: "#F6FAFF", // baby blue
  };

  return (
    <section aria-labelledby="student-experience-heading" className="relative bg-[#F5F7FA] py-20 lg:py-28 overflow-hidden" style={cssVars}>
      {/* faint dotted background */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #F1F1F1 1px, transparent 0)", backgroundSize: "16px 16px" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <h2 id="student-experience-heading" className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827]">Give Students a Learning Experience<br />They Love</h2>
          <p className="mt-5 text-[#4B5563] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Students stay motivated when learning feels simple, interactive, and rewarding. Vacademy empowers them with clarity, confidence, and consistent progress, so their online learning becomes an experience they look forward to every day.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 items-stretch">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }} className="group h-full flex">
              <div className="h-full rounded-[24px] p-6 transition-all duration-200 backdrop-blur-[2px] group-hover:scale-[1.02] flex flex-col" style={{ background: `linear-gradient(180deg, var(--grad-${f.gradientIndex}-start), var(--grad-${f.gradientIndex}-end))`, boxShadow: "0 10px 24px rgba(17,24,39,0.08)" }}>
                <div className="flex items-start gap-4 flex-1">
                  <span className="inline-flex items-center justify-center rounded-xl shrink-0" style={{ width: 48, height: 48 }}>
                    {f.icon}
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold text-[#111827] text-[18px] leading-6">{f.title}</div>
                    <div className="text-[14px] md:text-[15px] text-[#505050] mt-1 leading-6">{f.description}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


