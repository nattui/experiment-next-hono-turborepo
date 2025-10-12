import { Hono } from "hono"
import { hc } from "hono/client"
import { loggerMiddleware } from "./middleware/logger.middleware"
import { routeAuth } from "./routes/auth/auth.route"
import { routeMain } from "./routes/main/main.route"

const app = new Hono()
  .use(loggerMiddleware())
  .route("/", routeMain)
  .route("/auth", routeAuth)

export type AppType = typeof app

export function getClient(url?: string) {
  return hc<AppType>(url ?? "")
}

export default {
  fetch: app.fetch,
  port: 3002,
}
