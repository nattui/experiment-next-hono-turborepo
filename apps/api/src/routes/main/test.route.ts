import { type Context, Hono } from "hono"

export const routeTest = new Hono()

routeTest.get("/", handlerTest)

export function handlerTest(context: Context) {
  return context.json({ data: "Hello Hono!" })
}
