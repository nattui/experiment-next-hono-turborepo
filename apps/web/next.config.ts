import { BASE_URL } from "@/utils/url"
import type { NextConfig } from "next"

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
