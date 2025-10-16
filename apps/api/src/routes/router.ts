import { initTRPC } from "@trpc/server"
import type { Context } from "hono"
import { routeAuthSigninCredential } from "@/routes/auth-signin-credential.route"
import { routeAuthSignoutCredential } from "@/routes/auth-signout-credential.route"
import { routeAuthSignupCredential } from "@/routes/auth-signup-credential.route"
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
  authSigninCredential: routeAuthSigninCredential(),
  authSignoutCredential: routeAuthSignoutCredential(),
  authSignupCredential: routeAuthSignupCredential(),
  authVerify: routeAuthVerify(),
  hello: routeTest(),
  test: routeTest(),
  users: routeUsers(),
})

export type AppRouter = typeof appRouter
