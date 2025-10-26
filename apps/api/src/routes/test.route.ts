import { base } from "@/routes/context"

export const test = base
  .route({
    method: "GET",
  })
  .handler(async () => {
    return "Hello Hono!"
  })
