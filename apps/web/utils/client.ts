import type { AppType } from "api"
import { hc } from "hono/client"
import { BASE_URL } from "@/utils/url"

export const client = hc<AppType>(`${BASE_URL.WEB}/api`)

export type Client = typeof client
