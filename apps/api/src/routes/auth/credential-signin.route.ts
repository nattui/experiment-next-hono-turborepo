import { verify } from "argon2"
import { and, eq } from "drizzle-orm"
import { Hono } from "hono"
import { db } from "../../utils/db/db.utils"
import { ACCOUNT, USER } from "../../utils/db/schema/user.schema"
import { setSession, signSession } from "../../utils/session.util"
import { STATUS_CODE } from "../../utils/status-code"

const routeCredentialSignin = new Hono()

routeCredentialSignin.post("/", async (context) => {
  try {
    const { email, password } = await context.req.json()

    // Check if user with this email exists
    const [existingUserWithAccount] = await db
      .select({
        hashedPassword: ACCOUNT.password,
        userEmail: USER.email,
        userId: USER.id,
        userName: USER.name,
      })
      .from(USER)
      .innerJoin(
        ACCOUNT,
        and(eq(ACCOUNT.userId, USER.id), eq(ACCOUNT.provider, "credentials")),
      )
      .where(eq(USER.email, email))
      .limit(1)

    if (!existingUserWithAccount) {
      return context.json({}, STATUS_CODE.UNAUTHORIZED)
    }

    // Check if password is correct
    const hashedPassword = existingUserWithAccount.hashedPassword ?? ""
    const isPasswordCorrect = await verify(hashedPassword, password)

    if (!isPasswordCorrect) {
      return context.json({}, STATUS_CODE.UNAUTHORIZED)
    }

    // Create session token
    const token = await signSession({
      email,
      id: existingUserWithAccount.userId,
      name: existingUserWithAccount.userName,
    })

    setSession(context, token)
    return context.json({})
  } catch (error) {
    console.error(error)
    return context.json({}, STATUS_CODE.INTERNAL_SERVER_ERROR)
  }
})

export { routeCredentialSignin }
