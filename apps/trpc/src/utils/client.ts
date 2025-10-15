import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"
import type { AppRouter } from "@/router"

export function getClient(url: string) {
  return createTRPCProxyClient<AppRouter>({
    links: [httpBatchLink({ url })],
  })
}
