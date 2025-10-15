import { initTRPC } from "@trpc/server"
import type { Context } from "hono"
import { db } from "@/db"
import { USER } from "@/schema/user.schema"

const t = initTRPC.context<Context>().create()

export const router = t.router
export const publicProcedure = t.procedure

export const procedureAuthVerify = publicProcedure.use(async (opts) => {
  console.log(":::: MEOW:", opts.ctx)
  return opts.next()
})

export const appRouter = router({
  authVerify: publicProcedure.query(async () => {
    return {}
  }),
  hello: publicProcedure.query(() => {
    return "Hello Hono!"
  }),
  test: procedureAuthVerify.query(async () => {
    return "Hello Hono!"
  }),
  users: publicProcedure.query(async () => {
    const users = await db.select().from(USER)
    return users
  }),
})

export type AppRouter = typeof appRouter
