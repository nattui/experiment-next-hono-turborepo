import { Hono } from "hono"
import { verifyMiddleware } from "../../middleware/auth.middleware"
import { handlerSigninCredential } from "./signin-credential.route"
import { handlerSignout } from "./signout.route"
import { handlerSignupCredential } from "./signup-credential.route"
import { handlerVerify } from "./verify.route"

export const routeAuth = new Hono()
  .get("/verify", verifyMiddleware, handlerVerify)
  .post("/signin/credential", handlerSigninCredential)
  .post("/signout", handlerSignout)
  .post("/signup/credential", handlerSignupCredential)
