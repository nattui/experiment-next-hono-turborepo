import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"
import type { AppRouter } from "trpc"
import { BASE_URL } from "@/utils/url"

export const client = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: `${BASE_URL.WEB}/trpc` })],
})
