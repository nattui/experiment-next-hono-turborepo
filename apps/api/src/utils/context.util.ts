import type { Context as HonoContext } from "hono"
import { os } from "@orpc/server"

export interface Context {
  honoContext: HonoContext
}

export const base = os.$context<Context>().errors({
  INTERNAL_SERVER_ERROR: {
    message: "An unexpected error occurred. Please try again later.",
  },
})
