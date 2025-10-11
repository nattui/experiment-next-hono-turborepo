import { Hono } from "hono"
import { verifyMiddleware } from "@/middleware/auth.middleware.js"
import { handlerSigninCredential } from "./signin-credential.route.js"
import { handlerSignout } from "./signout.route.js"
import { handlerSignupCredential } from "./signup-credential.route.js"
import { handlerVerify } from "./verify.route.js"

export const routeAuth = new Hono()
  .get("/verify", verifyMiddleware, handlerVerify)
  .post("/signin/credential", handlerSigninCredential)
  .post("/signout", handlerSignout)
  .post("/signup/credential", handlerSignupCredential)
