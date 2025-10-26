import { base } from "@/routes/context"
import { deleteSession } from "@/utils/session.util"

export const signout = base
  .route({
    method: "POST",
  })
  .handler(async (options) => {
    deleteSession(options.context.honoContext)
  })
