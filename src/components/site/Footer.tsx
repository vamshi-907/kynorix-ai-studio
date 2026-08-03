import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import logo from "@/assets/kynorix-logo.jpeg.asset.json";

const nav = [
  { label: "About", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "RetailOS", href: "#product" },
  { label: "Technology", href: "#technology" },
  { label: "Global Vision", href: "#global" },
];

const socials = [
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com" },
  { label: "X", icon: Twitter, href: "https://x.com" },
  { label: "GitHub", icon: Github, href: "https://github.com" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/70 px-6 py-16 md:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-3">
              <img
                src={logo.url}
                alt="Kynorix logo"
                className="size-9 rounded-xl object-cover"
                width={36}
                height={36}
              />
              <span className="font-display text-lg font-semibold text-navy-deep">Kynorix</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Engineering the Intelligent Future. Made in India. Built for the World.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:hello@kynorix.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy-deep transition-colors hover:text-accent"
            >
              <Mail className="size-4 text-accent" />
              hello@kynorix.com
            </a>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="glass-panel inline-flex size-10 items-center justify-center rounded-full transition-transform duration-300 hover:-translate-y-1"
                  >
                    <Icon className="size-4 text-navy-deep" strokeWidth={1.7} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Kynorix. All rights reserved.</span>
          <span>Innovate. Elevate. Excel.</span>
        </div>
      </div>
    </footer>
  );
}
