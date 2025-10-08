import { Hono } from "hono"
import { routeRoot } from "./routes/main/root.route.js"
import { routeTest } from "./routes/main/test.route.js"
import { routeUsers } from "./routes/main/users.route.js"

const app = new Hono()
  .route("/", routeRoot)
  .route("/test", routeTest)
  .route("/users", routeUsers)

export type AppType = typeof app

export default {
  fetch: app.fetch,
  port: 3002,
}
