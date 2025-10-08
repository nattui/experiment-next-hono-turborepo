import { type Context, Hono } from "hono"
import { HTTP_STATUS_CODE } from "../../utils/http-status-code"
import { deleteSession } from "../../utils/session.util"

export const routeSignout = new Hono()

routeSignout.post("/", (context: Context) => handlerSignout(context))

export async function handlerSignout(context: Context) {
  deleteSession(context)
  return context.json({}, HTTP_STATUS_CODE["200_OK"])
}
