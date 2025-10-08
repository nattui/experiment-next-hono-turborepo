import { Hono } from "hono"

export const routeTest = new Hono()

routeTest.get("/", (context) => {
  return context.text("Hello Hono!")
})
