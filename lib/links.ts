/** Platform drives the small badge stamped on a card's icon chip. */
export type LinkPlatform = "telegram" | "instagram";

/**
 * Icons are named here, not imported: this config is read by a server
 * component, and a React component cannot cross the server/client boundary as
 * a prop. `LINK_ICONS` in SocialIcons.tsx resolves the key on the client.
 */
export type LinkIconKey = "video" | "audio" | "telegram" | "instagram";

export interface LinkItem {
  /** Stable key — also used as the React key and the analytics-friendly slug. */
  id: string;
  title: string;
  description: string;
  href: string;
  icon: LinkIconKey;
  platform: LinkPlatform;
  /**
   * Small platform stamp on the icon chip. Only set it when the chip icon is
   * generic (a play button, headphones) and the destination needs naming.
   */
  badge?: LinkPlatform;
  /**
   * Visually-hidden suffix appended to the card's own text. Kept as extra
   * content rather than an aria-label so the accessible name still contains
   * the visible label (WCAG 2.5.3 Label in Name).
   */
  hint: string;
}

/**
 * The four media destinations. Contact is separate — see CONTACT below.
 * Add or reorder entries here — the UI renders whatever is in this array.
 */
export const LINKS: readonly LinkItem[] = [
  {
    id: "instruction-video",
    title: "Instruction video",
    description: "A step-by-step guide to getting the most out of the book.",
    href: "https://t.me/+azN9x8V6lc40NTNi",
    icon: "video",
    platform: "telegram",
    badge: "telegram",
    hint: "Opens on Telegram in a new tab.",
  },
  {
    id: "articles-audio",
    title: "Article audio",
    description: "Every article read aloud — listen on the move.",
    href: "https://t.me/+cZuuurXwBMRlNjYy",
    icon: "audio",
    platform: "telegram",
    badge: "telegram",
    hint: "Opens on Telegram in a new tab.",
  },
  {
    id: "telegram-channel",
    title: "Telegram channel",
    description: "Daily articles and announcements at @articles365.",
    href: "https://t.me/articles365",
    icon: "telegram",
    platform: "telegram",
    hint: "Opens on Telegram in a new tab.",
  },
  {
    id: "instagram",
    title: "Instagram",
    description: "The 365 Magazine page: book news and highlights.",
    href: "https://www.instagram.com/365_magazine?stkn=YWFnbzRpbjdqdDc2&utm_source=qr",
    icon: "instagram",
    platform: "instagram",
    hint: "Opens on Instagram in a new tab.",
  },
] as const;

/**
 * Direct contact. Kept apart from LINKS on purpose: the cards are the book's
 * media, this is a person — it renders as a signature line under the hero.
 */
export const CONTACT = {
  label: "Contact · Partnerships",
  note: "Orders, questions and collaboration",
  handle: "@I365_admin",
  href: "https://t.me/I365_admin",
  hint: "Opens a Telegram chat in a new tab.",
} as const;

/** Hero copy lives beside the links so all page content is edited in one place. */
export const HERO = {
  kicker: "365 Magazine",
  brand: "ARTICLES 365",
  slogan: "Consistency is the key",
  points: [
    "One article every day, for 365 days",
    "A wider view of the world, a page at a time",
    "Use the links below to get the 365 Magazine book",
  ],
} as const;
