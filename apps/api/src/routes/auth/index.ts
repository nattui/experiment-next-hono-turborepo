import { Hono } from "hono"
import { setCookie, getCookie, deleteCookie } from "hono/cookie"
import { sign, verify } from "hono/jwt"

export const EXPIRATION_TIME_IN_SECONDS = 31_536_000 // 1 year

const JWT_SECRET =
  "e533164577b61bbba9b125a77937170f748029f6e58167eb9fa3a633eef06627"

const auth = new Hono()

auth.get("/verify", async (context) => {
  try {
    const sessionCookie = getCookie(context, "session")

    if (!sessionCookie) throw new Error()

    // Verify the JWT token
    const payload = await verify(sessionCookie, JWT_SECRET)
    // console.log(":::: payload:", payload)

    return context.json({})
  } catch (error) {
    return context.json({}, 401)
  }
})

auth.get("/signin", async (context) => {
  try {
    const token = await sign({}, JWT_SECRET)

    // console.log(":::: token:", token)

    setCookie(context, "session", token, {
      httpOnly: false,
      maxAge: EXPIRATION_TIME_IN_SECONDS,
      path: "/",
      priority: "medium",
      sameSite: "lax",
      secure: false,
    })
    return context.json({})
  } catch (error) {
    console.error(error)
    return context.json({}, 500)
  }
})

auth.get("/signout", async (context) => {
  deleteCookie(context, "session")
  return context.json({})
})

export { auth }
