import { verify } from "argon2"
import { ACCOUNT, and, db, eq, USER } from "db"
import type { Context } from "hono"
import { HTTP_STATUS_CODE } from "@/utils/http-status-code"
import { setSession } from "@/utils/session.util"

export async function handlerSigninCredential(context: Context) {
  try {
    const { email, password } = await context.req.json()

    // Check if user with this email exists
    const [existingUser] = await db
      .select({
        hashedPassword: ACCOUNT.password,
        id: USER.id,
        name: USER.name,
      })
      .from(USER)
      .innerJoin(
        ACCOUNT,
        and(eq(ACCOUNT.userId, USER.id), eq(ACCOUNT.provider, "credentials")),
      )
      .where(eq(USER.email, email))
      .limit(1)

    if (!existingUser) {
      return context.json({}, HTTP_STATUS_CODE["401_UNAUTHORIZED"])
    }

    const hashedPassword = existingUser.hashedPassword ?? ""
    const isPasswordCorrect = await verify(hashedPassword, password)

    if (!isPasswordCorrect) {
      return context.json({}, HTTP_STATUS_CODE["401_UNAUTHORIZED"])
    }

    await setSession({ context, id: existingUser.id, now: new Date() })
    return context.json({}, HTTP_STATUS_CODE["200_OK"])
  } catch (error) {
    console.error(error)
    return context.json({}, HTTP_STATUS_CODE["500_INTERNAL_SERVER_ERROR"])
  }
}
