import { Hono } from "hono"
import { logger } from "hono/logger"
import { routeAuth } from "./routes/auth/auth.route"
import { routeMain } from "./routes/main/main.route"

export const isDevelopment = process.env.NODE_ENV === "development"

const app = new Hono()

app.use(logger())

app.route("/", routeMain)
app.route("/auth", routeAuth)

export default {
  fetch: app.fetch,
  port: 3002,
}
