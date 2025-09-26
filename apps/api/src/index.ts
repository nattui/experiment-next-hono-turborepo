import { Hono } from "hono"
import { logger } from "hono/logger"
import { auth } from "./routes/auth"
import { main } from "./routes/main"

export const isDevelopment = process.env.NODE_ENV === "development"

const app = new Hono()

app.use(logger())

app.route("/", main)
app.route("/auth", auth)

export default {
  fetch: app.fetch,
  port: 3002,
}
