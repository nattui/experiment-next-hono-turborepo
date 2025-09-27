import { Hono } from "hono"
import { sign } from "hono/jwt"
import { setSession } from "../../utils/auth.util"
import { JWT_SECRET } from "../../utils/constant.util"

const routeSignup = new Hono()

routeSignup.get("/", async (context) => {
  try {
    const token = await sign({}, JWT_SECRET)

    // console.log(":::: token:", token)

    setSession(context, token)
    return context.json({})
  } catch (error) {
    console.error(error)
    return context.json({}, 500)
  }
})

export { routeSignup }
