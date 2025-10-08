import { type Context, Hono } from "hono"

export const routeRoot = new Hono()

routeRoot.get("/", (context: Context) => handlerRoot(context))

export async function handlerRoot(context: Context) {
  return context.text("Hello Hono!")
}
