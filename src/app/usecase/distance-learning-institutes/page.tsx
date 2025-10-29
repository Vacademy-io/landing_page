import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import { HeroSection } from "./components/HeroSection";
import { TutorPainPointsEmpathySection } from "./components/TutorPainPointsEmpathySection";
import { AIToolsSection } from "./components/AIToolsSection";
import { UnifiedPlatformSection } from "./components/UnifiedPlatformSection";
import { InnovationFeatureSection } from "./components/InnovationFeatureSection";
import AdminDashboardBanner from "./components/AdminDashboardBanner";
import StudentExperienceSection from "./components/StudentExperienceSection";
import LearnerAppBanner from "./components/LearnerAppBanner";
import { ProductShowcaseSection } from "./components/ProductShowcaseSection";
import { StatsSection } from "./components/StatsSection";
import { PlanTeachSection } from "./components/PlanTeachSection";
import { AutomationWorkflowsSection } from "./components/AutomationWorkflowsSection";
import { RealStoriesProofSection } from "./components/RealStoriesProofSection";
import { GentleCloseSection } from "./components/GentleCloseSection";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Distance Learning Institutes | Vacademy",
  description:
    "Discover how Vacademy empowers distance learning institutes with interactive courses, analytics, and seamless integrations.",
  openGraph: {
    title: "Distance Learning Institutes | Vacademy",
    description:
      "Discover how Vacademy empowers distance learning institutes with interactive courses, analytics, and seamless integrations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Distance Learning Institutes | Vacademy",
    description:
      "Discover how Vacademy empowers distance learning institutes with interactive courses, analytics, and seamless integrations.",
  },
};

export default function DistanceLearningInstitutesPage() {
  return (
    <>
      <Navbar foreground="dark" />
      <HeroSection />
      <TutorPainPointsEmpathySection />
      <UnifiedPlatformSection />
      <PlanTeachSection />
      <InnovationFeatureSection />
      <AdminDashboardBanner />
      <StudentExperienceSection />
      <LearnerAppBanner />
      <AIToolsSection />
      <ProductShowcaseSection />
      <AutomationWorkflowsSection />
      <StatsSection />
      <RealStoriesProofSection />
      <GentleCloseSection />
      <Footer />
    </>
  );
}
