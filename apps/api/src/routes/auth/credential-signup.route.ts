import argon2 from "argon2"
import { eq } from "drizzle-orm"
import { Hono } from "hono"
import { sign } from "hono/jwt"
import { setSession } from "../../utils/auth.util"
import { JWT_SECRET } from "../../utils/constant.util"
import { db } from "../../utils/db/db.utils"
import { ACCOUNT, PROFILE, USER } from "../../utils/db/schema/user.schema"
import { STATUS_CODE } from "../../utils/status-code"

const routeCredentialSignup = new Hono()

routeCredentialSignup.post("/", async (context) => {
  try {
    const { email, name, password } = await context.req.json()

    // Check if user with this email already exists
    const [existingUser] = await db
      .select()
      .from(USER)
      .where(eq(USER.email, email))
      .limit(1)

    if (existingUser) {
      return context.json({}, STATUS_CODE.BAD_REQUEST)
    }

    const hashedPassword = await argon2.hash(password)

    await db.transaction(async (transaction) => {
      // Create new user
      const [newUser] = await transaction
        .insert(USER)
        .values({ email, name })
        .returning()

      // Create account for the user
      const account = transaction.insert(ACCOUNT).values({
        password: hashedPassword,
        userId: newUser.id,
      })

      // Create profile for the user
      const profile = transaction.insert(PROFILE).values({
        userId: newUser.id,
      })

      await Promise.all([account, profile])

      // Create session token
      const payload = {
        email,
        id: newUser.id,
        name,
      }
      const token = await sign(payload, JWT_SECRET)
      setSession(context, token)
    })

    return context.json({})
  } catch (error) {
    console.error(error)
    return context.json({}, STATUS_CODE.INTERNAL_SERVER_ERROR)
  }
})

export { routeCredentialSignup }
