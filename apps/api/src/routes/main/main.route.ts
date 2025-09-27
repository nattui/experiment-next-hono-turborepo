import { Hono } from "hono"
import { routeRoot } from "./root.route"
import { routeTest } from "./test.route"

const routeMain = new Hono()

routeMain.route("/", routeRoot)
routeMain.route("/test", routeTest)

export { routeMain }
