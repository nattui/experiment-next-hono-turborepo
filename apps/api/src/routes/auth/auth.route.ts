import { Hono } from "hono"
import { verifyMiddleware } from "@/middleware/auth.middleware"
import { routeSigninCredential } from "@/routes/auth/signin-credential.route"
import { routeSignout } from "@/routes/auth/signout.route"
import { routeSignupCredential } from "@/routes/auth/signup-credential.route"
import { routeVerify } from "@/routes/auth/verify.route"

export const routesAuth = new Hono()
  .get("/verify", verifyMiddleware, routeVerify)
  .post("/signin/credential", routeSigninCredential)
  .post("/signout", routeSignout)
  .post("/signup/credential", routeSignupCredential)
