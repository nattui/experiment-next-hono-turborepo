import { Hono } from "hono"
import { verifyMiddleware } from "./middleware/auth.middleware.js"
import { loggerMiddleware } from "./middleware/logger.middleware.js"
import { handlerSigninCredential } from "./routes/auth/signin-credential.route.js"
import { handlerSignout } from "./routes/auth/signout.route.js"
import { handlerSignupCredential } from "./routes/auth/signup-credential.route.js"
import { handlerVerify } from "./routes/auth/verify.route.js"
import { handlerRoot } from "./routes/main/root.route.js"
import { handlerTest } from "./routes/main/test.route.js"
import { handlerUsers } from "./routes/main/users.route.js"

const app = new Hono()
  .use(loggerMiddleware())
  .get("/", handlerRoot)
  .get("/test", handlerTest)
  .get("/users", handlerUsers)
  .post("/auth/signin/credential", handlerSigninCredential)
  .post("/auth/signout", handlerSignout)
  .post("/auth/signup/credential", handlerSignupCredential)
  .get("/auth/verify", verifyMiddleware, handlerVerify)

export type AppType = typeof app

export default {
  fetch: app.fetch,
  port: 3002,
}
