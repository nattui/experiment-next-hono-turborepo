import type { RouterClient } from "@orpc/server"
import { authSigninCredential } from "@/routes/auth-signin-credential.route"
import { authSignout } from "@/routes/auth-signout.route"
import { authSignupCredential } from "@/routes/auth-signup-credential.route"
import { authVerify } from "@/routes/auth-verify.route"
import { test } from "@/routes/test.route"
import { users } from "@/routes/users.route"

export const router = {
  auth: {
    signinCredential: authSigninCredential,
    signout: authSignout,
    signupCredential: authSignupCredential,
    verify: authVerify,
  },
  test,
  users,
}

export type Router = RouterClient<typeof router>
