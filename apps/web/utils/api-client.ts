import type { AppType } from "api"
import { hc } from "hono/client"
import { BASE_URL } from "@/utils/url"

export const client = hc<AppType>(BASE_URL.API, {
  init: {
    credentials: "include",
  },
})

export type ApiClient = typeof client
