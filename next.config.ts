import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["pino", "pino-pretty"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Match any domain
      },
      {
        protocol: 'http',
        hostname: '**', // Match any domain over HTTP
      },
    ],
  },
};

export default nextConfig;
