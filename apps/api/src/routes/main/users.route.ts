import { type Context, Hono } from "hono"
import { db } from "../../utils/db/db.utils"
import { USER, type User } from "../../utils/db/schema/user.schema"
import { HTTP_STATUS_CODE } from "../../utils/http-status-code"

export const routeUsers = new Hono()

routeUsers.get("/", (context: Context) => handlerUsers(context))

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
