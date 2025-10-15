import { trpcServer } from "@hono/trpc-server"
import { Hono } from "hono"
import { appRouter } from "@/router"

const app = new Hono()

app.use(
  "/*",
  trpcServer({
    endpoint: "/",
    router: appRouter,
  }),
)

export default {
  fetch: app.fetch,
  port: 3003,
}
