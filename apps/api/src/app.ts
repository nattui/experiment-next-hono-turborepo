import { Hono } from "hono"
import { loggerMiddleware } from "@/middleware/logger.middleware"
import { routeAuth } from "@/routes/auth/auth.route"
import { routeMain } from "@/routes/main/main.route"

const app = new Hono()
  .use(loggerMiddleware())
  .route("/", routeMain)
  .route("/auth", routeAuth)

export type AppType = typeof app

export default {
  fetch: app.fetch,
  port: 3002,
}
