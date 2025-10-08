import { Hono } from "hono"
import { routeRoot } from "./root.route"
import { routeTest } from "./test.route"
import { routeUsers } from "./users.route"

export const routeMain = new Hono()
  .get("/", routeRoot)
  .get("/test", routeTest)
  .get("/users", routeUsers)
