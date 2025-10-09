import { hc } from "hono/client"
import type { AppType } from "../app.js"

export type Client = ReturnType<typeof getClient>

export function getClient(url: string) {
  return hc<AppType>(url)
}
