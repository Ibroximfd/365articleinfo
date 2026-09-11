# Articles 365 — link in bio

A single-page link hub for the **Articles 365** brand, reached by scanning the QR
code on the back of the *365 Magazine* book. A bento in Night, Jet, Eggshell, Saffron and Satin
gold — a full-width masthead, four destinations and a contact bar — no dark mode.

Three palettes live in this repo's history. `main` is the current one; the
earlier two are pinned as tags — `v1-warm-neutral` (also the `warm-neutral`
branch) and `v2-gold-black`. `git switch warm-neutral` or
`git checkout v2-gold-black` brings either back.

> **Consistency is the key** — one article every day, for 365 days.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript (strict)
- Tailwind CSS v4 — design tokens live in `app/globals.css` under `@theme`
- DM Serif Display + Manrope, self-hosted and subset (see **Assets**)
- Motion (Framer Motion) — `LazyMotion` + `domAnimation`, cards only
- lucide-react for icons; the Telegram and Instagram glyphs are hand-drawn

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

Set `NEXT_PUBLIC_SITE_URL` in the deployment environment so the canonical URL and
the Open Graph image resolve absolutely. It falls back to `https://articles365.uz`.

## Editing content

Everything the page says lives in **`lib/links.ts`** — the four cards (`LINKS`),
the contact line (`CONTACT`) and the hero copy (`HERO`). Add, reorder or reword
entries there and the UI follows, including the count in the section header;
nothing else needs touching.

```ts
{
  id: "telegram-channel",
  title: "Telegram channel",
  description: "Daily articles and announcements at @articles365.",
  href: "https://t.me/articles365",
  description: "Daily articles and announcements at @articles365.",  // lg and up
  caption: "@articles365",  // the phone's 2×2 tiles, where the description won't fit
  icon: "telegram",         // "video" | "audio" | "telegram" | "instagram"
  shade: "sand",            // "paper" | "linen" | "sand" | "grey" — the tonal step
  platform: "telegram",
  badge: "telegram",        // optional corner stamp, for generic chip icons
  hint: "Opens on Telegram in a new tab.",  // visually hidden, for screen readers
}
```

## Structure

```
app/
  layout.tsx        fonts, metadata, Open Graph, viewport
  page.tsx          the bento grid
  globals.css       design tokens + the CSS entrance/decor animations
  icon.png          favicon (96px, Off White ground so it reads in a tab)
  fonts/            subset woff2 files
components/articles365/
  HeroTile.tsx      the centred emblem + wordmark lockup, Follow strip (server)
  ScrollCue.tsx     the animated chevrons pointing at the tiles      (server)
  LinksSection.tsx  the four tiles from LINKS — 2-up, 4-up from lg   (server)
  LinkTile.tsx      one tile; hover/press springs                    (client)
  ContactBar.tsx    the @I365_admin bar                              (server)
  SocialIcons.tsx   icon map, Telegram/Instagram glyphs, platform badge
  Footer.tsx        the credit, phones only (it rides in the bar from lg)
  MotionRoot.tsx    LazyMotion + reduced-motion config
lib/
  links.ts          all page content
  motion.ts         easing curve + the `riseDelay` stagger helper
public/
  logo-mark.png     the 365 emblem, transparent background
  logo-articles365.png  full lockup incl. the wordmark, transparent
  og.png            1200×630 social preview
```

## The palette

Night, Jet, Eggshell, Saffron, Satin gold.

| Token | Hex | Role |
|---|---|---|
| `ground` · `eggshell` | `#F2ECDD` | the page; wordmark and labels on the Night cards |
| `night` | `#0B0B0B` | the masthead card, the contact bar, chips, pills; titles on gold |
| `jet` | `#333533` | body copy on gold; the light end of the chip gradient |
| `saffron` | `#F5CB5C` | everything gold **on Night** — emblem, glyphs, kicker, slogan, handle |
| `gold` | `#CD9C20` | Satin gold: the cue, rules and hairlines on Eggshell |
| `gold-1` … `gold-4` | `#F5CB5C` `#EBBF4A` `#DCAF36` `#CD9C20` | the four tile steps, Saffron to Satin gold |

