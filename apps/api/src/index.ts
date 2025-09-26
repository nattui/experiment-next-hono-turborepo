import { Hono } from "hono"
import { logger } from "hono/logger"
import { routeAuth } from "./routes/auth"
import { routeMain } from "./routes/main"

export const isDevelopment = process.env.NODE_ENV === "development"

const app = new Hono()

app.use(logger())

app.route("/", routeMain)
app.route("/auth", routeAuth)

export default {
  fetch: app.fetch,
  port: 3002,
}
