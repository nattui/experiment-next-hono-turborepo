import type { Context } from "hono"
import { deleteCookie, getCookie, setCookie } from "hono/cookie"
import { sign, verify } from "hono/jwt"
import type { JWTPayload } from "hono/utils/jwt/types"
import { JWT_SECRET } from "./constant.util.js"

export const EXPIRATION_TIME_IN_MILLISECONDS = 31_536_000_000_000 // 1 year
export const JWT_ALGORITHM = "HS256"

export function deleteSession(context: Context): void {
  deleteCookie(context, "session")
}

export function getSession(context: Context): string | undefined {
  return getCookie(context, "session")
}

interface SetSession {
  context: Context
  now: Date
  session: string
}

export function setSession(payload: SetSession): void {
  const { context, now, session } = payload
  const expirationDate = new Date(
    now.getTime() + EXPIRATION_TIME_IN_MILLISECONDS,
  )
  setCookie(context, "session", session, {
    expires: expirationDate,
    httpOnly: true,
    path: "/",
    priority: "medium",
    sameSite: "lax",
    secure: true,
  })
}

interface SignSession extends JWTPayload {
  id: number
  now: Date
}

export async function signSession(payload: SignSession): Promise<string> {
  const { id, now } = payload
  const expiresAt = Math.floor(
    (now.getTime() + EXPIRATION_TIME_IN_MILLISECONDS) / 1000,
  )
  const issuedAt = Math.floor(now.getTime() / 1000)
  const enhancedPayload = {
    exp: expiresAt,
    iat: issuedAt,
    iss: "experiment-next-hono-turborepo",
    sub: id,
    ...payload,
  }
  return sign(enhancedPayload, JWT_SECRET, JWT_ALGORITHM)
}

export async function verifySession(session: string): Promise<JWTPayload> {
  return verify(session, JWT_SECRET, JWT_ALGORITHM)
}
