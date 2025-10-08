import { Hono } from "hono"
import { loggerMiddleware } from "./middleware/logger.middleware"
import { routeAuth, routeChainedAuth } from "./routes/auth/auth.route"
import { routeChainedMain, routeMain } from "./routes/main/main.route"

const app = new Hono()
app.use(loggerMiddleware())
app.route("/", routeMain)
app.route("/auth", routeAuth)

const routes = new Hono()
  .route("/", routeChainedMain)
  .route("/auth", routeChainedAuth)

export type AppType = typeof routes

export default {
  fetch: app.fetch,
  port: 3002,
}
