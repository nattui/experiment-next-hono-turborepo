import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"
import type { AppRouter } from "api"
import { BASE_URL } from "@/utils/url"

export const client = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: `${BASE_URL.WEB}/api` })],
})
