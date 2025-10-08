import { Hono } from "hono"
import { verifyMiddleware } from "../../middleware/auth.middleware"
import { routeSigninCredential } from "./signin-credential.route"
import { routeSignout } from "./signout.route"
import { routeSignupCredential } from "./signup-credential.route"
import { routeVerify } from "./verify.route"

export const routesAuth = new Hono()
  .get("/verify", verifyMiddleware, routeVerify)
  .post("/signin/credential", routeSigninCredential)
  .post("/signout", routeSignout)
  .post("/signup/credential", routeSignupCredential)
