import { Hono } from "hono"
import { routeSigninCredential } from "./routes/auth/signin-credential.route.js"
import { routeSignout } from "./routes/auth/signout.route.js"
import { routeSignupCredential } from "./routes/auth/signup-credential.route.js"
import { routeVerify } from "./routes/auth/verify.route.js"
import { routeRoot } from "./routes/main/root.route.js"
import { routeTest } from "./routes/main/test.route.js"
import { routeUsers } from "./routes/main/users.route.js"

const app = new Hono()
  .route("/", routeRoot)
  .route("/test", routeTest)
  .route("/users", routeUsers)
  .route("/auth/signin/credential", routeSigninCredential)
  .route("/auth/signout", routeSignout)
  .route("/auth/signup/credential", routeSignupCredential)
  .route("/auth/verify", routeVerify)

export type AppType = typeof app

export default {
  fetch: app.fetch,
  port: 3002,
}
