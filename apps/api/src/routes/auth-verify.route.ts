import { z } from "zod"
import { base } from "@/routes/context"
import { verifySession } from "@/utils/session.util"

const schemaAuthVerify = z.object({
  session: z.string(),
})

export const authVerify = base
  .route({
    method: "GET",
  })
  .input(schemaAuthVerify)
  .handler(async (options) => {
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
