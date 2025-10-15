import type { NextConfig } from "next"

const API_URL = process.env.NEXT_PUBLIC_API_URL
const TRPC_URL = process.env.NEXT_PUBLIC_TRPC_URL

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        destination: `${API_URL}/:path*`,
        source: "/api/:path*",
      },
      {
        destination: `${TRPC_URL}/:path*`,
        source: "/trpc/:path*",
      },
    ]
  },
  typedRoutes: true,
}

export default nextConfig
