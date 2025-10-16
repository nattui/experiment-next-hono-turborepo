import { db, USER } from "db"
import { publicProcedure } from "@/routes/router"

export function routeUsers() {
  return publicProcedure.query(async () => {
    const users = await db.select().from(USER)
    return users
  })
}
