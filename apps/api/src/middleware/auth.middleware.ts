import type { Context, Next } from "hono"
import { getSession, verifySession } from "../utils/session.util"
import { STATUS_CODE } from "../utils/status-code"

export async function verifyMiddleware(context: Context, next: Next) {
  try {
    const session = getSession(context)

    if (!session) {
      return context.json({}, STATUS_CODE.UNAUTHORIZED)
    }

    await verifySession(session)

    await next()
  } catch {
    return context.json({}, STATUS_CODE.UNAUTHORIZED)
  }
}
