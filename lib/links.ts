/** Platform drives the small badge stamped on a tile's icon chip. */
export type LinkPlatform = "telegram" | "instagram";

/**
 * Icons are named here, not imported: this config is read by a server
 * component, and a React component cannot cross the server/client boundary as
 * a prop. `LINK_ICONS` in SocialIcons.tsx resolves the key on the client.
 */
export type LinkIconKey = "video" | "audio" | "telegram" | "instagram";

/**
 * The tonal step a tile is painted in. The four run Off White -> Warm Grey;
 * a link keeps its shade across every breakpoint, so the desktop row and the
 * phone's 2x2 read as one system rather than two designs.
 */
export type LinkShade = "paper" | "linen" | "sand" | "grey";

export interface LinkItem {
  /** Stable key — also the React key and an analytics-friendly slug. */
  id: string;
  title: string;
  /** Shown on the wide tiles from `lg` up. */
  description: string;
  /** One line, for the phone's 2x2 tiles where the description will not fit. */
  caption: string;
  href: string;
  icon: LinkIconKey;
  shade: LinkShade;
  platform: LinkPlatform;
  /**
   * Small platform stamp on the icon chip. Only set it when the chip icon is
   * generic (a play button, headphones) and the destination needs naming.
   */
  badge?: LinkPlatform;
  /**
   * Visually-hidden suffix appended to the tile's own text. Kept as extra
   * content rather than an aria-label so the accessible name still contains
   * the visible label (WCAG 2.5.3 Label in Name).
   */
  hint: string;
}

/**
 * The four media destinations. Contact is separate — see CONTACT below.
 * Add or reorder entries here and the UI follows, including the count in the
 * section header; nothing else needs touching.
 */
export const LINKS: readonly LinkItem[] = [
  {
    id: "instruction-video",
    title: "Instruction video",
    description: "A step-by-step guide to getting the most out of the book.",
    caption: "Step-by-step guide",
    href: "https://t.me/+azN9x8V6lc40NTNi",
    icon: "video",
    shade: "paper",
    platform: "telegram",
    badge: "telegram",
    hint: "Opens on Telegram in a new tab.",
  },
  {
    id: "articles-audio",
    title: "Audio articles",
    description: "Every article read aloud — listen on the move.",
    caption: "Listen on the move",
    href: "https://t.me/+cZuuurXwBMRlNjYy",
    icon: "audio",
    shade: "linen",
    platform: "telegram",
    badge: "telegram",
    hint: "Opens on Telegram in a new tab.",
  },
  {
    id: "telegram-channel",
    title: "Telegram channel",
    description: "Daily articles and announcements at @articles365.",
    caption: "@articles365",
    href: "https://t.me/articles365",
    icon: "telegram",
    shade: "sand",
    platform: "telegram",
    hint: "Opens on Telegram in a new tab.",
  },
  {
    id: "instagram",
    title: "Instagram",
    description: "The 365 Magazine page: book news and highlights.",
    caption: "@365_magazine",
    href: "https://www.instagram.com/365_magazine?stkn=YWFnbzRpbjdqdDc2&utm_source=qr",
    icon: "instagram",
    shade: "grey",
    platform: "instagram",
    hint: "Opens on Instagram in a new tab.",
  },
] as const;

/**
 * Direct contact. Kept apart from LINKS on purpose: the tiles are the book's
 * media, this is a person — it renders as its own bar under them.
 */
export const CONTACT = {
  label: "Contact · Partnerships",
  note: "Orders, questions and collaboration",
  handle: "@I365_admin",
  href: "https://t.me/I365_admin",
  hint: "Opens a Telegram chat in a new tab.",
} as const;

/** Visible affordance on every tile. aria-hidden — the links are already named. */
export const CTA = "Click here" as const;

/** Hero copy lives beside the links so all page content is edited in one place. */
export const HERO = {
  kicker: "365 Magazine",
  brand: "Articles 365",
  slogan: "Consistency is the key",
  /** Closes the masthead and names what the tiles below are for. */
  follow: "Follow for more",
} as const;
