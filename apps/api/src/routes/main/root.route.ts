import { type Context, Hono } from "hono"

export const routeRoot = new Hono()

routeRoot.get("/", handlerRoot)

function handlerRoot(context: Context) {
  return context.json({ data: "Hello Hono!" })
}
