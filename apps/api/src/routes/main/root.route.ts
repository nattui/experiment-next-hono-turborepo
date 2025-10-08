import { type Context, Hono } from "hono"

export const routeRoot = new Hono()

routeRoot.get("/", handlerRoot)

export function handlerRoot(context: Context) {
  return context.text("Hello Hono!")
}
