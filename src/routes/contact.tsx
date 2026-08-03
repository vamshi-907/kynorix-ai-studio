import { createFileRoute, Link } from "@tanstack/react-router";
import { MotionConfig, motion } from "motion/react";
import { ArrowLeft, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { LightBeams, NeuralField } from "@/components/site/Atmosphere";
import { DepthField } from "@/components/site/DepthField";
import { Reveal, Section, Eyebrow, GlassCard } from "@/components/site/primitives";
import { CONTACT, mailto } from "@/lib/contact";

const title = "Contact Kynorix — Talk to our AI team";
const description =
  "Reach the Kynorix team for AI partnerships, RetailOS demos and enterprise projects. Call +91 86392 43604 or email venkatasaivamshi23@gmail.com.";
const siteUrl = "https://project--93a50285-46ac-413f-8dd9-a64ff4f816d1.lovable.app";
const ogImage = `${siteUrl}/og-image.jpg`;

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { property: "og:site_name", content: "Kynorix" },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Kynorix — Engineering the Intelligent Future" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: title,
          description,
          url: `${siteUrl}/contact`,
          mainEntity: {
            "@type": "Organization",
            name: "Kynorix",
            email: CONTACT.email,
            telephone: "+918639243604",
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "sales",
                email: CONTACT.email,
                telephone: "+918639243604",
                availableLanguage: ["English", "Hindi", "Telugu"],
              },
            ],
          },
        }),
      },
    ],
  }),
});

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: mailto("Partner with Kynorix"),
    note: "Best for briefs, RFPs and partnerships",
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    note: "Mon–Sat, 9:00 – 20:00 IST",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: CONTACT.phone,
    href: CONTACT.whatsapp,
    note: "Quick questions and demo scheduling",
  },
];

function ContactPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative overflow-x-hidden bg-background">
        <LightBeams />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] opacity-70">
          <NeuralField count={18} />
        </div>
        <Nav />

        <Section className="pt-40 md:pt-48">
          <div className="relative overflow-hidden rounded-[2.5rem] px-6 py-16 md:px-14 md:py-20">
            <DepthField />
            <div className="relative">
              <Reveal>
                <Eyebrow>Contact</Eyebrow>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 max-w-3xl text-[clamp(2.4rem,6vw,4.6rem)] font-semibold leading-[1.03] text-navy-deep">
                  Let&apos;s talk about your <span className="text-gradient">AI roadmap</span>
                </h1>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                  Tell us what you want to build — computer vision, RetailOS, intelligent automation
                  or a bespoke platform. We reply within one business day.
                </p>
              </Reveal>

              <div className="mt-12 grid gap-5 md:grid-cols-3">
                {channels.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <Reveal key={c.label} delay={0.24 + i * 0.08}>
                      <motion.a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                        whileHover={{ y: -6 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="block h-full"
                      >
                        <GlassCard className="h-full p-6">
                          <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-accent/10">
                            <Icon className="size-5 text-accent" strokeWidth={1.8} />
                          </span>
                          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                            {c.label}
                          </p>
                          <p className="mt-2 break-words font-display text-base font-semibold text-navy-deep">
                            {c.value}
                          </p>
                          <p className="mt-2 text-sm text-muted-foreground">{c.note}</p>
                        </GlassCard>
                      </motion.a>
                    </Reveal>
                  );
                })}
              </div>

              <Reveal delay={0.5}>
                <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="size-4 text-accent" />
                    {CONTACT.location}
                  </span>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 font-medium text-navy-deep transition-colors hover:text-accent"
                  >
                    <ArrowLeft className="size-4" />
                    Back to home
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        <Footer />
      </main>
    </MotionConfig>
  );
}
