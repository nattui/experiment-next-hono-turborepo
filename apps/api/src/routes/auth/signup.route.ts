import { eq } from "drizzle-orm"
import { Hono } from "hono"
import { sign } from "hono/jwt"
import { setSession } from "../../utils/auth.util"
import { JWT_SECRET } from "../../utils/constant.util"
import { db } from "../../utils/db"
import { USER } from "../../utils/db/schema/user"
import { STATUS_CODE } from "../../utils/status-code"

const routeSignup = new Hono()

routeSignup.post("/", async (context) => {
  try {
    const { email, password } = await context.req.json()
    console.log("::::email:", email)
    console.log("::::password:", password)

    // Check if user with this email already exists
    const [existingUser] = await db
      .select()
      .from(USER)
      .where(eq(USER.email, email))
      .limit(1)

    if (existingUser) {
      return context.json({}, STATUS_CODE.BAD_REQUEST)
    }

    const token = await sign({}, JWT_SECRET)
    setSession(context, token)
    return context.json({})
  } catch (error) {
    console.error(error)
    return context.json({}, STATUS_CODE.INTERNAL_SERVER_ERROR)
  }
})

export { routeSignup }
