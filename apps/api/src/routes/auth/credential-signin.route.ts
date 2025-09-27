import { Hono } from "hono"
import { sign } from "hono/jwt"
import { setSession } from "../../utils/auth.util"
import { JWT_SECRET } from "../../utils/constant.util"
import { STATUS_CODE } from "../../utils/status-code"

const routeCredentialSignin = new Hono()

routeCredentialSignin.get("/", async (context) => {
  try {
    const token = await sign({}, JWT_SECRET)
    setSession(context, token)
    return context.json({})
  } catch (error) {
    console.error(error)
    return context.json({}, STATUS_CODE.INTERNAL_SERVER_ERROR)
  }
})

export { routeCredentialSignin }
