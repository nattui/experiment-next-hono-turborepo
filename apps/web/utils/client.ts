import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"
import { getClient } from "api"
import type { AppRouter } from "trpc"
import { BASE_URL } from "@/utils/url"

export const client = getClient(`${BASE_URL.WEB}/api`)

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: `${BASE_URL.WEB}/trpc` })],
})
