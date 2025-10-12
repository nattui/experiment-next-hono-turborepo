import type { Context } from "hono"
import { HTTP_STATUS_CODE } from "@/utils/http-status-code"

export async function handlerVerify(context: Context) {
  return context.json({}, HTTP_STATUS_CODE["200_OK"])
}
