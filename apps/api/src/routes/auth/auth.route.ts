import { Hono } from "hono"
import { routeCredentialSignin } from "./credential-signin.route"
import { routeCredentialSignup } from "./credential-signup.route"
import { routeSignout } from "./signout.route"
import { routeVerify } from "./verify.route"

const routeAuth = new Hono()

routeAuth.route("/credential/signin", routeCredentialSignin)
routeAuth.route("/credential/signup", routeCredentialSignup)
routeAuth.route("/signout", routeSignout)
routeAuth.route("/verify", routeVerify)

export { routeAuth }
