import { OpenAPIGenerator } from "@orpc/openapi"
import { RPCHandler } from "@orpc/server/fetch"
import { ZodToJsonSchemaConverter } from "@orpc/zod/zod4"
import { Scalar } from "@scalar/hono-api-reference"
import { Hono } from "hono"
import { router } from "@/routes/router"

const app = new Hono()

const handler = new RPCHandler(router)

app.get("/openapi.json", async (context) => {
  const generator = new OpenAPIGenerator({
    schemaConverters: [new ZodToJsonSchemaConverter()],
  })

  const spec = await generator.generate(router)

  return context.json(spec)
})

app.get("/docs", Scalar({ url: "/openapi.json" }))

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
