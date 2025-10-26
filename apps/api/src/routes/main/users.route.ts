import { z } from "zod"
import { db } from "@/db"
import { USER } from "@/schema/user.schema"
import { base } from "@/utils/context.util"

const userSchema = z.object({
  createdAt: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  id: z.number(),
  name: z.string(),
  role: z.enum(["admin", "user"]),
  updatedAt: z.string(),
})

export const users = base
  .route({
    method: "GET",
    summary: "Get all users",
    tags: ["Main"],
  })
  .output(z.array(userSchema))
  .handler(async () => {
    const users = await db.select().from(USER)
    return users
  })
