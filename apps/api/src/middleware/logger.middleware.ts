import { logger } from "hono/logger"
import type { MiddlewareHandler } from "hono/types"

const isDevelopment = process.env.NODE_ENV === "development"

export function loggerMiddleware(): MiddlewareHandler {
  if (!isDevelopment) {
    return async (_, next) => await next()
  }

  return logger((string, ...rest) => {
    if (string.startsWith("-->")) {
      console.log(string.replace(/^-->\s*/, ""), ...rest)
    }
  })
}
