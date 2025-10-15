import { initTRPC } from "@trpc/server"
import { z } from "zod"
import { db } from "@/db"
import { USER } from "@/schema/user.schema"

const t = initTRPC.create()

export const router = t.router
export const publicProcedure = t.procedure

export const appRouter = router({
  hello: publicProcedure.input(z.string().nullish()).query(({ input }) => {
    return `Hello ${input ?? "World"}!`
  }),
  users: publicProcedure.query(async () => {
    const users = await db.select().from(USER)
    return users
  }),
})

export type AppRouter = typeof appRouter
