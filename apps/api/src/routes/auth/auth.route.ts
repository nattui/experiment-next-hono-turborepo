// import { Hono } from "hono"
// import { verifyMiddleware } from "../../middleware/auth.middleware"
// import {
//   handlerSigninCredential,
//   routeSigninCredential,
// } from "./signin-credential.route"
// import { handlerSignout, routeSignout } from "./signout.route"
// import {
//   handlerSignupCredential,
//   routeSignupCredential,
// } from "./signup-credential.route"
// import { handlerVerify, routeVerify } from "./verify.route"

// export const routeAuth = new Hono()
// routeAuth.route("/signin/credential", routeSigninCredential)
// routeAuth.route("/signup/credential", routeSignupCredential)
// routeAuth.route("/signout", routeSignout)
// routeAuth.route("/verify", routeVerify)

// export const routeChainedAuth = new Hono()
//   .get("/verify", verifyMiddleware, handlerVerify)
//   .post("/signin/credential", handlerSigninCredential)
//   .post("/signout", handlerSignout)
//   .post("/signup/credential", handlerSignupCredential)
