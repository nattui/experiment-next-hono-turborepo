import type { AppType } from "api"
import { hc, type InferResponseType } from "hono/client"
import { BASE_URL } from "@/utils/url"

export const client = hc<AppType>(`${BASE_URL.WEB}/api`)

export type Client = typeof client

export type UsersResponseType = InferResponseType<
  typeof client.users.$get
>["users"]
