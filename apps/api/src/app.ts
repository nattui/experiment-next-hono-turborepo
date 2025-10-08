import { Hono } from "hono"
import { handlerRoot } from "./routes/main/root.route.js"
import { handlerTest } from "./routes/main/test.route.js"
import { handlerUsers } from "./routes/main/users.route.js"

const app = new Hono()
  .get("/", handlerRoot)
  .get("/test", handlerTest)
  .get("/users", handlerUsers)

export type AppType = typeof app

export default {
  fetch: app.fetch,
  port: 3002,
}
