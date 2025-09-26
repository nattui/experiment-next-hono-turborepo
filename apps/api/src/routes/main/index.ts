import { Hono } from "hono"
import { routeRoot } from "./root"
import { routeTest } from "./test"

const routeMain = new Hono()

routeMain.route("/", routeRoot)
routeMain.route("/test", routeTest)

export { routeMain }