**The dark tones bracket the page.** Masthead and contact bar are Night cards;
between them the four tiles step Saffron → Satin gold, one tonal ladder rather
than four fills, so the row reads as a set (and runs diagonally across the
phone's 2×2). Saffron appears only on Night — the logo's own yellow-on-black —
where it clears 12.6:1.

**Gold never sits on gold, and small gold text never sits on Eggshell.** Titles
and copy on the tiles are Night and Jet (Jet is 4.9:1 even on the deepest gold).
On Eggshell, Satin gold is only 2.1:1, so there it is decoration — the cue, the
rules — never a word. Tile shadows carry the gold's own dark; the Night cards
cast true black.

## Design notes

**Night is the frame, not the fill.** It holds the two cards and the chips; the
gold ladder and the Eggshell ground carry the light between them.

**The page is one funnel.** A centred masthead → `Follow for more` closing the
tile → an animated chevron → the tiles, each carrying a `Click here` pill. The audience
arrives from a QR code on a printed book, so the affordance is spelled out rather
than implied; both cues are `aria-hidden`, since the links are already named.

**Both loops are deliberately cheap.** Every forever-running animation on the page
— the chevrons, the four pill arrows, the floating emblem — moves only
`transform` and `opacity`, on small elements, so the work
lands on the compositor and never triggers layout or paint. Adding the cues left
mobile at 96 and blocking time at 50–90 ms. `prefers-reduced-motion` stops all of
them.

**Contact is a bar, not a fifth tile.** The tiles are the book's media; the handle
is a person. It gets its own full-width bar under them, with a round chip where
the tiles' are square, so the eye files it differently. The credit rides in that
bar from `lg` and closes the page on phones.

**Entrances are CSS, not JavaScript.** `.rise` / `.rise-slide` / `.rise-scale` in
`globals.css`, staggered with the `--rise-delay` custom property. Two reasons:

1. Motion's `initial="hidden"` renders `opacity: 0` into the SSR HTML, so nothing
   is visible until hydration finishes — on a throttled phone that measured as
   2.6 s of LCP render delay for a page whose content had already arrived.
2. A CSS *opacity* fade runs on the compositor and never emits a new paint, so
   text starting at `opacity: 0` is disqualified as an LCP candidate for good —
   Chrome reported no LCP at all. The hero copy therefore uses `.rise-slide`,
   which is transform-only and paints opaque immediately.

Motion is kept for what it is genuinely better at: the spring-damped hover and
press on the cards.

**`prefers-reduced-motion`** is honoured twice over: the CSS block collapses every
animation, and `MotionConfig reducedMotion="user"` drops Motion's transforms.

## Assets

`public/logo-mark.png` (the emblem) and `logo-articles365.png` (the full lockup)
come from the supplied cut-out `logo.png`, which has a clean alpha channel. That
alpha is kept exactly; only the RGB is replaced, with one flat `brass-mark`, so
the mark sits in the palette instead of the artwork's saturated yellow. Rerun
`design/` assets from the same source if the artwork is ever revised.

The fonts in `app/fonts/` are DM Serif Display and Manrope (SIL OFL), subset to
Basic Latin plus typographic punctuation:

```
U+0020–007E, U+00A0, U+00A9, U+00B7, U+02BB, U+02BC, U+2013, U+2014,
U+2018–201A, U+201C–201E, U+2022, U+2026, U+2039, U+203A
```

That is 37 KB for three faces instead of ~90 KB. **If the copy ever needs a
character outside that range it will fall back to Georgia/Arial** — regenerate the
subsets with `pyftsubset` if so.

## Measured

Lighthouse 12 against `next start`; mobile is the median of three runs.

| | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| Desktop | 100 | 100 | 100 | 100 |
| Mobile | 96 | 100 | 100 | 100 |

CLS 0 on both, no colour-contrast failures, no horizontal overflow at any width.

## Responsive

The masthead lockup stacks on phones and tablets and goes side by side from `lg`,
centred at every size. The four link tiles are 2-up below `lg` and 4-up above it,
with their own type and chip step at `lg` where the tiles are narrowest; the grid
uses `auto-rows-fr` and the anchors `h-full`, so a long title on one tile never
leaves its neighbours short or the `Click here` pills out of line. Checked at 390, 414, 768, 1024,
1280, 1440 and 1920 px, with no horizontal overflow at any of them. Tile hit areas
are ~190 px tall, far over the 44 px touch-target minimum.
