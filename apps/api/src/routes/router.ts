import type { RouterClient } from "@orpc/server"
import { signinCredential } from "@/routes/auth/signin-credential.route"
import { signout } from "@/routes/auth/signout.route"
import { signupCredential } from "@/routes/auth/signup-credential.route"
import { verify } from "@/routes/auth/verify.route"
import { test } from "@/routes/main/test.route"
import { users } from "@/routes/main/users.route"

export const router = {
  auth: {
    signinCredential,
    signout,
    signupCredential,
    verify,
  },
  test,
  users,
}

export type Router = RouterClient<typeof router>
