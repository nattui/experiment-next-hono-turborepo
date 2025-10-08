import type { AppType } from "api"
import { hc, type InferResponseType } from "hono/client"

export const client = hc<AppType>("/api", {
  init: {
    credentials: "include",
  },
})

export type Client = typeof client

export type Users = InferResponseType<typeof client.users.$get>["users"]
