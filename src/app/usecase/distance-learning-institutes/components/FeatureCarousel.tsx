"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Feature = {
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  imageSrc: string;
  alt: string;
};

const features: Feature[] = [
  {
    title: "Website",
    subtitle: "Your online academy. Ready to go.",
    description:
      "Launch a fully integrated, no-code website where students can browse courses, enroll, and learn with ease.",
    gradient: "from-yellow-50/40 via-yellow-100/60 to-orange-200",
    imageSrc: "/placeholder-dashboard-1.png",
    alt: "Website feature placeholder",
  },
  {
    title: "Mobile App",
    subtitle: "Your own branded learning app.",
    description:
      "Give students a familiar mobile experience with a white-labeled app that puts your teaching in their pockets.",
    gradient: "from-purple-50/40 via-purple-100/60 to-violet-200",
    imageSrc: "/placeholder-mobile-chat.png",
    alt: "Mobile app feature placeholder",
  },
  {
    title: "Email",
    subtitle: "Stay connected through every inbox.",
    description:
      "Create and send meaningful emails that keep students informed, motivated, and excited about learning.",
    gradient: "from-blue-50/40 via-blue-100/60 to-indigo-200",
    imageSrc: "/placeholder-dashboard-2.png",
    alt: "Email feature placeholder",
  },
  {
    title: "Leads",
    subtitle: "Turn interest into enrollment.",
    description:
      "Collect leads directly on your platform and convert them into paying students with guided follow-ups.",
    gradient: "from-green-50/40 via-green-100/60 to-emerald-200",
    imageSrc: "/placeholder-dashboard-1.png",
    alt: "Leads feature placeholder",
  },
  {
    title: "WhatsApp",
    subtitle: "Notifications that never go unnoticed.",
    description:
      "Share live class reminders, assessment updates, and important announcements directly on WhatsApp, supported by in-app and email alerts.",
    gradient: "from-emerald-50/40 via-emerald-100/60 to-teal-200",
    imageSrc: "/placeholder-mobile-chat.png",
    alt: "WhatsApp feature placeholder",
  },
  {
    title: "Payments",
    subtitle: "Fast, secure, and stress-free payments.",
    description:
      "Accept fees easily with trusted gateways and track every transaction in one place.",
    gradient: "from-amber-50/40 via-amber-100/60 to-yellow-200",
    imageSrc: "/placeholder-dashboard-1.png",
    alt: "Payments feature placeholder",
  },
  {
    title: "Live Classes",
    subtitle: "Go live with the tools you already use.",
    description:
      "Schedule and host sessions through Zoom, Google Meet, or YouTube, all managed smoothly from your dashboard.",
    gradient: "from-rose-50/40 via-rose-100/60 to-pink-200",
    imageSrc: "/placeholder-dashboard-2.png",
    alt: "Live classes feature placeholder",
  },
  {
    title: "Content Management",
    subtitle: "All your study material, beautifully organized.",
    description:
      "Upload and manage notes, videos, PDFs, quizzes, and more from one simple dashboard.",
    gradient: "from-teal-50/40 via-teal-100/60 to-emerald-200",
    imageSrc: "/placeholder-dashboard-1.png",
    alt: "Content management feature placeholder",
  },
  {
    title: "Assessments",
    subtitle: "Smarter testing with AI by your side.",
    description:
      "Conduct regular quizzes and exams, and let AI assist with creation, checking, and feedback.",
    gradient: "from-violet-50/40 via-violet-100/60 to-purple-200",
    imageSrc: "/placeholder-dashboard-2.png",
    alt: "Assessments feature placeholder",
  },
  {
    title: "Student Analytics",
    subtitle: "Give every learner the support they need.",
    description:
      "Track progress and performance with clear insights and timely reports that help you intervene early.",
    gradient: "from-cyan-50/40 via-cyan-100/60 to-blue-200",
    imageSrc: "/placeholder-dashboard-1.png",
    alt: "Student analytics feature placeholder",
  },
  {
    title: "AI Tools",
    subtitle: "Your personal teaching assistant.",
    description:
      "Create question papers, plan lectures, build presentations, and unlock powerful tools that save hours every week.",
    gradient: "from-orange-50/40 via-orange-100/60 to-amber-200",
    imageSrc: "/placeholder-dashboard-2.png",
    alt: "AI tools feature placeholder",
  },
];

