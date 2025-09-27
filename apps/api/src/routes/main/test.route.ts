import { Hono } from "hono"

const routeTest = new Hono()

routeTest.get("/", (context) => {
  return context.json({ data: "Hello Hono!" })
})

export { routeTest }
