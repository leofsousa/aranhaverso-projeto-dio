import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_URL: "https://690a34181a446bb9cc21c572.mockapi.io",
    DOMAIN_ORIGIN: "http://localhost:3000"
  },
  reactCompiler: true,
};

export default nextConfig;
