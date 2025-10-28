"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BookOpen, Zap, Megaphone, FileText } from "lucide-react";

type Feature = {
  key: string;
  title: string;
  subtitle: string;
  details: string;
  icon: React.ComponentType<{ className?: string }>;
};

const features: Feature[] = [
  {
    key: "ai-course-creator",
    title: "AI Course Creator",
    subtitle: "You teach. AI organizes.",
    details: "Plans, modules, notes — all sorted.",
    icon: BookOpen,
  },
  {
    key: "ai-volt-presentation",
    title: "AI Volt — Presentation Maker",
    subtitle: "Talk less, show more.",
    details: "Beautiful slides and smart questions… instantly.",
    icon: Zap,
  },
  {
    key: "automated-campaigns",
    title: "Automated Campaigns",
    subtitle: "Never forget a follow-up again.",
    details: "From admissions to attendance — fully automated.",
    icon: Megaphone,
  },
  {
    key: "ai-assessment-engine",
    title: "AI Assessment Engine",
    subtitle: "Tests that prepare, not scare.",
    details: "Created in seconds, personalized for every learner.",
    icon: FileText,
  },
];


export function ProductShowcaseSection() {
  const ref = useRef(null);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const [segmentProgress, setSegmentProgress] = useState(0);
  const progressStartRef = useRef<number>(Date.now());

  // Auto-rotate features every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveFeatureIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  // Progress bar timer synced to active feature (5s window)
  useEffect(() => {
    progressStartRef.current = Date.now();
    setSegmentProgress(0);
    const id = setInterval(() => {
      const elapsed = Date.now() - progressStartRef.current;
      setSegmentProgress(Math.min(1, elapsed / 5000));
    }, 100);
    return () => clearInterval(id);
  }, [activeFeatureIndex]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const maxIndex = features.length - 1;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      const next = activeFeatureIndex === maxIndex ? 0 : activeFeatureIndex + 1;
      setActiveFeatureIndex(next);
      tabsRef.current[next]?.focus();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      const prev = activeFeatureIndex === 0 ? maxIndex : activeFeatureIndex - 1;
      setActiveFeatureIndex(prev);
      tabsRef.current[prev]?.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      setActiveFeatureIndex(0);
      tabsRef.current[0]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      setActiveFeatureIndex(maxIndex);
      tabsRef.current[maxIndex]?.focus();
    }
  };

  const ActiveIcon = features[activeFeatureIndex].icon;

  return (
    <section
      ref={ref}
      className="bg-[#F5F7FA] py-20 lg:py-24"
      aria-label="Vacademy product showcase"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Interactive Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 order-1"
          >
            <motion.div
              key={features[activeFeatureIndex].key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              role="tabpanel"
              id={`feature-panel-${activeFeatureIndex}`}
              aria-labelledby={`feature-tab-${activeFeatureIndex}`}
              className="relative rounded-3xl border border-white/50 shadow-xl bg-gradient-to-br from-[#B9E1FF]/40 to-[#D9C6FF]/40 backdrop-blur-md p-6 sm:p-8"
            >

              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#ED7424]/10 flex items-center justify-center ring-1 ring-[#ED7424]/20 shrink-0">
                    <ActiveIcon className="w-5 h-5 text-[#ED7424]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#111827]">{features[activeFeatureIndex].title}</h3>
                    <p className="text-sm text-[#4B5563] mt-1">{features[activeFeatureIndex].subtitle}</p>
                    <p className="text-sm text-[#6B7280]">{features[activeFeatureIndex].details}</p>
                  </div>
                </div>

                {/* 4-step progress bar */}
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    {[0,1,2,3].map((i) => (
                      <div key={i} className="h-1.5 flex-1 bg-white rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#ED7424] transition-[width] duration-150"
                          style={{
                            width:
                              i < activeFeatureIndex
                                ? "100%"
                                : i === activeFeatureIndex
                                  ? `${Math.min(100, Math.round(segmentProgress * 100))}%`
                                  : "0%",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feature-specific preview UI */}
                <div className="mt-4">
                  {features[activeFeatureIndex].key === "ai-course-creator" && (
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                      <Image
                        src="https://res.cloudinary.com/dwtmtd0oz/image/upload/t_admin-create-course-with-Ai/admin-create-course-with-AI_eiamfe"
                        alt="AI Course Creator interface"
                        width={960}
                        height={720}
                        className="w-full h-auto"
                        loading="lazy"
                        unoptimized
                      />
                    </div>
                  )}
                  {features[activeFeatureIndex].key === "ai-volt-presentation" && (
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                      <Image
                        src="https://res.cloudinary.com/dwtmtd0oz/image/upload/t_volt-slide-transformed/admin-volt-slides_qwbaxq"
                        alt="AI Volt Presentation Maker slides"
                        width={960}
                        height={720}
                        className="w-full h-auto"
                        loading="lazy"
                        unoptimized
                      />
                    </div>
                  )}
                  {features[activeFeatureIndex].key === "automated-campaigns" && (
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                      <Image
                        src="https://res.cloudinary.com/dwtmtd0oz/image/upload/t_vsmart-ai-tools-transformed/admin-create-email-template_bi2qgb"
                        alt="Automated email campaigns template"
                        width={960}
                        height={720}
                        className="w-full h-auto"
                        loading="lazy"
                        unoptimized
                      />
                    </div>
                  )}
                  {features[activeFeatureIndex].key === "ai-assessment-engine" && (
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                      <Image
                        src="https://res.cloudinary.com/dwtmtd0oz/image/upload/t_vsmart-ai-tools-transformed/vsmart-ai-tools_cimazp"
                        alt="AI Assessment Engine interface"
                        width={960}
                        height={720}
                        className="w-full h-auto"
                        loading="lazy"
                        unoptimized
                      />
                    </div>
                  )}
                  {features[activeFeatureIndex].key !== "ai-course-creator" &&
                    features[activeFeatureIndex].key !== "ai-volt-presentation" &&
                    features[activeFeatureIndex].key !== "automated-campaigns" &&
                    features[activeFeatureIndex].key !== "ai-assessment-engine" && (
                      <div className="grid gap-4">
                        <div className="h-36 sm:h-48 rounded-2xl bg-gradient-to-br from-[#F5F7FA] to-white border border-gray-200 shadow-sm" />
                        <div className="grid grid-cols-3 gap-3">
                          <div className="h-16 rounded-xl bg-white border border-gray-200 shadow-sm" />
                          <div className="h-16 rounded-xl bg-white border border-gray-200 shadow-sm" />
                          <div className="h-16 rounded-xl bg-white border border-gray-200 shadow-sm" />
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Headline + Feature Tabs */}
          <div className="lg:col-span-5 order-2">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] leading-tight"
            >
              Everything you need to teach online — all in one place
            </motion.h2>

            {/* Feature Tabs with Dividers (no cards) */}
            <div
              role="tablist"
              aria-label="Product features"
              aria-orientation="vertical"
              onKeyDown={handleKeyDown}
              className="mt-6 sm:mt-8 divide-y divide-gray-200"
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                const isActive = index === activeFeatureIndex;
                return (
                  <motion.button
                    key={feature.key}
                    role="tab"
                    id={`feature-tab-${index}`}
                    aria-selected={isActive}
                    aria-controls={`feature-panel-${index}`}
                    tabIndex={isActive ? 0 : -1}
                    ref={(el) => {
                      tabsRef.current[index] = el;
                    }}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setActiveFeatureIndex(index)}
                    className={`relative w-full text-left transition-colors duration-200 flex items-start gap-3 sm:gap-4 py-4 sm:py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED7424]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent`}
                  >
                    <span className={`inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 shrink-0 mt-0.5 rounded-md ${
                      isActive ? "bg-[#ED7424]/10" : ""
                    }`}>
                      <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${
                        isActive ? "text-[#ED7424]" : "text-[#ED7424]"
                      }`} />
                    </span>
                    <span>
                      <span className={`block font-heading text-base sm:text-lg font-semibold ${
                        isActive ? "text-[#ED7424]" : "text-[#111827]"
                      }`}>
                        {feature.title}
                      </span>
                      <span className="block text-sm text-[#4B5563] leading-relaxed">
                        {feature.subtitle}
                      </span>
                      <span className="block text-sm text-[#6B7280] leading-relaxed">
                        {feature.details}
                      </span>
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
