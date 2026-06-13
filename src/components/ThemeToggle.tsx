import { useState } from "react";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";

type Theme = "light" | "dark";

/** Leest het actieve thema uit de class die het no-flash script al zette. */
function currentTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(currentTheme);
  const isDark = theme === "dark";

  function toggle() {
    const next: Theme = isDark ? "light" : "dark";
    const root = document.documentElement;

    // Korte gecoördineerde fade, maar niet bij reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      root.classList.add("theme-transition");
      window.setTimeout(() => root.classList.remove("theme-transition"), 450);
    }

    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* localStorage kan geblokkeerd zijn (privémodus) */
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next === "dark" ? "#100d0b" : "#f4f4f2");

    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        isDark ? "Schakel naar lichte modus" : "Schakel naar donkere modus"
      }
      title={isDark ? "Lichte modus" : "Donkere modus"}
      className="relative grid h-9 w-9 place-items-center rounded-full text-ink/70 ring-1 ring-ink/10 transition-colors hover:bg-ink/5 hover:text-ink"
    >
      <SunIcon
        size={18}
        weight="bold"
        aria-hidden
        className={`col-start-1 row-start-1 transition-all duration-300 ease-out motion-reduce:transition-none ${
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        }`}
      />
      <MoonIcon
        size={18}
        weight="bold"
        aria-hidden
        className={`col-start-1 row-start-1 transition-all duration-300 ease-out motion-reduce:transition-none ${
          isDark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      />
    </button>
  );
}
