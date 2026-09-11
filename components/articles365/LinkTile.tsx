"use client";

import { ArrowRight } from "lucide-react";
import { m } from "motion/react";
import { CTA } from "@/lib/links";
import type { LinkItem, LinkShade } from "@/lib/links";
import { LINK_ICONS, PlatformBadge } from "./SocialIcons";

/** The tonal ladder, Saffron to Satin gold. Held here so the tile is the one
 *  place a shade is turned into a class, and Tailwind can see every literal. */
const SHADES: Record<LinkShade, string> = {
  paper: "bg-gold-1",
  linen: "bg-gold-2",
  sand: "bg-gold-3",
  grey: "bg-gold-4",
};

/**
 * The only client component on the page. Motion is here for what it is good
 * at — spring-damped hover and press — while the tile's entrance is CSS on the
 * <li>, so nothing above the fold waits for hydration to become visible.
 */
export function LinkTile({ link }: { link: LinkItem }) {
  const { href, title, description, caption, badge, hint, shade } = link;
  const Icon = LINK_ICONS[link.icon];

  return (
    <m.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 340, damping: 26 }}
      className={`group relative flex h-full min-h-[13.5rem] flex-col items-center overflow-hidden rounded-[1.5rem] border border-night/10 p-4 text-center shadow-tile transition-[box-shadow,border-color] duration-300 hover:border-night/40 hover:shadow-tile-hover sm:min-h-[15rem] sm:rounded-[1.75rem] sm:p-5 lg:min-h-[17.5rem] lg:p-6 ${SHADES[shade]}`}
    >
      {/* Light sweeps across the tile on hover — the only decorative flourish. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(105deg,transparent_38%,rgb(255_255_255_/_0.45)_50%,transparent_62%)] transition-transform duration-[900ms] ease-out group-hover:translate-x-full"
      />

      {/* Night chip, Saffron glyph — the logo's own pairing: centred so each tile reads as its own
          mark rather than a row of corner icons. */}
      <span className="relative mt-2 grid size-16 shrink-0 place-items-center rounded-[1.25rem] bg-gradient-to-br from-jet to-night text-saffron shadow-chip ring-1 ring-saffron/30 transition-[transform,box-shadow] duration-300 group-hover:scale-[1.06] group-hover:ring-saffron/70 sm:mt-3 sm:size-[4.5rem] sm:rounded-[1.4rem] lg:mt-4 lg:size-[5rem] lg:rounded-[1.5rem] xl:size-[5.5rem] xl:rounded-[1.6rem]">
        <Icon className="size-8 sm:size-9 lg:size-10 xl:size-11" strokeWidth={1.6} aria-hidden />
        {badge ? <PlatformBadge platform={badge} /> : null}
      </span>

      <span className="mt-auto flex flex-col items-center gap-1 pt-4">
        <span className="font-serif text-[1.1rem] leading-[1.12] text-balance text-ink sm:text-[1.3rem] lg:text-[1.25rem] xl:text-[1.5rem] 2xl:text-[1.65rem]">
          {title}
        </span>
        {/* The wide tiles carry the full line; the phone's 2x2 gets the short
            one. Only one is ever in the DOM, so the accessible name matches
            what is on screen. */}
        <span className="text-[0.7rem] leading-snug text-ink-soft sm:text-xs lg:hidden">
          {caption}
        </span>
        <span className="hidden text-[0.83rem] leading-snug text-pretty text-ink-soft lg:block">
          {description}
        </span>

        {/* The affordance. aria-hidden: the link is already fully named, and
            "click here" is the last thing a screen reader needs read to it. */}
        <span
          aria-hidden
          className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-night px-3 py-1.5 text-[0.63rem] font-semibold tracking-[0.16em] text-saffron uppercase shadow-chip transition-[background-color,box-shadow] duration-300 group-hover:bg-jet sm:mt-2.5 sm:text-[0.66rem] lg:text-[0.68rem]"
        >
          {CTA}
          <ArrowRight
            strokeWidth={2.4}
            className="cue-arrow size-3 sm:size-3.5"
          />
        </span>

        <span className="sr-only"> {hint}</span>
      </span>
    </m.a>
  );
}
