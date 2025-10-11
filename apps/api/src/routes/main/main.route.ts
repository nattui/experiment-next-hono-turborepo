import { Hono } from "hono"
import { handlerRoot } from "./root.route.js"
import { handlerTest } from "./test.route.js"
import { handlerUsers } from "./users.route.js"

export const routeMain = new Hono()
  .get("/", handlerRoot)
  .get("/test", handlerTest)
  .get("/users", handlerUsers)
