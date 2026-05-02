import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;