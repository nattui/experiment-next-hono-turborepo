import { Hono } from "hono"
import { handlerRoot } from "./routes/main/root.route.js"

// const app = new Hono()
// app.route("/", routeRoot)
// app.route("/test", routeTest)

const app = new Hono().get("/", handlerRoot)

export default {
  fetch: app.fetch,
  port: 3002,
}
