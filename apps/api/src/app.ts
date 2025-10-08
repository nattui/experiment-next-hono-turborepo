import { Hono } from "hono"
import { handlerTest } from "./routes/test.js"

const app = new Hono()

app.get("/", handlerTest)

export default {
  fetch: app.fetch,
  port: 3002,
}
