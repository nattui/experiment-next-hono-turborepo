import { Hono } from "hono"
import { auth } from "@/routes/auth"
import { main } from "@/routes/main"
import { logger } from "hono/logger"

export const isDevelopment = process.env.NODE_ENV === "development"

const app = new Hono()

app.use(logger())

// Mount route modules
app.route("/", main)
app.route("/auth", auth)

export default {
  port: 3002,
  fetch: app.fetch,
}
