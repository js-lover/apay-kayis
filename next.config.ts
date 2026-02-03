import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/apay-kayis',
  assetPrefix: '/apay-kayis',
};

export default nextConfig;
