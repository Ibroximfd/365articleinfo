import { LINKS } from "@/lib/links";
import { riseDelay } from "@/lib/motion";
import { LinkCard } from "./LinkCard";

export function LinksSection() {
  return (
    <section aria-labelledby="links-heading" className="w-full">
      <div
        style={riseDelay(300)}
        className="rise mb-5 flex items-center gap-3 sm:mb-6"
      >
        <h2
          id="links-heading"
          className="text-[0.7rem] font-semibold tracking-[0.22em] text-ink-faint uppercase"
        >
          Links
        </h2>
        <span aria-hidden className="h-px flex-1 bg-warm-grey" />
        <span className="text-[0.7rem] font-semibold tracking-[0.22em] text-brass-deep tabular-nums">
          {String(LINKS.length).padStart(2, "0")}
        </span>
      </div>

      <ul className="flex flex-col gap-3.5 sm:gap-4">
        {LINKS.map((link, i) => (
          <li key={link.id} className="rise" style={riseDelay(350 + i * 70)}>
            <LinkCard link={link} />
          </li>
        ))}
      </ul>
    </section>
  );
}
