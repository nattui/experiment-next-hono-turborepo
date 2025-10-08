import { Hono } from "hono"
import { handlerTest } from "./routes/test"

const app = new Hono()

app.get("/", handlerTest)

export default {
  fetch: app.fetch,
  port: 3002,
}
