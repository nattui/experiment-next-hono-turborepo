import type { Context } from "hono"

export async function handlerRoot(context: Context) {
  return context.text("Hello Hono!")
}
