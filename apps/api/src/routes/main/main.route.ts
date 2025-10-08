import { Hono } from "hono"
import { routeRoot } from "./root.route"
// import { handlerTest, routeTest } from "./test.route"
// import { handlerUsers, routeUsers } from "./users.route"

export const routeMain = new Hono()
routeMain.route("/", routeRoot)
// routeMain.route("/test", routeTest)
// routeMain.route("/users", routeUsers)

// export const routeChainedMain = new Hono()
//   .get("/", handlerRoot)
//   .get("/test", handlerTest)
//   .get("/users", handlerUsers)
