import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "motion/react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Industries } from "@/components/site/Industries";
import { RetailOS } from "@/components/site/RetailOS";
import { AITechnology } from "@/components/site/AITechnology";
import { Innovation } from "@/components/site/Innovation";
import { GlobalVision } from "@/components/site/GlobalVision";
import { Stats } from "@/components/site/Stats";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { CursorGlow } from "@/components/site/CursorGlow";

const title = "Kynorix — Engineering the Intelligent Future";
const description =
  "Kynorix is an AI-first technology company building intelligent platforms, computer vision and RetailOS for enterprises worldwide.";
const siteUrl = "https://project--93a50285-46ac-413f-8dd9-a64ff4f816d1.lovable.app";
const ogImage = `${siteUrl}/og-image.jpg`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Kynorix, AI company, artificial intelligence, computer vision, RetailOS, enterprise AI, machine learning platform",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },

      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "Kynorix" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:alt", content: "Kynorix — Engineering the Intelligent Future" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:image:alt", content: "Kynorix — Engineering the Intelligent Future" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Kynorix",
          url: siteUrl,
          logo: `${siteUrl}/favicon.png`,
          image: ogImage,
          slogan: "Engineering the Intelligent Future",
          description,
          areaServed: ["India", "United Arab Emirates", "Singapore", "Europe", "USA", "Australia"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Kynorix",
          url: siteUrl,
          description,
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <MotionConfig reducedMotion="user">
      <main id="top" className="relative overflow-x-hidden bg-background">
        <SmoothScroll />
        <CursorGlow />
        <Nav />
        <Hero />
        <About />
        <Industries />
        <RetailOS />
        <AITechnology />
        <Innovation />
        <GlobalVision />
        <Stats />
        <CTA />
        <Footer />
      </main>
    </MotionConfig>
  );
}
