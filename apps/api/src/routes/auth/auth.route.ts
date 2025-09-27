import { Hono } from "hono"
import { routeSignin } from "./signin.route"
import { routeSignout } from "./signout.route"
import { routeSignup } from "./signup.route"
import { routeVerify } from "./verify.route"

const routeAuth = new Hono()

routeAuth.route("/signin", routeSignin)
routeAuth.route("/signout", routeSignout)
routeAuth.route("/signup", routeSignup)
routeAuth.route("/verify", routeVerify)

export { routeAuth }
