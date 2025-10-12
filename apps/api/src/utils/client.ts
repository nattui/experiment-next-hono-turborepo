import { hc } from "hono/client"
import type { AppType } from "@/app"

export function getClient(url?: string) {
  return hc<AppType>(url ?? "")
}
