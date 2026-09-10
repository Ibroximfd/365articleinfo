import { HERO } from "@/lib/links";
import { riseDelay } from "@/lib/motion";

/**
 * The one place the page goes dark. Dark Charcoal behind Antique Brass is the
 * palette's strongest pairing, so it carries the promise: 365, and what it buys.
 */
export function DaysTile() {
  return (
    <section
      aria-label="What Articles 365 is"
      style={riseDelay(120)}
      className="rise flex flex-col rounded-[1.75rem] bg-ink px-6 py-6 shadow-dark sm:rounded-[2rem] sm:px-8 sm:py-7 lg:col-span-4 lg:justify-between lg:px-9 lg:py-8"
    >
      <p className="flex items-baseline gap-3">
        <span className="font-serif text-[3.9rem] leading-[0.86] text-brass sm:text-[4.6rem] lg:text-[5.4rem]">
          {HERO.count}
        </span>
        <span className="text-[0.62rem] font-semibold tracking-[0.26em] text-grey uppercase">
          {HERO.countLabel}
        </span>
      </p>

      <ul className="mt-4 flex flex-col gap-2 lg:mt-5 lg:gap-2.5">
        {HERO.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-3 text-[0.82rem] leading-relaxed text-paper/86 sm:text-sm"
          >
            <span
              aria-hidden
              className="mt-[0.6em] size-[5px] shrink-0 rounded-full bg-brass"
            />
            <span className="text-pretty">{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
