import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProductShowcaseSection } from "./components/ProductShowcaseSection";
import { StatsSection } from "./components/StatsSection";
import { PlanTeachSection } from "./components/PlanTeachSection";
import { AISupportSection } from "./components/AISupportSection";
import { HyperPersonalizationSection } from "./components/HyperPersonalizationSection";
import { GrowthLeadGenerationSection } from "./components/GrowthLeadGenerationSection";
import { MakeTeachingEffortlessSection } from "./components/MakeTeachingEffortlessSection";
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
      <Navbar foreground="light" />
      <HeroSection />
      <ProductShowcaseSection />
      <PlanTeachSection />
      <StatsSection />
      <AISupportSection />
      <HyperPersonalizationSection />
      <GrowthLeadGenerationSection />
      <MakeTeachingEffortlessSection />
      <RealStoriesProofSection />
      <GentleCloseSection />
      <Footer />
    </>
  );
}
