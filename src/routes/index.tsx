import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Kynorix",
          slogan: "Engineering the Intelligent Future",
          description,
          areaServed: ["India", "United Arab Emirates", "Singapore", "Europe", "USA", "Australia"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
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
  );
}
