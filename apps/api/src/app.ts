import { Hono } from "hono"
import { routeRoot } from "./routes/main/root.route.js"
import { routeTest } from "./routes/main/test.route.js"

const app = new Hono()

app.route("/", routeRoot)
app.route("/test", routeTest)

export default {
  fetch: app.fetch,
  port: 3002,
}
