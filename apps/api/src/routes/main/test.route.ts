import type { Context } from "hono"

export function handlerTest(context: Context) {
  return context.json({ data: "Hello Hono!" })
}
