import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { MotionRoot } from "@/components/articles365/MotionRoot";
import "./globals.css";

/**
 * Self-hosted, weight-pinned, Latin-subset builds of Playfair Display and
 * Manrope (SIL Open Font License). Google's variable originals are ~100 KB for
 * the three faces; pinned to the weights this page renders and cut to Basic
 * Latin plus typographic punctuation they are ~45 KB, all of it preloaded.
 *
 * Covered range: U+0020–007E, NBSP, © · ʻ ʼ – — ‘ ’ ‚ “ ” „ • … ‹ ›
 * Regenerate the files if the copy ever needs a character outside it.
 */
const playfair = localFont({
  src: [
    {
      path: "./fonts/playfair-display-700-latin.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/playfair-display-500-italic-latin.woff2",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
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
  themeColor: "#ab9e8e",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <MotionRoot>{children}</MotionRoot>
      </body>
    </html>
  );
}
