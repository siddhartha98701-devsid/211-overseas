import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    // Old / alternative spellings of the UAE page after the "Work in UAE" rename.
    return ["/work-in-dubai", "/work-in-dubai-uae", "/work-in-dubai-and-uae"].flatMap((source) => [
      { source, destination: "/work-in-uae", permanent: true },
      { source: `${source}/:path*`, destination: "/work-in-uae/:path*", permanent: true },
    ]);
  },
};

export default nextConfig;
