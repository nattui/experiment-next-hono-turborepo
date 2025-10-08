import { Hono } from "hono"
import { routeRoot } from "./root.route.js"
import { handlerTest } from "./test.route.js"
import { handlerUsers } from "./users.route.js"

export const routeMain = new Hono()
  .route("/", routeRoot)
  .get("/test", handlerTest)
  .get("/users", handlerUsers)
