import { type Context, Hono } from "hono"

export const routeTest = new Hono()

routeTest.get("/", (context: Context) => handlerTest(context))

export async function handlerTest(context: Context) {
  return context.json({ data: "Hello Hono!" })
}
