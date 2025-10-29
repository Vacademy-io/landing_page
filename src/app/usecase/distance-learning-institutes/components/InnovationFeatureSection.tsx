"use client";

import { motion } from "framer-motion";
import { Book, Video, FileText, BarChart3, Zap, MessageCircle } from "lucide-react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradientIndex: number;
};

const features: Feature[] = [
  {
    icon: <Book className="w-5 h-5" strokeWidth={2} color="#000000" />,
    title: "Smart Class Setup",
    description: "Configure courses, batches, and lesson plans without complexity.",
    gradientIndex: 0,
  },
  {
    icon: <Video className="w-5 h-5" strokeWidth={2} color="#000000" />,
    title: "Seamless Live Teaching",
    description: "High-quality video sessions with attendance tracking automatically handled.",
    gradientIndex: 1,
  },
  {
    icon: <FileText className="w-5 h-5" strokeWidth={2} color="#000000" />,
    title: "Personalized Assignments",
    description: "Share tasks, collect submissions, and give feedback instantly.",
    gradientIndex: 2,
  },
  {
    icon: <BarChart3 className="w-5 h-5" strokeWidth={2} color="#000000" />,
    title: "Performance Insights",
    description: "Track student progress and identify who needs support.",
    gradientIndex: 3,
  },
  {
    icon: <Zap className="w-5 h-5" strokeWidth={2} color="#000000" />,
    title: "Workflow Automation",
    description: "Reduce repetitive admin tasks from enrollment to reminders.",
    gradientIndex: 4,
  },
  {
    icon: <MessageCircle className="w-5 h-5" strokeWidth={2} color="#000000" />,
    title: "Integrated Student Messaging",
    description: "Keep conversations organized in one safe-to-access place.",
    gradientIndex: 5,
  },
];

export function InnovationFeatureSection() {
  // CSS variables for card gradients
  const cssVars: React.CSSProperties = {
    // 1: Soft Blush Pink (updated)
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
    // 5: Soft Apricot
    ["--grad-5-start" as keyof React.CSSProperties]: "#FFE8D6",
    ["--grad-5-end" as keyof React.CSSProperties]: "#FFF5EC",
    // 6: Baby Blue
    ["--grad-6-start" as keyof React.CSSProperties]: "#E8F4FF",
    ["--grad-6-end" as keyof React.CSSProperties]: "#F6FAFF",
  };

  return (
    <section aria-labelledby="innovation-heading" className="relative bg-[#F5F7FA] py-20 lg:py-28 overflow-hidden" style={cssVars}>
      {/* subtle dotted grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #F0F0F0 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 id="innovation-heading" className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827]">
            Innovation That Understands<br />
            the Way You Teach
          </h2>
          <p className="mt-5 text-[#4B5563] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Vacademy is built for tutors who teach with passion, flexibility, and heart. Every tool works around your unique style, helping you focus on what matters most: delivering impactful learning from anywhere.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 items-stretch">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group h-full flex"
            >
              <a href="#" role="button" aria-label={f.title} className="block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED7424]/40 rounded-[24px] w-full">
                <div
                  className="h-full rounded-[24px] p-6 transition-all duration-200 backdrop-blur-[2px] group-hover:scale-[1.02] flex flex-col"
                  style={{
                    background: `linear-gradient(180deg, var(--grad-${f.gradientIndex + 1}-start), var(--grad-${f.gradientIndex + 1}-end))`,
                    boxShadow: "0 10px 24px rgba(17,24,39,0.08)",
                  }}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <span
                      className="inline-flex items-center justify-center rounded-xl shrink-0 transition-transform duration-200 group-hover:scale-105"
                      style={{ width: 48, height: 48 }}
                    >
                      {f.icon}
                    </span>
                    <div className="min-w-0">
                      <div className="font-semibold text-[#111827] text-[18px] leading-6">
                        {f.title}
                      </div>
                      <div className="text-[14px] md:text-[15px] text-[#505050] mt-1 leading-6">
                        {f.description}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InnovationFeatureSection;


