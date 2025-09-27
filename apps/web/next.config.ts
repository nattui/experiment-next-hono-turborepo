import type { NextConfig } from "next"
import { BASE_URL } from "@/utils/url"

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        destination: `${BASE_URL.API}/:path*`,
        source: "/api/:path*",
      },
    ]
  },
  typedRoutes: true,
}

export default nextConfig
