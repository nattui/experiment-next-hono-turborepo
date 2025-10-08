import { type Context, Hono } from "hono"
import { verifyMiddleware } from "../../middleware/auth.middleware"
import { HTTP_STATUS_CODE } from "../../utils/http-status-code"

export const routeVerify = new Hono()

routeVerify.get("/", verifyMiddleware, (context: Context) =>
  handlerVerify(context),
)

export async function handlerVerify(context: Context) {
  return context.json({}, HTTP_STATUS_CODE["200_OK"])
}
