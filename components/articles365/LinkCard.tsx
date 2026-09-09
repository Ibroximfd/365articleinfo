"use client";

import { ArrowUpRight } from "lucide-react";
import { m } from "motion/react";
import type { LinkItem } from "@/lib/links";
import { LINK_ICONS, PlatformBadge } from "./SocialIcons";

/**
 * The one client component on the page. Motion is here for what it is good at —
 * spring-damped hover and press — while the card's entrance is CSS on the <li>,
 * so nothing above the fold waits for hydration to become visible.
 */
export function LinkCard({ link }: { link: LinkItem }) {
  const { href, title, description, badge, hint } = link;
  const Icon = LINK_ICONS[link.icon];

  return (
    <m.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 340, damping: 26 }}
      className="group relative flex min-h-[5.5rem] items-center gap-4 overflow-hidden rounded-[var(--radius-card)] border border-warm-grey/70 bg-[linear-gradient(178deg,rgb(255_255_255_/_0.86)_0%,rgb(251_250_248_/_0.9)_55%,rgb(246_244_242_/_0.92)_100%)] p-4 shadow-card backdrop-blur-[2px] transition-[box-shadow,border-color] duration-300 hover:border-brass/70 hover:shadow-card-hover sm:gap-5 sm:p-5 2xl:min-h-24 2xl:p-6"
    >
      {/* Light sweeps across the card on hover — the only decorative flourish. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(105deg,transparent_38%,rgb(255_255_255_/_0.6)_50%,transparent_62%)] transition-transform duration-[900ms] ease-out group-hover:translate-x-full"
      />

      {/* Dark Charcoal chip with a brass glyph: the palette's strongest pairing,
          and the one place the page goes dark. */}
      <span className="relative grid size-13 shrink-0 place-items-center rounded-[1.05rem] bg-gradient-to-br from-charcoal-lift to-ink text-brass shadow-chip ring-1 ring-brass/30 transition-[transform,box-shadow] duration-300 group-hover:scale-[1.06] group-hover:ring-brass/60 sm:size-14 2xl:size-15">
        <Icon className="size-6 2xl:size-7" strokeWidth={1.75} aria-hidden />
        {badge ? <PlatformBadge platform={badge} /> : null}
      </span>

      <span className="min-w-0 flex-1">
        <span className="relative inline-block font-semibold tracking-[-0.01em] text-ink 2xl:text-[1.05rem]">
          {title}
          <span
            aria-hidden
            className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-brass transition-transform duration-500 ease-out group-hover:scale-x-100"
          />
        </span>
        <span className="mt-1 block text-[0.83rem] leading-snug text-pretty text-ink-soft sm:text-sm 2xl:text-[0.9rem]">
          {description}
        </span>
        <span className="sr-only"> {hint}</span>
      </span>

      <ArrowUpRight
        aria-hidden
        strokeWidth={1.75}
        className="size-5 shrink-0 text-ink-faint transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brass-deep"
      />
    </m.a>
  );
}
