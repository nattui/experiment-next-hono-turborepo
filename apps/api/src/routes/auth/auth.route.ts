import { Hono } from "hono"
import { verifyMiddleware } from "@/middleware/auth.middleware"
import { handlerSigninCredential } from "@/routes/auth/signin-credential.route"
import { handlerSignout } from "@/routes/auth/signout.route"
import { handlerSignupCredential } from "@/routes/auth/signup-credential.route"
import { handlerVerify } from "@/routes/auth/verify.route"

export const routeAuth = new Hono()
  .get("/verify", verifyMiddleware, handlerVerify)
  .post("/signin/credential", handlerSigninCredential)
  .post("/signout", handlerSignout)
  .post("/signup/credential", handlerSignupCredential)
