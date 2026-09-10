import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { MotionRoot } from "@/components/articles365/MotionRoot";
import "./globals.css";

/**
 * Self-hosted, Latin-subset builds of DM Serif Display and Manrope (SIL Open
 * Font License), cut to Basic Latin plus typographic punctuation: ~37 KB for
 * the three faces instead of ~90 KB, all of it preloaded.
 *
 * Covered range: U+0020–007E, NBSP, © · ʻ ʼ – — ‘ ’ ‚ “ ” „ • … ‹ ›
 * Regenerate the files if the copy ever needs a character outside it.
 */
const dmSerif = localFont({
  src: [
    { path: "./fonts/dm-serif-display-latin.woff2", weight: "400", style: "normal" },
    { path: "./fonts/dm-serif-display-latin-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-dm-serif",
  display: "swap",
  adjustFontFallback: "Times New Roman",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const manrope = localFont({
  src: "./fonts/manrope-400-600-latin.woff2",
  weight: "400 600",
  style: "normal",
  variable: "--font-manrope",
  display: "swap",
  adjustFontFallback: "Arial",
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://articles365.uz";
const description =
  "One article every day for 365 days. Articles 365 — links to the instruction video, article audio, the Telegram channel and Instagram.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Articles 365 — Consistency is the key",
  description,
  keywords: [
    "Articles 365",
    "365 Magazine",
    "daily reading",
    "articles",
    "reading habit",
    "Telegram channel",
  ],
  applicationName: "Articles 365",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Articles 365",
    title: "Articles 365 — Consistency is the key",
    description,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Articles 365 — Consistency is the key",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles 365 — Consistency is the key",
    description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#e7e1d8",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <MotionRoot>{children}</MotionRoot>
      </body>
    </html>
  );
}
