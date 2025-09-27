import { Hono } from "hono"
import { verifyMiddleware } from "../../middleware/auth.middleware"

const routeVerify = new Hono()

routeVerify.get("/", verifyMiddleware, async (context) => {
  return context.json({})
})

export { routeVerify }
