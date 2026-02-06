import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  allowedDevOrigins: ["http://localhost:3000", "http://192.168.29.44:3000"],
};

export default nextConfig;
