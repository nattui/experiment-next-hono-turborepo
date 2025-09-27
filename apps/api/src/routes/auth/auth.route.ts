import { Hono } from "hono"
import { routeSignin } from "@/routes/auth/signin.route"
import { routeSignout } from "@/routes/auth/signout.route"
import { routeSignup } from "@/routes/auth/signup.route"
import { routeVerify } from "@/routes/auth/verify.route"

const routeAuth = new Hono()

routeAuth.route("/signin", routeSignin)
routeAuth.route("/signout", routeSignout)
routeAuth.route("/signup", routeSignup)
routeAuth.route("/verify", routeVerify)

export { routeAuth }
