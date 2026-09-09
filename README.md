# Articles 365 — link in bio

A single-page link hub for the **Articles 365** brand, reached by scanning the QR
code on the back of the *365 Magazine* book. Muted Tan ground, an Off White plate,
four destination cards and a contact line, no dark mode.

> **Consistency is the key** — one article every day, for 365 days.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript (strict)
- Tailwind CSS v4 — design tokens live in `app/globals.css` under `@theme`
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
  icon: "telegram",        // "video" | "audio" | "telegram" | "instagram"
  platform: "telegram",    //   → resolved by LINK_ICONS in SocialIcons.tsx
  badge: "telegram",       // optional corner stamp, for generic chip icons
  hint: "Opens on Telegram in a new tab.",  // visually hidden, for screen readers
}
```

## Structure

```
app/
  layout.tsx        fonts, metadata, Open Graph, viewport
  page.tsx          the plate and the hero / links / contact grid
  globals.css       design tokens + the CSS entrance/decor animations
  icon.png          favicon (96px, Off White ground so it reads in a tab)
  fonts/            subset, weight-pinned woff2 files
components/articles365/
  Hero.tsx          emblem, kicker, wordmark, slogan, three points   (server)
  LinksSection.tsx  renders the cards from LINKS, with the count     (server)
  LinkCard.tsx      one card; hover/press springs                    (client)
  Contact.tsx       the @I365_admin signature line                   (server)
  SocialIcons.tsx   icon map, Telegram/Instagram glyphs, platform badge
  BackgroundDecor.tsx  tan ground, brass glow, warm-grey light, linen grain
  Footer.tsx
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

Five colours, applied as three surfaces plus ink and brass.

| Token | Hex | Role |
|---|---|---|
| `ground` | `#AB9E8E` | **Muted Tan** — the page behind everything |
| `off-white` | `#F6F4F2` | the plate; cards are a step whiter on top of it |
| `warm-grey` | `#D3C9BD` | hairline borders, rules, the light in the ground |
| `tan-deep` | `#8C8070` | the vignette at the foot of the ground |
| `brass` | `#B4986B` | the glow in the ground; accents and hover on the plate |
| `brass-mark` | `#9C7F49` | the logo, deepened to hold against paper |
| `brass-deep` | `#7F6539` | brass **text** — 5.0:1 on Off White |
| `ink` | `#423E3B` | headings and card titles — 9.7:1 |
| `ink-soft` | `#5F5952` | body copy — 6.3:1 |
| `ink-faint` | `#6F675D` | labels, footer, the arrow — 4.7:1 |

**Why tan and not brass for the ground.** Antique Brass is the accent — the logo,
the slogan, the rules, the hover state. Set it as the ground and the accents have
nothing to be accents against, and the whole page goes gold. Muted Tan is the
neutral in the set: it lets Off White read as paper and brass read as metal, the
same logic as the palette's own photograph (tan wall, off-white bedding, brass
detail). Brass still shapes the ground as the drifting glow in the top corner.

**No text ever sits on the tan.** Dark Charcoal only reaches 4.0:1 straight on
Muted Tan, so the plate is structural, not decorative — it appears at every size,
with a 12 px tan frame on phones.

Brass appears at three depths on purpose. The palette brass is decorative only —
at 2.5:1 on Off White it can carry a rule or a glow but never a word — so text
uses `brass-deep` and the logo uses `brass-mark`, both the same hue (≈38°) with
enough weight to read. Shadows are tinted with Dark Charcoal, never neutral
black: a grey shadow under a warm card is the tell that a palette was skinned on
rather than applied.

## Design notes

**Three surfaces.** Ground → plate → card, each a step lighter, is what makes the
page read as a made object instead of text on a background. The dark charcoal
icon chips are the one place the page goes dark, and the brass glyphs on them are
the palette's strongest pairing.

**Contact is a signature, not a fifth card.** The cards are the book's media; the
handle is a person. It is set under the hero as a small-caps label, the handle in
brass and a round charcoal chip — round, where the card chips are square, so the
eye files it differently. On phones it closes the page after the links; from `lg`
it sits under the hero, with the links column centred against the pair.

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

**The decorative blobs translate but never scale** — rescaling a layer that large
forces a raster pass every frame, which cost ~3 Lighthouse points and 100 ms of
blocking time on mobile.

**`prefers-reduced-motion`** is honoured twice over: the CSS block collapses every
animation, and `MotionConfig reducedMotion="user"` drops Motion's transforms.

## Assets

`public/logo-mark.png` and `logo-articles365.png` were derived from the original
black-background JPEG. The artwork is glow-on-black, i.e. already premultiplied
against black, so the alpha channel is the brightest colour channel; the RGB is
then repainted as flat `brass-mark` to keep JPEG chroma noise out of the edges.

The emblem is deliberately small (104–144 px). The source ring carries a rough,
hand-drawn edge that reads as a letterpress stamp at that size and as noise if
scaled up — and the Playfair wordmark, not the emblem, is what should carry the
brand at display size.

The fonts in `app/fonts/` are Playfair Display and Manrope (SIL OFL), pinned to the
weights this page renders and subset to Basic Latin plus typographic punctuation:

```
U+0020–007E, U+00A0, U+00A9, U+00B7, U+02BB, U+02BC, U+2013, U+2014,
U+2018–201A, U+201C–201E, U+2022, U+2026, U+2039, U+203A
```

That is 45 KB for three faces instead of ~100 KB. **If the copy ever needs a
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

One capped column up to `lg` (phones and tablets, the QR audience), a two-column
editorial spread from `lg`, and larger type and spacing steps at `2xl`. Checked at
390, 414, 768, 1024, 1280, 1440 and 1920 px. Card hit areas are ~110 px tall,
comfortably over the 44 px touch-target minimum.
