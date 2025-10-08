import { type Context, Hono } from "hono"

export const routeRoot = new Hono()

routeRoot.get("/", async (context: Context) => await handlerRoot(context))

export async function handlerRoot(context: Context) {
  return context.text("Hello Hono!")
}
