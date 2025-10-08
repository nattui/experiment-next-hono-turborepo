import type { Context } from "hono"

export function handlerRoot(context: Context) {
  return context.text("Hello Hono!")
}
