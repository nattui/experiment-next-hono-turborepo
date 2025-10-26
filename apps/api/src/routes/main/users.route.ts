import { z } from "zod"
import { db } from "@/db"
import { schemaSelectUser, USER } from "@/schema/user.schema"
import { base } from "@/utils/context.util"

export const users = base
  .route({
    method: "GET",
    summary: "Get all users",
    tags: ["Main"],
  })
  .output(z.array(schemaSelectUser))
  .handler(async () => {
    const users = await db.select().from(USER)
    return users
  })
