import { Hono } from "hono"
import { routeRoot } from "./routes/main/root.route.js"

const app = new Hono()

app.route("/", routeRoot)

export default {
  fetch: app.fetch,
  port: 3002,
}
