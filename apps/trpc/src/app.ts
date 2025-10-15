import { Hono } from "hono"

const app = new Hono()
  .get("/", (c) => c.json({ message: "Hello, world!" }))
  .get("/test", (c) => c.json({ message: "Test" }))

export type AppType = typeof app

export default {
  fetch: app.fetch,
  port: 3003,
}
