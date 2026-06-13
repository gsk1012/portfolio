import { useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useScroll, useMotionValueEvent } from "motion/react";

const LINKS = [
  { href: "#over-mij", label: "Over mij" },
  { href: "#vaardigheden", label: "Toolkit" },
  { href: "#projecten", label: "Werk" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink/5 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="px-4 sm:px-6">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-tight">
          gurpreet<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink/60 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
        >
          {open ? <XIcon size={24} /> : <ListIcon size={24} />}
        </button>
      </nav>
      </div>

      {open && (
        <ul className="space-y-1 border-t border-ink/5 bg-paper/95 px-4 pb-4 pt-2 backdrop-blur-md md:hidden">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
