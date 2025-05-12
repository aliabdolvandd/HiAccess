import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "divarrr.liara.run",
      },
    ],
  },
};

export default nextConfig;
