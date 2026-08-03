import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/kynorix-logo.jpeg.asset.json";

const links = [
  { label: "About", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "RetailOS", href: "#product" },
  { label: "Technology", href: "#technology" },
  { label: "Global", href: "#global" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 transition-all duration-500 md:px-6 ${
          scrolled ? "glass-panel" : "border border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="Kynorix logo"
            className="size-9 rounded-xl object-cover"
            width={36}
            height={36}
          />
          <span className="font-display text-lg font-semibold tracking-tight text-navy-deep">
            Kynorix
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-navy after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
            style={{ background: "var(--gradient-ink)" }}
          >
            Partner with Us
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="glass-panel inline-flex size-10 items-center justify-center rounded-full lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel mx-auto mt-3 max-w-7xl rounded-3xl p-4 lg:hidden"
        >
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-navy transition-colors hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
