import type { Context } from "hono"
import { HTTP_STATUS_CODE } from "@/utils/http-status-code"
import { deleteSession } from "@/utils/session.util"

export async function handlerSignout(context: Context) {
  deleteSession(context)
  return context.json({}, HTTP_STATUS_CODE["200_OK"])
}
