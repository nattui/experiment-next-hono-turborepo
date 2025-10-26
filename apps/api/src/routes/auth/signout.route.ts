import { base } from "@/utils/context.util"
import { deleteSession } from "@/utils/session.util"

export const signout = base
  .route({
    method: "POST",
  })
  .handler(async (options) => {
    deleteSession(options.context.honoContext)
  })
