import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  // Tailwind CSS is 6.8 KiB gzipped: inlining it removes the render-blocking
  // request that made the stylesheet the only link in the critical chain.
  experimental: {
    inlineCss: true,
    // Turbopack caches builds under <distDir>/dev, and the deployment copies dist
    // wholesale: the cache is never preserved between deploys anyway (Docker build),
    // it only made the deploy heavier and `rm -rf dist` flaky.
    turbopackFileSystemCacheForBuild: false,
  },
};

export default nextConfig;
