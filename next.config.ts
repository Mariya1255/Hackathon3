import { Images } from "lucide-react";
import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  Images : {
    domains : ['cdn.sanity.io'],
  },

  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
