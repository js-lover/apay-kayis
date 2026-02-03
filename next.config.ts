import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/apay-kayis',
  trailingSlash: true,
};

export default nextConfig;
