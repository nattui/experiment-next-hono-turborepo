import { Hono } from "hono"
import { sign } from "hono/jwt"
import { setSession } from "../../utils/auth.util"
import { JWT_SECRET } from "../../utils/constant.util"

const routeSignin = new Hono()

routeSignin.get("/", async (context) => {
  try {
    const token = await sign({}, JWT_SECRET)
    setSession(context, token)
    return context.json({})
  } catch (error) {
    console.error(error)
    return context.json({}, 500)
  }
})

export { routeSignin }
