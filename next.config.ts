import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
      },
    ],
    domains: ["aceternity.com", "images.unsplash.com", "assets.aceternity.com", "plus.unsplash.com", "res.cloudinary.com"],
  },
};

export default nextConfig;