import { publicProcedure } from "@/routes/router"
import { deleteSession } from "@/utils/session.util"

export function routeAuthSignoutCredential() {
  return publicProcedure.mutation(async (options) => {
    deleteSession(options.ctx.honoContext)
  })
}
