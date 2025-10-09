import { Hono } from "hono"
import { handlerRoot } from "./root.route.js"
import { handlerTest } from "./test.route.js"
import { handlerUsers } from "./users.route.js"

const routeRoot = new Hono().get("/", handlerRoot)
const routeTest = new Hono().get("/test", handlerTest)
const routeUsers = new Hono().get("/users", handlerUsers)

export const routeMain = new Hono()
  .route("/", routeRoot)
  .route("/test", routeTest)
  .route("/users", routeUsers)
