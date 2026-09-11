import { CirclePlay, Headphones, Send } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import type { LinkIconKey, LinkPlatform } from "@/lib/links";

/** Any 24x24 currentColor glyph — lucide's icons and our own both satisfy it. */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/** Telegram's paper plane. Filled, so it stays readable at badge size. */
export function TelegramGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
    </svg>
  );
}

/** lucide-react v1 dropped brand marks, so the Instagram glyph lives here — */
/** drawn on lucide's grid and stroke conventions so the icon set stays uniform. */
export function InstagramGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

/** Resolves a `LinkItem["icon"]` key to a real component, client-side. */
export const LINK_ICONS: Record<LinkIconKey, IconComponent> = {
  video: CirclePlay,
  audio: Headphones,
  telegram: Send,
  instagram: InstagramGlyph,
};

const GLYPHS: Record<LinkPlatform, IconComponent> = {
  telegram: TelegramGlyph,
  instagram: InstagramGlyph,
};

/**
 * Tiny stamp pinned to the corner of a tile's icon chip, so a generic "play"
 * or "headphones" glyph still tells you where the link goes.
 */
export function PlatformBadge({ platform }: { platform: LinkPlatform }) {
  const Glyph = GLYPHS[platform];
  return (
    <span
      className="absolute -right-1 -bottom-1 grid size-6 place-items-center rounded-full bg-eggshell text-jet shadow-[0_1px_4px_rgb(0_0_0_/_0.4)] ring-1 ring-saffron/60 lg:size-7"
      aria-hidden
    >
      <Glyph className="size-3.5 lg:size-4" />
    </span>
  );
}
