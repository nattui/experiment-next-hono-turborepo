import { logger } from "hono/logger"
import type { MiddlewareHandler } from "hono/types"

export function loggerMiddleware(): MiddlewareHandler {
  return logger((str, ...rest) => {
    if (str.startsWith("-->")) {
      console.log(str.replace(/^-->\s*/, ""), ...rest)
    }
  })
}
