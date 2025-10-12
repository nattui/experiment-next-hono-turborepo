import { db, USER, type User } from "db"
import type { Context } from "hono"
import { HTTP_STATUS_CODE } from "@/utils/http-status-code"

export async function handlerUsers(context: Context) {
  try {
    const users: User[] = await db.select().from(USER)
    return context.json({ users })
  } catch (error) {
    console.error(error)
    return context.json(
      { users: [] },
      HTTP_STATUS_CODE["500_INTERNAL_SERVER_ERROR"],
    )
  }
}
