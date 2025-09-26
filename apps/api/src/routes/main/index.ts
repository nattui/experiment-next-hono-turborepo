import { Hono } from "hono"

const routeMain = new Hono()

routeMain.get("/", (context) => {
  return context.text("Hello Hono!")
})

routeMain.get("/test", (context) => {
  return context.json({ data: "Hello Hono!" })
})

export { routeMain }
