import { Hono } from "hono"
import { handlerRoot } from "./routes/main/root.route.js"
import { handlerTest } from "./routes/main/test.route.js"

// const app = new Hono()
// app.route("/", routeRoot)
// app.route("/test", routeTest)

const app = new Hono().get("/", handlerRoot).get("/test", handlerTest)

export default {
  fetch: app.fetch,
  port: 3002,
}
