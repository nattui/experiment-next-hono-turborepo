import { Hono } from "hono"
import { handlerRoot } from "@/routes/main/root.route"
import { handlerTest } from "@/routes/main/test.route"
import { handlerUsers } from "@/routes/main/users.route"

export const routeMain = new Hono()
  .get("/", handlerRoot)
  .get("/test", handlerTest)
  .get("/users", handlerUsers)
