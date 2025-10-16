import { createTRPCProxyClient, httpBatchLink, loggerLink } from "@trpc/client"
import type { AppRouter } from "api"
import { BASE_URL } from "@/utils/url"

export const client = createTRPCProxyClient<AppRouter>({
  links: [
    loggerLink({
      enabled: () =>
        process.env.NODE_ENV === "development" && typeof window !== "undefined",
    }),
    httpBatchLink({ url: `${BASE_URL.WEB}/api` }),
  ],
})
