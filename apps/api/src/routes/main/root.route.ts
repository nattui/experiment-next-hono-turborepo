import { Hono } from "hono"

const routeRoot = new Hono()

routeRoot.get("/", (context) => {
  return context.text("Hello Hono!")
})

export { routeRoot }