const SCROLL_SPEED = 1.35;

export function FeatureCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | undefined>(undefined);
  const scrollRef = useRef(0);
  const maxScrollRef = useRef(0);
  const [progress, setProgress] = useState(0);

  const applyTransform = useCallback((value: number) => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translate3d(-${value}px, 0, 0)`;
    const max = maxScrollRef.current;
    setProgress(max <= 0 ? 1 : Math.min(1, value / max));
  }, []);

  // Measure widths to determine maximum scroll distance
  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const computeSizes = () => {
      const containerWidth = container.getBoundingClientRect().width;
      const trackWidth = track.scrollWidth;
      const maxScroll = Math.max(0, trackWidth - containerWidth);
      maxScrollRef.current = maxScroll;
      scrollRef.current = Math.min(scrollRef.current, maxScroll);
      applyTransform(scrollRef.current);
    };

    computeSizes();

    const resizeObserver = new ResizeObserver(computeSizes);
    resizeObserver.observe(container);
    resizeObserver.observe(track);
    window.addEventListener("resize", computeSizes);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", computeSizes);
    };
  }, [applyTransform]);

  // Apply initial transform once mounted
  useEffect(() => {
    applyTransform(scrollRef.current);
  }, [applyTransform]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      const maxScroll = maxScrollRef.current;
      if (maxScroll <= 0) return;

      const { deltaY } = event;
      const current = scrollRef.current;
      const atStart = current <= 1;
      const atEnd = current >= maxScroll - 1;

      if ((deltaY > 0 && !atEnd) || (deltaY < 0 && !atStart)) {
        event.preventDefault();
        event.stopPropagation();

        const next = Math.min(
          maxScroll,
          Math.max(0, current + deltaY * SCROLL_SPEED)
        );

        if (next !== current) {
          scrollRef.current = next;
          if (frameRef.current) cancelAnimationFrame(frameRef.current);
          frameRef.current = requestAnimationFrame(() => applyTransform(next));
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [applyTransform]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <div
        ref={trackRef}
        className="flex transition-transform duration-100 ease-out will-change-transform"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="min-w-0 flex-[0_0_90%] px-3 sm:flex-[0_0_45%] md:px-4 lg:flex-[0_0_30%]"
          >
            <div
              className={`h-full min-h-[420px] rounded-2xl bg-gradient-to-b ${feature.gradient} p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col`}
            >
              {/* Title at top - Bold and prominent, all caps */}
              <h3
                className="font-heading text-2xl md:text-3xl font-bold text-[#111827] mb-6 text-left leading-tight uppercase"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {feature.title}
              </h3>

              {/* Illustration placeholder with shadow */}
              <div className="mb-6 flex items-center justify-center">
                <div className="w-full h-48 overflow-hidden rounded-lg bg-white shadow-lg flex items-center justify-center">
                  <div className="text-6xl opacity-30">📊</div>
                </div>
              </div>

              {/* Subtitle - bigger and bolder */}
              <p
                className="font-body text-lg md:text-xl text-[#111827] font-bold mb-3 text-left leading-tight"
                style={{ fontFamily: "Karla, sans-serif" }}
              >
                {feature.subtitle}
              </p>

              {/* Body text - short and concise */}
              <p
                className="font-body text-sm text-[#4B5563] leading-relaxed text-left line-clamp-3"
                style={{ fontFamily: "Karla, sans-serif" }}
              >
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 h-1 w-full rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#ED7424] to-[#FF9B55] transition-all duration-200"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
}

export default FeatureCarousel;


