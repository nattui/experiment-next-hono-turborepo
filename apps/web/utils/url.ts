export const isDevelopment = process.env.NODE_ENV === "development"

export const BASE_URL_WEB_HASHMAP = {
  DEVELOPMENT: "http://localhost:3001",
  PRODUCTION: "https://experiment-next-hono-turborepo-web.vercel.app",
}

export const BASE_URL_API_HASHMAP = {
  DEVELOPMENT: "http://localhost:3002",
  PRODUCTION: "https://experiment-next-hono-turborepo-api.vercel.app",
}

export const BASE_URL = {
  API: BASE_URL_API_HASHMAP[isDevelopment ? "DEVELOPMENT" : "PRODUCTION"],
  WEB: BASE_URL_WEB_HASHMAP[isDevelopment ? "DEVELOPMENT" : "PRODUCTION"],
}

export const API = {
  AUTH: {
    SIGNIN: `${BASE_URL.WEB}/api/auth/signin`,
    VERIFY: `${BASE_URL.WEB}/api/auth/verify`,
  },
  TEST: `${BASE_URL.WEB}/api/test`,
}
