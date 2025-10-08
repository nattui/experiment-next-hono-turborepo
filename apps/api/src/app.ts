import { Hono } from "hono"
import { loggerMiddleware } from "./middleware/logger.middleware"
import { routeAuth } from "./routes/auth/auth.route"
import { routeMain } from "./routes/main/main.route"
import type { Account, Profile, User } from "./utils/db/schema/user.schema"

export const isDevelopment = process.env.NODE_ENV === "development"

const app = new Hono()

if (isDevelopment) {
  // Custom logger: show only the completed response line
  app.use(loggerMiddleware())
}

const routes = app.route("/", routeMain).route("/auth", routeAuth)

export type AppType = typeof routes
export type { Account, Profile, User }

export default {
  fetch: app.fetch,
  port: 3002,
}
