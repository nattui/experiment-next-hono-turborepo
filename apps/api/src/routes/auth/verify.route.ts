import { Hono } from "hono"
import { verify } from "hono/jwt"
import { deleteSession, getSession } from "../../utils/auth.util"
import { JWT_SECRET } from "../../utils/constant.util"

const routeVerify = new Hono()

routeVerify.get("/", async (context) => {
  try {
    const session = getSession({ context })

    if (!session) return context.json({}, 401)

    // Verify the JWT token

    const payload = await verify(session, JWT_SECRET)
    console.log(":::: payload:", payload)

    return context.json({})
  } catch {
    deleteSession({ context })
    return context.json({}, 401)
  }
})

export { routeVerify }
