import { Hono } from "hono"

const routeTest = new Hono()

routeTest.get("/", (context) => {
  return context.text("Hello Hono!")
})

export { routeTest }
