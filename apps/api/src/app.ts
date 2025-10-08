import { Hono } from "hono"
import { handlerRoot } from "./routes/main/root.route"

const app = new Hono()

app.get("/", handlerRoot)

export default {
  fetch: app.fetch,
  port: 3002,
}
