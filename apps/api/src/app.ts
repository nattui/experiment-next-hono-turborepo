import { trpcServer } from "@hono/trpc-server"
import { Hono } from "hono"
import { appRouter } from "@/routes/router"

const app = new Hono()

app.use(
  "/*",
  trpcServer({
    createContext: (_, c) => ({
      honoContext: c,
    }),
    endpoint: "/",
    router: appRouter,
  }),
)

export default {
  fetch: app.fetch,
  port: 3002,
}
