import type { ReactNode } from "react";

/**
 * Tekst die bij hover verticaal wegrolt terwijl een identieke kopie
 * van onderaf naar binnen schuift. Beide kopieën delen via grid exact
 * dezelfde box, zodat translate-y-full precies één regelhoogte is en er
 * niets afgekapt wordt. De cliché-pijl is hiermee niet meer nodig.
 */
export function SlideLabel({ children }: { children: ReactNode }) {
  return (
    <span className="relative grid overflow-hidden">
      <span className="col-start-1 row-start-1 transition-transform duration-[350ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-full motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
        {children}
      </span>
      <span
        aria-hidden
        className="col-start-1 row-start-1 translate-y-full transition-transform duration-[350ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 motion-reduce:hidden"
      >
        {children}
      </span>
    </span>
  );
}

/** Kloppend stipje dat "live" aangeeft, in de accentkleur van de site. */
export function LiveDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:hidden" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
    </span>
  );
}
