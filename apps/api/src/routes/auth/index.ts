import { Hono } from "hono"
import { routeSignin } from "./signin"
import { routeSignout } from "./signout"
import { routeSignup } from "./signup"
import { routeVerify } from "./verify"

const routeAuth = new Hono()

routeAuth.route("/signin", routeSignin)
routeAuth.route("/signout", routeSignout)
routeAuth.route("/signup", routeSignup)
routeAuth.route("/verify", routeVerify)

export { routeAuth }
