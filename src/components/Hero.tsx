import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { Magnetic } from "./Magnetic";
import { SlideLabel } from "./Button";
import { useTypewriter } from "../hooks/useTypewriter";

const avatar = "/avatar-cutout.png";

const PHRASES = [
  "Full stack developer",
  "TypeScript & React",
  "Freelance webdeveloper",
  "Webdeveloper Amsterdam",
];

const STATS = [
  { value: 3, suffix: "+", label: "jaar code" },
  { value: 12, suffix: "", label: "maanden stage" },
  { value: 8, suffix: "", label: "technologieën" },
  { value: 1, suffix: "", label: "project opgeleverd" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

/** Telt op van 0 naar de eindwaarde zodra het getal in beeld komt. */
function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  const reduce = useReducedMotion();

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      count.set(value);
      return;
    }
    const controls = animate(count, value, { duration: 1.4, ease: EASE });
    return () => controls.stop();
  }, [inView, reduce, value, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

function StatList({ compact }: { compact?: boolean }) {
  return (
    <dl
      className={
        compact
          ? "flex items-start gap-10 xl:gap-12"
          : "mx-auto grid w-fit grid-cols-2 gap-x-16 gap-y-10 sm:gap-x-24"
      }
    >
      {STATS.map((stat) => (
        <div key={stat.label}>
          <dd
            className={`font-semibold tracking-tight ${
              compact ? "text-3xl xl:text-4xl" : "text-4xl"
            }`}
          >
            <CountUp value={stat.value} suffix={stat.suffix} />
          </dd>
          <dt className="mt-1.5 text-sm font-medium text-ink/55">{stat.label}</dt>
        </div>
      ))}
    </dl>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const typed = useTypewriter(PHRASES);

  return (
    <section
      aria-label="Introductie"
      className="overflow-x-clip px-4 pt-24 sm:px-6 lg:pt-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Het grote afgeronde vlak. Geen overflow-hidden: het portret
            steekt bewust boven de rand uit voor het 3D-gevoel. */}
        <motion.div
          className="relative rounded-[2rem] bg-shell sm:rounded-[2.75rem] lg:grid lg:grid-cols-[0.95fr_1.05fr]"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="flex flex-col justify-start p-7 pb-0 sm:p-12 sm:pb-0 lg:p-14 lg:pb-40">
            <h1 className="text-[3.2rem] font-semibold leading-[1.02] tracking-tighter sm:text-7xl lg:text-[4.75rem] xl:text-[5.25rem]">
              {["Gurpreet", "Singh Kaur"].map((line, i) => (
                <span key={line} className="block overflow-hidden pb-[0.07em]">
                  <motion.span
                    className="block"
                    initial={reduce ? false : { y: "112%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.15 + i * 0.12,
                      ease: EASE,
                    }}
                  >
                    {line}
                    {i === 1 && <span className="text-accent">.</span>}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              className="mt-5 font-mono text-base text-accent-deep sm:text-lg"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              {typed}
              <span aria-hidden className="animate-pulse">
                _
              </span>
            </motion.p>

            <motion.p
              className="mt-5 max-w-[40ch] text-base leading-relaxed text-ink/60 sm:text-lg"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: EASE }}
            >
              Software engineering student aan de HvA in Amsterdam. Ik ontwerp
              en bouw websites en webapps, van eerste schets tot livegang.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap items-center gap-3"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
            >
              <Magnetic>
                <a
                  href="#projecten"
                  className="group inline-flex items-center rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-[background-color,transform] duration-150 ease-out hover:bg-ink-soft active:scale-[0.97]"
                >
                  <SlideLabel>Bekijk werk</SlideLabel>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#contact"
                  className="group inline-flex items-center rounded-full bg-card px-7 py-3.5 text-sm font-semibold text-ink ring-1 ring-ink/10 transition-[box-shadow,transform] duration-150 ease-out hover:ring-ink/30 active:scale-[0.97]"
                >
                  <SlideLabel>Neem contact op</SlideLabel>
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Uitgesneden 3D-portret: voeten op de onderrand van het vlak,
              hoofd steekt op desktop boven het vlak uit. */}
          <motion.div
            className="relative mt-6 lg:mt-0"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
          >
            <img
              src={avatar}
              alt="3D-portret van Gurpreet Singh Kaur"
              fetchPriority="high"
              className="block w-full drop-shadow-[0_28px_24px_rgba(22,20,18,0.16)] lg:absolute lg:bottom-0 lg:-right-20 lg:h-[calc(100%+3rem)] lg:w-auto lg:max-w-none lg:[clip-path:inset(0_5rem_0_0_round_0_0_2.75rem_0)]"
            />
          </motion.div>

          {/* Uitgesneden hoek linksonder met de kerngetallen (alleen desktop).
              De holle overgangshoekjes laten het papiervlak vloeiend in het
              grote vlak overlopen. Linksboven carvet de shell-kleur de bocht;
              rechts ligt het portret eronder, dus daar carvet transparant
              (radial-gradient) de bocht zodat er geen lichte vlek ontstaat. */}
          <div className="absolute bottom-0 left-0 hidden rounded-tr-[2.5rem] bg-paper pl-6 pr-10 pt-8 lg:block">
            <span aria-hidden className="absolute -top-10 left-0 h-10 w-10 bg-paper">
              <span className="block h-full w-full rounded-bl-[2.5rem] bg-shell" />
            </span>
            <span
              aria-hidden
              className="absolute bottom-0 -right-10 h-10 w-10"
              style={{
                background:
                  "radial-gradient(circle at top right, transparent 2.5rem, var(--color-paper) 2.5rem)",
              }}
            />
            <StatList compact />
          </div>
        </motion.div>

        {/* Kerngetallen onder het vlak op mobiel en tablet */}
        <div className="mt-10 lg:hidden">
          <StatList />
        </div>
      </div>
    </section>
  );
}
