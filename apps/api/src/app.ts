import { RPCHandler } from "@orpc/server/fetch"
import { Hono } from "hono"
import { router } from "@/routes/router"

const app = new Hono()

const handler = new RPCHandler(router)

app.use("/*", async (context, next) => {
  const { matched, response } = await handler.handle(context.req.raw, {
    context: {
      honoContext: context,
    },
  })

  if (matched) {
    return context.newResponse(response.body, response)
  }

  await next()
})

export default {
  fetch: app.fetch,
  port: 3002,
}
