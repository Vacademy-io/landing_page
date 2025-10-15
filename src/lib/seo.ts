import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://www.example.com"),
  title: {
    default: "VAcademy — Learn, Grow, Succeed",
    template: "%s — VAcademy",
  },
  description: "A modern learning platform landing experience.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "VAcademy",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@vacademy",
  },
  robots: {
    index: true,
    follow: true,
  },
};


