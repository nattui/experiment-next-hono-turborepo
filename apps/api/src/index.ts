import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { setCookie, getCookie } from "hono/cookie"
import { sign, verify } from "hono/jwt"

export const EXPIRATION_TIME_IN_SECONDS = 31_536_000 // 1 year

export const isDevelopment = process.env.NODE_ENV === "development"

const JWT_SECRET =
  "e533164577b61bbba9b125a77937170f748029f6e58167eb9fa3a633eef06627"

const app = new Hono()

app.get("/", (context) => {
  return context.text("Hello Hono!")
})

app.get("/test", (context) => {
  return context.json({ data: "Hello Hono!" })
})

app.get("/auth/verify", async (context) => {
  try {
    const sessionCookie = getCookie(context, "session")

    if (!sessionCookie) throw new Error()

    // Verify the JWT token
    const payload = await verify(sessionCookie, JWT_SECRET)
    console.log(":::: payload:", payload)

    return context.json({})
  } catch (error) {
    return context.json({}, 401)
  }
})

app.get("/auth/signin", async (context) => {
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

serve(
  {
    fetch: app.fetch,
    port: 3002,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  },
)

export default app
