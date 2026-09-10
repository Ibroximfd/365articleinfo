"use client";

import { ArrowUpRight } from "lucide-react";
import { m } from "motion/react";
import type { LinkItem, LinkShade } from "@/lib/links";
import { LINK_ICONS, PlatformBadge } from "./SocialIcons";

/** The tonal ladder, Off White -> Warm Grey. Held here so the tile is the one
 *  place a shade is turned into a class, and Tailwind can see every literal. */
const SHADES: Record<LinkShade, string> = {
  paper: "bg-paper",
  linen: "bg-linen",
  sand: "bg-sand",
  grey: "bg-grey",
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
      className={`group relative flex min-h-[12rem] flex-col items-center overflow-hidden rounded-[1.5rem] border border-hairline p-4 text-center shadow-tile transition-[box-shadow,border-color] duration-300 hover:border-brass/55 hover:shadow-tile-hover sm:min-h-[14rem] sm:rounded-[1.75rem] sm:p-5 lg:min-h-[17rem] lg:p-6 ${SHADES[shade]}`}
    >
      {/* Light sweeps across the tile on hover — the only decorative flourish. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(105deg,transparent_38%,rgb(255_255_255_/_0.6)_50%,transparent_62%)] transition-transform duration-[900ms] ease-out group-hover:translate-x-full"
      />

      <ArrowUpRight
        aria-hidden
        strokeWidth={1.75}
        className="absolute top-4 right-4 size-4 text-ink/40 transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brass-deep sm:size-[1.15rem] lg:top-5 lg:right-5 lg:size-5"
      />

      {/* Dark Charcoal chip, brass glyph: centred so each tile reads as its own
          mark rather than a row of corner icons. */}
      <span className="relative mt-3 grid size-16 shrink-0 place-items-center rounded-[1.25rem] bg-gradient-to-br from-charcoal-lift to-ink text-brass shadow-chip ring-1 ring-brass/25 transition-[transform,box-shadow] duration-300 group-hover:scale-[1.06] group-hover:ring-brass/55 sm:mt-4 sm:size-[4.5rem] sm:rounded-[1.4rem] lg:mt-5 lg:size-[5rem] lg:rounded-[1.5rem] xl:size-[5.5rem] xl:rounded-[1.6rem]">
        <Icon className="size-8 sm:size-9 lg:size-10 xl:size-11" strokeWidth={1.6} aria-hidden />
        {badge ? <PlatformBadge platform={badge} /> : null}
      </span>

      <span className="mt-auto flex flex-col gap-1 pt-4">
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
        <span className="sr-only"> {hint}</span>
      </span>
    </m.a>
  );
}
