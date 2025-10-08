import { Hono } from "hono"
import { routeTest } from "./routes/main/test.route"

const app = new Hono()

app.route("/", routeTest)

export default {
  fetch: app.fetch,
  port: 3002,
}
