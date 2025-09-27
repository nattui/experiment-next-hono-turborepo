import { Hono } from "hono"
import { routeSignin } from "./signin.route"
import { routeSignout } from "./signout.route"
import { routeSignup } from "./signup.route"
import { routeVerify } from "./verify.route"

const routeAuth = new Hono()

routeAuth.route("/credential/signin", routeSignin)
routeAuth.route("/credential/signup", routeSignup)
routeAuth.route("/signout", routeSignout)
routeAuth.route("/verify", routeVerify)

export { routeAuth }
