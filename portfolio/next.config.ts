import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,   // catches bugs before production
  compress: true,          // gzip compression on responses
  poweredByHeader: false,  // removes "X-Powered-By: Next.js" header (minor security)
};

export default nextConfig;