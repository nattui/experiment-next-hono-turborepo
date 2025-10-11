import type { Context } from "hono"
import { HTTP_STATUS_CODE } from "../../utils/http-status-code.js"

export async function handlerVerify(context: Context) {
  return context.json({}, HTTP_STATUS_CODE["200_OK"])
}
