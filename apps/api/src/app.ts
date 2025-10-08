import { Hono } from "hono"
// import { verifyMiddleware } from "./middleware/auth.middleware"
// import { loggerMiddleware } from "./middleware/logger.middleware"
// import { routeSigninCredential } from "./routes/auth/signin-credential.route"
// import { routeSignout } from "./routes/auth/signout.route"
// import { routeSignupCredential } from "./routes/auth/signup-credential.route"
// import { routeVerify } from "./routes/auth/verify.route"
// import { routeRoot } from "./routes/main/root.route"
// import { routeTest } from "./routes/main/test.route"
// import { routeUsers } from "./routes/main/users.route"
import type { Account, Profile, User } from "./utils/db/schema/user.schema"

export const isDevelopment = process.env.NODE_ENV === "development"

const app = new Hono()
// .use(loggerMiddleware())
// .get("/", routeRoot)
// .get("/test", routeTest)
// .get("/users", routeUsers)
// .post("/auth/signin/credential", routeSigninCredential)
// .post("/auth/signout", routeSignout)
// .post("/auth/signup/credential", routeSignupCredential)
// .get("/auth/verify", verifyMiddleware, routeVerify)

export type AppType = typeof app

export default {
  fetch: app.fetch,
  port: 3002,
}

export type { Account, Profile, User }
