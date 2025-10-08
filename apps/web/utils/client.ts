import type { AppType } from "api"
import { hc, type InferResponseType } from "hono/client"
import { BASE_URL } from "@/utils/url"

export const client = hc<AppType>(`${BASE_URL.WEB}/api`, {
  init: {
    credentials: "include",
  },
})

export type Client = typeof client

export type Users = InferResponseType<typeof client.users.$get>["users"]
