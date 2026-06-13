import { Reveal } from "./Reveal";
import { LiveDot, SlideLabel } from "./Button";
import princeDesktop from "../assets/prince-schilder.jpg";
import princeMobile from "../assets/prince-schilder-mobiel.jpg";
import lucaAdmin from "../assets/lucastars-admin.jpg";
import lucaMobile from "../assets/lucastars-mobiel.jpg";

type Project = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  /** Compacte labels die de opgeleverde onderdelen samenvatten. */
  tags: string[];
  /** Publieke link; ontbreekt bij lokale schoolprojecten. */
  live?: { href: string; label: string };
  /** Statisch label rechtsboven als er geen live link is. */
  badge?: string;
  /** Grote schermafbeelding (landscape). */
  shot: { src: string; alt: string };
  /** Kleinere overlay in telefoonvorm (portrait). */
  phone: { src: string; alt: string };
};

const PROJECTS: Project[] = [
  {
    id: "prince-schilder",
    eyebrow: "Webdesign en development",
    title: "Prince Schilder",
    body: "Website voor een schilder- en klusbedrijf in Amsterdam. Ontworpen en gebouwd van eerste schets tot livegang, met focus op offerteaanvragen.",
    tags: ["Ontwerp", "Development", "Livegang en SEO"],
    live: {
      href: "https://prince-schilder.vercel.app/",
      label: "Bekijk live site",
    },
    shot: {
      src: princeDesktop,
      alt: "Screenshot van de Prince Schilder website op desktop",
    },
    phone: {
      src: princeMobile,
      alt: "Screenshot van de Prince Schilder website op mobiel",
    },
  },
  {
    id: "lucastars",
    eyebrow: "Schoolproject | Webshop en dashboard",
    title: "LucaStars",
    body: "Webshop voor text-based games. Klanten zoeken op genre en prijs en rekenen af; achter de schermen beheer ik alles via een zelfgebouwd admin dashboard.",
    tags: ["Webshop", "Admin dashboard", "Accounts"],
    badge: "Schoolproject",
    shot: {
      src: lucaAdmin,
      alt: "Het LucaStars admin dashboard met omzetgrafiek en kerncijfers",
    },
    phone: {
      src: lucaMobile,
      alt: "De LucaStars webshop op mobiel met de slogan Kies. Ontdek. Speel.",
    },
  },
];

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-ink text-paper sm:rounded-[2.5rem]">
        <div className="flex flex-1 flex-col p-7 pb-6 sm:p-9 sm:pb-7">
          <p className="font-mono text-xs text-accent">{project.eyebrow}</p>

          <div className="mt-3 flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {project.title}
            </h3>
            {project.live ? (
              <a
                href={project.live.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition-transform duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.97]"
              >
                <LiveDot />
                <SlideLabel>{project.live.label}</SlideLabel>
              </a>
            ) : project.badge ? (
              <span className="inline-flex shrink-0 items-center rounded-full bg-paper/10 px-4 py-2 text-sm font-medium text-paper/70 ring-1 ring-paper/15">
                {project.badge}
              </span>
            ) : null}
          </div>

          <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-paper/65">
            {project.body}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-paper/8 px-3 py-1 text-xs font-medium text-paper/70 ring-1 ring-paper/10"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Schermafbeelding onderaan, met een kleine mobiele weergave ervoor. */}
        <div className="relative mt-auto px-7 pb-7 sm:px-9 sm:pb-9">
          <img
            src={project.shot.src}
            alt={project.shot.alt}
            loading="lazy"
            className="aspect-[16/10] w-full rounded-xl object-cover object-left-top ring-1 ring-paper/15"
          />
          <img
            src={project.phone.src}
            alt={project.phone.alt}
            loading="lazy"
            className="absolute bottom-3 right-10 w-20 rounded-lg ring-1 ring-paper/25 shadow-2xl shadow-black/50 sm:bottom-5 sm:right-12 sm:w-24 sm:rounded-xl"
          />
        </div>
      </article>
    </Reveal>
  );
}

export function CaseStudy() {
  return (
    <section
      id="projecten"
      aria-label="Uitgelicht werk"
      className="scroll-mt-16 px-4 py-10 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl">
            Uitgelicht werk
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.08} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-sm text-ink/50">
            Meer projecten in de maak. Volg mijn code op{" "}
            <a
              href="https://github.com/gsk1012"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink/80 underline decoration-accent/70 underline-offset-4 transition-colors hover:text-accent-deep"
            >
              GitHub
            </a>
            {" "}voor wat ik nu aan het bouwen ben.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
