import { RPCHandler } from "@orpc/server/fetch"
import { OpenAPIGenerator } from "@orpc/openapi"
import { OpenAPIHandler } from "@orpc/openapi/fetch"
import { ZodToJsonSchemaConverter } from "@orpc/zod"
import { Hono } from "hono"
import { Scalar } from "@scalar/hono-api-reference"
import { router } from "@/routes/router"

const app = new Hono()

const handler = new RPCHandler(router)

// TESTING ============================================== /
const openApiHandler = new OpenAPIHandler(router)

app.use("/openapi/*", async (context, next) => {
  const { matched, response } = await openApiHandler.handle(context.req.raw, {
    context: {
      honoContext: context,
    },
    prefix: "/openapi",
  })

  if (matched) {
    return context.newResponse(response.body, response)
  }

  await next()
})

app.get("/openapi.json", async (context) => {
  const generator = new OpenAPIGenerator({
    schemaConverters: [new ZodToJsonSchemaConverter()],
  })

  const spec = await generator.generate(router, {
    info: {
      title: "experiment-next-hono-turborepo API",
      version: "1.0.0",
    },
    servers: [{ url: "/openapi" }],
  })

  return context.json(spec)
})

app.get("/docs", Scalar({ url: "/openapi.json" }))
// TESTING ============================================== /


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
