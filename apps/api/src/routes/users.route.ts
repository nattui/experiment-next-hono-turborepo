import { db } from "@/db"
import { base } from "@/routes/context"
import { USER } from "@/schema/user.schema"

export const users = base
  .route({
    method: "GET",
  })
  .handler(async () => {
    const users = await db.select().from(USER)
    return users
  })
