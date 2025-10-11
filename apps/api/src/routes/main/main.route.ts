import { Hono } from "hono"
import { handlerRoot } from "./root.route"
import { handlerTest } from "./test.route"
import { handlerUsers } from "./users.route"

export const routeMain = new Hono()
  .get("/", handlerRoot)
  .get("/test", handlerTest)
  .get("/users", handlerUsers)
