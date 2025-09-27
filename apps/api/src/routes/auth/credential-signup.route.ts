import { password } from "bun"
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
    const body = await context.req.json()
    console.log("::::email:", body.email)
    console.log("::::name:", body.name)
    console.log("::::password:", body.password)

    // Check if user with this email already exists
    const [existingUser] = await db
      .select()
      .from(USER)
      .where(eq(USER.email, body.email))
      .limit(1)

    console.log(":::: Existing user:", existingUser)

    if (existingUser) {
      return context.json({}, STATUS_CODE.BAD_REQUEST)
    }

    const hashedPassword = await password.hash(body.password, "argon2id")

    const payload = {
      email: body.email,
      id: body.id,
      name: body.name,
    }
    const token = await sign(payload, JWT_SECRET)

    await db.transaction(async (transaction) => {
      // Create new user
      const [newUser] = await transaction
        .insert(USER)
        .values({ email: body.email, name: body.name })
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

      Promise.all([account, profile])
    })

    setSession(context, token)

    return context.json({})
  } catch (error) {
    console.error(error)
    return context.json({}, STATUS_CODE.INTERNAL_SERVER_ERROR)
  }
})

export { routeCredentialSignup }
