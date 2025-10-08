import { Hono } from "hono"
import { loggerMiddleware } from "./middleware/logger.middleware"
import { routesAuth } from "./routes/auth/auth.route"
import { routeMain } from "./routes/main/main.route"
import type { Account, Profile, User } from "./utils/db/schema/user.schema"

const app = new Hono()
  .use(loggerMiddleware())
  .route("/", routeMain)
  .route("/auth", routesAuth)

export type AppType = typeof app

export default {
  fetch: app.fetch,
  port: 3002,
}

export type { Account, Profile, User }
