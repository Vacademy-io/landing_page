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
    title: "Customised Website",
    subtitle: "Your academy, your style.",
    description:
      "Launch a fully branded, no-code website where students can browse courses, enroll, and engage with your content effortlessly.",
    gradient: "from-yellow-50 via-yellow-100 to-orange-200",
    imageSrc: "https://res.cloudinary.com/dwtmtd0oz/image/upload/t_custom-website-transformed/Custom-website_ixlqib",
    alt: "Customised website feature",
  },
  {
    title: "Mobile App",
    subtitle: "Your teaching, in every pocket.",
    description:
      "Offer students a white-labeled mobile app experience, keeping your courses and updates always within reach.",
    gradient: "from-purple-50 via-purple-100 to-violet-200",
    imageSrc: "https://res.cloudinary.com/dwtmtd0oz/image/upload/t_mobile-app-transformed/mobile-apps_anmttc",
    alt: "Mobile app feature",
  },
  {
    title: "Payments",
    subtitle: "Fast, secure, and stress-free payments.",
    description:
      "Accept course fees and memberships easily through trusted gateways and track every transaction seamlessly.",
    gradient: "from-amber-50 via-amber-100 to-yellow-200",
    imageSrc: "/placeholder-dashboard-1.png",
    alt: "Payments feature placeholder",
  },
  {
    title: "Marketing Tools",
    subtitle: "Reach, engage, and inspire.",
    description:
      "Send, track, and manage emails and WhatsApp campaigns, create public webinars and assessments, and grow your academy's presence effortlessly.",
    gradient: "from-blue-50 via-blue-100 to-indigo-200",
    imageSrc: "/placeholder-dashboard-2.png",
    alt: "Marketing tools feature placeholder",
  },
  {
    title: "Automated Workflows",
    subtitle: "Let AI handle the routine.",
    description:
      "Design highly customized workflows, triggered by time or system events, to automate your processes and save hours every week.",
    gradient: "from-green-50 via-green-100 to-emerald-200",
    imageSrc: "/placeholder-dashboard-1.png",
    alt: "Automated workflows feature placeholder",
  },
  {
    title: "Referral Programs",
    subtitle: "Turn love into leads.",
    description:
      "Encourage word-of-mouth marketing, reward members for referrals, and motivate leads with incentive programs.",
    gradient: "from-pink-50 via-pink-100 to-rose-200",
    imageSrc: "/placeholder-dashboard-2.png",
    alt: "Referral programs feature placeholder",
  },
  {
    title: "Membership Management",
    subtitle: "Manage your community, effortlessly.",
    description:
      "Keep track of subscriptions, member perks, and profiles all from one centralized dashboard.",
    gradient: "from-emerald-50 via-emerald-100 to-teal-200",
    imageSrc: "/placeholder-mobile-chat.png",
    alt: "Membership management feature placeholder",
  },
  {
    title: "Admission and Enrolment",
    subtitle: "Simplify onboarding for everyone.",
    description:
      "Handle course admissions and enrollment processes efficiently, reducing manual effort and improving student experience.",
    gradient: "from-indigo-50 via-indigo-100 to-blue-200",
    imageSrc: "/placeholder-dashboard-1.png",
    alt: "Admission and enrolment feature placeholder",
  },
  {
    title: "Live Classes",
    subtitle: "Go live without the fuss.",
    description:
      "Schedule and host classes via Zoom, Google Meet, or YouTube, all from your dashboard with smooth management.",
    gradient: "from-rose-50 via-rose-100 to-pink-200",
    imageSrc: "/placeholder-dashboard-2.png",
    alt: "Live classes feature placeholder",
  },
  {
    title: "Content Management",
    subtitle: "Organize, share, and shine.",
    description:
      "Upload and manage videos, PDFs, notes, quizzes, and more in a beautifully structured dashboard.",
    gradient: "from-teal-50 via-teal-100 to-emerald-200",
    imageSrc: "/placeholder-dashboard-1.png",
    alt: "Content management feature placeholder",
  },
  {
    title: "Assessments",
    subtitle: "Smarter testing made simple.",
    description:
      "Create quizzes and exams, leverage AI for question generation and grading, and provide instant feedback to students.",
    gradient: "from-violet-50 via-violet-100 to-purple-200",
    imageSrc: "/placeholder-dashboard-2.png",
    alt: "Assessments feature placeholder",
  },
  {
    title: "Student Analytics",
    subtitle: "Know every learner inside out.",
    description:
      "Track performance, engagement, and progress with actionable insights to support students exactly when they need it.",
    gradient: "from-cyan-50 via-cyan-100 to-blue-200",
    imageSrc: "/placeholder-dashboard-1.png",
    alt: "Student analytics feature placeholder",
  },
  {
    title: "AI Tools",
    subtitle: "Your AI-powered teaching assistant.",
    description:
      "Plan lessons, create presentations, generate questions, and save hours with smart, time-saving tools.",
    gradient: "from-orange-50 via-orange-100 to-amber-200",
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
    <div ref={containerRef} className="relative w-full overflow-hidden py-4">
      <div
        ref={trackRef}
        className="flex transition-transform duration-100 ease-out will-change-transform"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="min-w-0 flex-[0_0_75%] px-3 sm:flex-[0_0_40%] md:px-4 lg:flex-[0_0_25%]"
          >
            <div
              className={`h-full min-h-[500px] rounded-2xl bg-gradient-to-b ${feature.gradient} p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col`}
            >
              {/* Title at top - Bold and prominent, all caps */}
              <h3
                className="font-heading text-2xl md:text-3xl font-bold text-[#111827] mb-6 text-left leading-tight uppercase"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {feature.title}
              </h3>

              {/* Feature Image */}
              <div className="mb-6 flex items-center justify-center">
                <img 
                  src={feature.imageSrc} 
                  alt={feature.alt}
                  className="w-full h-64 md:h-72 object-contain rounded-lg"
                />
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


