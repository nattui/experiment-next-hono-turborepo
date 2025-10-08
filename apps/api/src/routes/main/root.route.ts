import type { Context } from "hono"

export async function routeRoot(context: Context) {
  return context.text("Hello Hono!")
}
