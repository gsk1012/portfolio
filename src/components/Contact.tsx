import { useState } from "react";
import type { FormEvent } from "react";
import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  PaperPlaneTiltIcon,
} from "@phosphor-icons/react";
import { Reveal } from "./Reveal";
import { SlideLabel } from "./Button";

/* Vervang dit door je eigen Formspree form-ID (gratis op formspree.io). */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/JOUW_FORM_ID";

const CHANNELS = [
  {
    href: "mailto:gsinghkaur1012@gmail.com",
    icon: EnvelopeSimpleIcon,
    label: "gsinghkaur1012@gmail.com",
  },
  {
    href: "https://github.com/gsk1012",
    icon: GithubLogoIcon,
    label: "github.com/gsk1012",
  },
  {
    href: "https://www.linkedin.com/in/gurpreet-singh-a11a03303/",
    icon: LinkedinLogoIcon,
    label: "LinkedIn",
  },
];

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Versturen mislukt");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-ink/12 bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-ink/45 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="scroll-mt-16 px-4 py-10 sm:px-6 sm:py-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl">
            Laten we iets bouwen<span className="text-accent">.</span>
          </h2>
          <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-ink/60">
            Heb je een project, stageplek of gewoon een goed idee? Stuur een
            bericht, ik reageer meestal binnen een dag.
          </p>

          <ul className="mt-12 space-y-5">
            {CHANNELS.map((channel) => (
              <li key={channel.href}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-ink/75 transition-colors hover:text-accent-deep"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-card ring-1 ring-ink/10 transition-colors group-hover:ring-accent/50">
                    <channel.icon size={18} />
                  </span>
                  <span className="text-sm font-medium">{channel.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl bg-card p-7 ring-1 ring-ink/8 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
              <div className="space-y-2.5">
                <label
                  htmlFor="naam"
                  className="block text-sm font-medium text-ink/80"
                >
                  Naam
                </label>
                <input
                  id="naam"
                  name="naam"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Je naam"
                  className={inputClasses}
                />
              </div>
              <div className="space-y-2.5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-ink/80"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="naam@voorbeeld.nl"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="space-y-2.5">
              <label
                htmlFor="bericht"
                className="block text-sm font-medium text-ink/80"
              >
                Bericht
              </label>
              <textarea
                id="bericht"
                name="bericht"
                required
                rows={5}
                placeholder="Vertel kort over je project of vraag"
                className={`${inputClasses} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-[background-color,transform] duration-150 ease-out hover:bg-ink-soft active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <SlideLabel>
                {status === "sending" ? "Versturen..." : "Verstuur bericht"}
              </SlideLabel>
              <PaperPlaneTiltIcon
                size={16}
                weight="bold"
                className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>

            {status === "sent" && (
              <p className="text-sm text-ink" role="status">
                Bedankt voor je bericht! Ik neem snel contact met je op.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-accent-deep" role="alert">
                Er ging iets mis bij het versturen. Mail me direct via
                prince.parhar1012@gmail.com.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
