import { Hono } from "hono"
import { sign, verify } from "hono/jwt"
import { deleteSession, getSession, setSession } from "../../utils/auth"

const JWT_SECRET =
  "e533164577b61bbba9b125a77937170f748029f6e58167eb9fa3a633eef06627"

const auth = new Hono()

auth.get("/verify", async (context) => {
  try {
    const session = getSession({ context })

    if (!session) throw new Error("Session not found")

    // Verify the JWT token
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const payload = await verify(session, JWT_SECRET)
    // console.log(":::: payload:", payload)

    return context.json({})
  } catch {
    return context.json({}, 401)
  }
})

auth.get("/signup", async (context) => {
  try {
    const token = await sign({}, JWT_SECRET)

    // console.log(":::: token:", token)

    setSession({ context, token })
    return context.json({})
  } catch (error) {
    console.error(error)
    return context.json({}, 500)
  }
})

auth.get("/signin", async (context) => {
  try {
    const token = await sign({}, JWT_SECRET)

    // console.log(":::: token:", token)

    setSession({ context, token })
    return context.json({})
  } catch (error) {
    console.error(error)
    return context.json({}, 500)
  }
})

auth.get("/signout", async (context) => {
  deleteSession({ context })
  return context.json({})
})

export { auth }
