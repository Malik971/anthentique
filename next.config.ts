import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Export statique : le site est livré sur un hébergement mutualisé OVH, sans serveur Node.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
