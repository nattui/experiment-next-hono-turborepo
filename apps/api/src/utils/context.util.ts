import { os } from "@orpc/server"
import type { Context as HonoContext } from "hono"

export interface Context {
  honoContext: HonoContext
}

export const base = os.$context<Context>()
