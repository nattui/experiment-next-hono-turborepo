import type { AppType } from "api"
import { hc } from "hono/client"

export const client = hc<AppType>("/api", {
  init: {
    credentials: "include",
  },
})

export type ApiClient = typeof client
