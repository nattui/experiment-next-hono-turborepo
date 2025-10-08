import { Hono } from "hono"
import { routeTest } from "./routes/test"

const app = new Hono()

app.route("/", routeTest)

export default {
  fetch: app.fetch,
  port: 3002,
}
