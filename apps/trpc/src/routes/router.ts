import { initTRPC } from "@trpc/server"
import type { Context } from "hono"
import { setCookie } from "hono/cookie"
import { db } from "@/db"
import { routeTest } from "@/routes/test.route"
import { routeUsers } from "@/routes/users.route"
import { USER } from "@/schema/user.schema"

export interface AppContext {
  honoContext: Context
}

const t = initTRPC.context<AppContext>().create()

export const router = t.router
export const publicProcedure = t.procedure

export const appRouter = router({
  authVerify: publicProcedure.query(async () => {
    return {}
  }),
  hello: routeTest(),
  test: routeTest(),
  users: routeUsers(),
})

export type AppRouter = typeof appRouter
