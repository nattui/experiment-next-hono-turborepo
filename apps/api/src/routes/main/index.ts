import { Hono } from "hono"

const main = new Hono()

main.get("/", (context) => {
  return context.text("Hello Hono!")
})

main.get("/test", (context) => {
  return context.json({ data: "Hello Hono!" })
})

export { main }
