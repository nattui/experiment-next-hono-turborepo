import { initTRPC } from "@trpc/server"
import type { Context } from "hono"
import { routeAuthVerify } from "@/routes/auth-verify.route"
import { routeTest } from "@/routes/test.route"
import { routeUsers } from "@/routes/users.route"

export interface AppContext {
  honoContext: Context
}

const t = initTRPC.context<AppContext>().create()

export const router = t.router
export const publicProcedure = t.procedure

export const appRouter = router({
  authVerify: routeAuthVerify(),
  hello: routeTest(),
  test: routeTest(),
  users: routeUsers(),
})

export type AppRouter = typeof appRouter
