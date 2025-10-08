import type { Context } from "hono"

export async function routeTest(context: Context) {
  return context.json({ data: "Hello Hono!" })
}
