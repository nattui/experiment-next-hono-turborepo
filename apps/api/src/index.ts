import { hc } from "hono/client"
import type { AppType } from "./app.js"
import app from "./app.js"

export function getClient(url?: string) {
  return hc<AppType>(url ?? "")
}

export default {
  fetch: app.fetch,
  port: 3002,
}
