import type { Context, Next } from "hono"
import { getSession, verifySession } from "../utils/auth.util"

export async function verifyMiddleware(context: Context, next: Next) {
  try {
    const session = getSession(context)

    if (!session) {
      return context.json({}, 401)
    }

    await verifySession(session)

    await next()
  } catch {
    return context.json({}, 401)
  }
}
