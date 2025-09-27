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
    const [existingUser] = await db
      .select()
      .from(USER)
      .where(eq(USER.email, email))
      .limit(1)

    if (!existingUser) {
      return context.json({}, STATUS_CODE.UNAUTHORIZED)
    }

    const [existingAccount] = await db
      .select()
      .from(ACCOUNT)
      .where(
        and(
          eq(ACCOUNT.provider, "credentials"),
          eq(ACCOUNT.userId, existingUser.id),
        ),
      )
      .limit(1)

    // Check if password is correct
    const hashedPassword = existingAccount.password ?? ""
    const isPasswordCorrect = await verify(hashedPassword, password)

    if (!isPasswordCorrect) {
      return context.json({}, STATUS_CODE.UNAUTHORIZED)
    }

    // Create session token
    const token = await signSession({
      email,
      id: existingUser.id,
      name: existingUser.name,
    })
    setSession(context, token)
    return context.json({})
  } catch (error) {
    console.error(error)
    return context.json({}, STATUS_CODE.INTERNAL_SERVER_ERROR)
  }
})

export { routeCredentialSignin }
