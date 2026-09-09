import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first: the gold-on-transparent mark compresses far better than PNG.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
