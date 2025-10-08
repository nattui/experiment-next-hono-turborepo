import { type Context, Hono } from "hono"
import { verifyMiddleware } from "../../middleware/auth.middleware.js"
import { HTTP_STATUS_CODE } from "../../utils/http-status-code.js"

export const routeVerify = new Hono()

routeVerify.get("/", verifyMiddleware, handlerVerify)

export async function handlerVerify(context: Context) {
  return context.json({}, HTTP_STATUS_CODE["200_OK"])
}
