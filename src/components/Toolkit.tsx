import { Reveal } from "./Reveal";

type Tech = { slug: string; label: string };

const TECH: Tech[] = [
  { slug: "php", label: "PHP" },
  { slug: "laravel", label: "Laravel" },
  { slug: "mysql", label: "MySQL" },
  { slug: "typescript", label: "TypeScript" },
  { slug: "javascript", label: "JavaScript" },
  { slug: "html5", label: "HTML" },
  { slug: "css", label: "CSS" },
  { slug: "wordpress", label: "WordPress" },
  { slug: "react", label: "React" },
  { slug: "docker", label: "Docker" },
  { slug: "postman", label: "Postman" },
];

/* Monochrome inkt-logo's zodat het palet rustig blijft. */
const logoUrl = (slug: string) => `https://cdn.simpleicons.org/${slug}/161412`;

function MarqueeItem({ tech, hidden }: { tech: Tech; hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="flex shrink-0 items-center gap-3 pr-16 opacity-60"
    >
      <img
        src={logoUrl(tech.slug)}
        alt=""
        width={30}
        height={30}
        loading="lazy"
      />
      <span className="text-xl font-medium tracking-tight">{tech.label}</span>
    </div>
  );
}

function LogoMarquee() {
  return (
    <div className="-mx-4 relative mt-12 overflow-hidden sm:-mx-6" aria-label="Technologieën">
      <div className="marquee-track flex w-max items-center">
        {TECH.map((tech) => (
          <MarqueeItem key={tech.slug} tech={tech} />
        ))}
        {TECH.map((tech) => (
          <MarqueeItem key={`dup-${tech.slug}`} tech={tech} hidden />
        ))}
      </div>
      {/* randen vervagen naar de papierkleur */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent" />
    </div>
  );
}

function CellLogos({ slugs }: { slugs: string[] }) {
  return (
    <div className="mt-auto flex items-center gap-4 pt-8">
      {slugs.map((slug) => (
        <img
          key={slug}
          src={logoUrl(slug)}
          alt=""
          width={24}
          height={24}
          loading="lazy"
          className="opacity-55"
        />
      ))}
    </div>
  );
}

export function Toolkit() {
  return (
    <section
      id="vaardigheden"
      aria-label="Vaardigheden en technologieën"
      className="scroll-mt-16 px-4 py-10 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl">
            Mijn toolkit
          </h2>
          <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-ink/60">
            Ik werk over de volle breedte van een project, van database en API
            tot de interface die de gebruiker ziet.
          </p>
        </Reveal>
      </div>

      <LogoMarquee />

      <div className="mx-auto mt-12 max-w-7xl">
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0}>
            <div className="flex h-full flex-col rounded-3xl bg-card p-8 ring-1 ring-ink/8 sm:p-10">
              <h3 className="text-2xl font-semibold tracking-tight">
                Backend
              </h3>
              <p className="mt-3 max-w-[44ch] text-base leading-relaxed text-ink/60">
                PHP, Laravel en MySQL zijn mijn basis: API's, datamodellen en
                logica die blijft werken als het project groeit.
              </p>
              <CellLogos slugs={["php", "postman", "laravel", "docker", "mysql"]} />            
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.08}>
            <div className="flex h-full flex-col rounded-3xl bg-accent/12 p-8 sm:p-10">
              <h3 className="text-2xl font-semibold tracking-tight">
                Frontend
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink/60">
                React, TypeScript, JavaScript, HTML en CSS voor interfaces die
                snel en toegankelijk zijn.
              </p>
              <CellLogos slugs={["react", "typescript", "javascript", "html5", "css"]} />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0}>
            <div className="flex h-full flex-col rounded-3xl bg-shell p-8 sm:p-10">
              <h3 className="text-2xl font-semibold tracking-tight">
                WordPress
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink/60">
                Op maat gebouwde thema's, plugins en sites. Van ontwerp tot
                oplevering, inclusief SEO-instellingen en snelheidsoptimalisatie,
                zodat klanten daarna zelf content kunnen beheren zonder
                technische kennis.
              </p>
              <CellLogos slugs={["wordpress"]} />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.08}>
            <a
              href="https://github.com/gsk1012"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-3xl bg-card p-8 ring-1 ring-ink/8 transition-colors hover:ring-accent/40 sm:p-10"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Nu aan het bouwen
                </h3>
                <span className="relative inline-flex items-center text-sm font-semibold text-ink/60 transition-colors group-hover:text-accent-deep">
                  GitHub
                  <span
                    aria-hidden
                    className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-accent-deep transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100 motion-reduce:hidden"
                  />
                </span>
              </div>
              <p className="mt-3 max-w-[44ch] text-base leading-relaxed text-ink/60">
                Naast studie en stage bouw ik elke week aan nieuwe projecten.
                Dit is mijn echte GitHub-activiteit:
              </p>
              {/* Live contributiegrafiek van GitHub, in het accentoranje */}
              <img
                src="https://ghchart.rshah.org/ea580c/gsk1012"
                alt="GitHub-contributiegrafiek van gsk1012 over het afgelopen jaar"
                loading="lazy"
                className="mt-auto w-full pt-8"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
