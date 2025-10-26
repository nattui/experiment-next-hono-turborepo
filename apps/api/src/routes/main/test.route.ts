import { base } from "@/utils/context.util"

export const test = base
  .route({
    method: "GET",
  })
  .handler(async () => {
    return "Hello Hono!"
  })
