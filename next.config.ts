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
    return [
      // Retired Germany routes
      { source: '/work-in-germany', destination: '/work', permanent: true },
      { source: '/work-in-germany/:path*', destination: '/work', permanent: true },

      // Retired Work and Study overview
      { source: '/work-and-study', destination: '/work', permanent: true },
      { source: '/work-and-study/:path*', destination: '/work', permanent: true },

      // Legacy Work in UAE / Dubai variations
      { source: '/work-in-dubai', destination: '/work/uae', permanent: true },
      { source: '/work-in-dubai/:path*', destination: '/work/uae', permanent: true },
      { source: '/work-in-dubai-uae', destination: '/work/uae', permanent: true },
      { source: '/work-in-dubai-uae/:path*', destination: '/work/uae', permanent: true },
      { source: '/work-in-dubai-and-uae', destination: '/work/uae', permanent: true },
      { source: '/work-in-dubai-and-uae/:path*', destination: '/work/uae', permanent: true },
      { source: '/work-in-uae', destination: '/work/uae', permanent: true },
      { source: '/work-in-uae/:path*', destination: '/work/uae', permanent: true },

      // Legacy South Korea subpages
      { source: '/study-in-south-korea', destination: '/study/south-korea', permanent: true },
      { source: '/study-in-south-korea/:path*', destination: '/study/south-korea', permanent: true },

      // Legacy Other Destinations specific maps
      { source: '/other-destinations/south-korea', destination: '/study/south-korea', permanent: true },
      { source: '/other-destinations/singapore', destination: '/study/singapore', permanent: true },
      { source: '/other-destinations/luxembourg', destination: '/study/luxembourg', permanent: true },
      { source: '/other-destinations/japan', destination: '/study/japan', permanent: true },
      { source: '/other-destinations/taiwan', destination: '/study/taiwan', permanent: true },
      { source: '/other-destinations/uae', destination: '/study/uae', permanent: true },
      { source: '/other-destinations/europe', destination: '/study/europe', permanent: true },
      { source: '/other-destinations/united-states', destination: '/study/usa', permanent: true },
      { source: '/other-destinations/usa', destination: '/study/usa', permanent: true },
      { source: '/other-destinations/canada', destination: '/study/canada', permanent: true },
      { source: '/other-destinations/united-kingdom', destination: '/study/uk', permanent: true },
      { source: '/other-destinations/uk', destination: '/study/uk', permanent: true },
      { source: '/other-destinations/australia', destination: '/study/australia', permanent: true },
      { source: '/other-destinations', destination: '/study', permanent: true },
      { source: '/other-destinations/:path*', destination: '/study', permanent: true },
    ];
  },
};

export default nextConfig;
