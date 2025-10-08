import { Hono } from "hono"
import { routeRoot } from "@/routes/main/root.route"
import { routeTest } from "@/routes/main/test.route"
import { routeUsers } from "@/routes/main/users.route"

export const routeMain = new Hono()
  .get("/", routeRoot)
  .get("/test", routeTest)
  .get("/users", routeUsers)
