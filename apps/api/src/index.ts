import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { auth } from "./routes/auth/index.js"
import { main } from "./routes/main/index.js"
import { logger } from "hono/logger"

export const isDevelopment = process.env.NODE_ENV === "development"

const app = new Hono()

app.use(logger())

// Mount route modules
app.route("/", main)
app.route("/auth", auth)

serve(
  {
    fetch: app.fetch,
    port: 3002,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  },
)

export default app
