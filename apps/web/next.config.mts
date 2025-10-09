import dotenvx from "@dotenvx/dotenvx"
import type { NextConfig } from "next"

const API_URL = dotenvx.get("NEXT_PUBLIC_API_URL")

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        destination: `${API_URL}/:path*`,
        source: "/api/:path*",
      },
    ]
  },
  typedRoutes: true,
}

export default nextConfig
