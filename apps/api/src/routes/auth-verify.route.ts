import { z } from "zod"
import { publicProcedure } from "@/routes/router"
import { verifySession } from "@/utils/session.util"

const schemaAuthVerify = z.object({
  session: z.string(),
})

export function routeAuthVerify() {
  return publicProcedure.input(schemaAuthVerify).query(async (options) => {
    try {
      const session = options.input.session
      if (!session) return false

      const data = await verifySession(session)
      if (!data) return false

      return true
    } catch {
      return false
    }
  })
}
