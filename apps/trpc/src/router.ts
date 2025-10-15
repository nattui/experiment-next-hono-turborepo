import { initTRPC } from "@trpc/server"
import type { Context } from "hono"
import { setCookie } from "hono/cookie"
import { db } from "@/db"
import { USER } from "@/schema/user.schema"
import { getSession } from "@/utils/session.util"

export interface AppContext {
  honoContext: Context
}

const t = initTRPC.context<AppContext>().create()

export const router = t.router
export const publicProcedure = t.procedure

export const middlewareAuthVerify = publicProcedure.use(async (options) => {
  // console.log(":::: cookies:", options.ctx.honoContext.req.raw.headers)

  const session = getSession(options.ctx.honoContext)

  console.log("\n:::: SESSION:", session, "\n")

  // if (!session) {
  //   throw new TRPCError({ code: "UNAUTHORIZED" })
  // }

  // await verifySession(session)

  return options.next()
})

export const appRouter = router({
  authVerify: publicProcedure.query(async () => {
    return {}
  }),
  exampleSetCookie: publicProcedure.query(async (options) => {
    // set cookie
    setCookie(options.ctx.honoContext, "session", "1234567890", {
      httpOnly: true,
      path: "/",
      priority: "medium",
      sameSite: "lax",
      secure: true,
    })
    return "Hello Hono!"
  }),
  hello: publicProcedure.query(() => {
    return "Hello Hono!"
  }),
  test: middlewareAuthVerify.query(async () => {
    return "Hello Hono!"
  }),
  users: middlewareAuthVerify.query(async () => {
    const users = await db.select().from(USER)
    return users
  }),
})

export type AppRouter = typeof appRouter
