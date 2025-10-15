import { publicProcedure } from "@/routes/router"

export function routeTest() {
  return publicProcedure.query(async () => {
    return "Hello Hono!"
  })
}
