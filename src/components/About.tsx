import {
  CodeIcon,
  GraduationCapIcon,
  MapPinIcon,
  TranslateIcon,
} from "@phosphor-icons/react";
import { Reveal } from "./Reveal";

const FACTS = [
  { icon: MapPinIcon, label: "Amsterdam" },
  { icon: CodeIcon, label: "Full stack" },
  { icon: GraduationCapIcon, label: "HvA student" },
  { icon: TranslateIcon, label: "NL / EN" },
];

const TIMELINE = [
  {
    period: "2025 - heden",
    title: "Software Engineering, HvA",
    body: "HBO-opleiding aan de Hogeschool van Amsterdam, waar ik mijn fundament verbreed naar grotere applicaties.",
    current: true,
  },
  {
    period: "2024 - 2025",
    title: "Stage, BOEI17",
    body: "Een jaar lang WordPress-websites vanaf nul gebouwd en klanten ondersteund, midden in Amsterdam.",
  },
  {
    period: "2022 - 2025",
    title: "MBO niveau 4, Softwareontwikkeling",
    body: "Hier bouwde ik mijn technische basis: van programmeerlogica tot het bouwen van echte projecten.",
  },
];

export function About() {
  return (
    <section
      id="over-mij"
      aria-label="Over mij"
      className="scroll-mt-16 px-4 pb-10 pt-36 sm:px-6 sm:pb-16 sm:pt-48"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
        <div>
          <Reveal>
            <h2 className="max-w-[16ch] text-4xl font-semibold leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl">
              Goede software begint bij{" "}
              <span className="text-accent-deep">goed luisteren</span>.
            </h2>
            <div className="mt-8 max-w-[52ch] space-y-5 text-lg leading-relaxed text-ink/60">
              <p>
                Ik ben Gurpreet, full stack developer uit Amsterdam. Tijdens
                mijn stage bij BOEI17 bouwde ik een jaar lang WordPress-sites
                voor klanten, van het eerste gesprek tot de oplevering.
              </p>
              <p>
                Na mijn MBO studeer ik nu Software Engineering aan de HvA.
                Naast mijn studie bouw ik websites en webapps voor ondernemers
                die online willen groeien, met PHP, Laravel en moderne
                JavaScript.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-10 flex flex-wrap gap-2">
              {FACTS.map((fact) => (
                <li
                  key={fact.label}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-card px-4 py-2 text-sm font-medium text-ink/75 ring-1 ring-ink/8"
                >
                  <fact.icon size={16} className="text-accent-deep" />
                  {fact.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Verticale tijdlijn met doorlopende lijn en oplichtende knopen */}
        <ol className="relative lg:pt-2">
          <div
            aria-hidden
            className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-accent/60 via-ink/15 to-transparent"
          />
          {TIMELINE.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <li
                className="relative pl-12"
                style={{
                  paddingBottom: i < TIMELINE.length - 1 ? "3.5rem" : 0,
                }}
              >
                <span
                  className={`absolute left-0 top-0 h-4 w-4 rounded-full border-2 ${
                    item.current
                      ? "border-accent bg-accent"
                      : "border-ink/25 bg-paper"
                  }`}
                />
                <p className="font-mono text-xs text-accent-deep">
                  {item.period}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-ink/60">
                  {item.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
