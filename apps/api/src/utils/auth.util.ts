import type { Context } from "hono"
import type { JWTPayload } from "hono/utils/jwt/types"
import { deleteCookie, getCookie, setCookie } from "hono/cookie"
import { verify } from "hono/jwt"
import { JWT_SECRET } from "./constant.util"

export const EXPIRATION_TIME_IN_SECONDS = 31_536_000 // 1 year

export function deleteSession(context: Context): void {
  deleteCookie(context, "session")
}

export function getSession(context: Context): string | undefined {
  return getCookie(context, "session")
}

export function setSession(context: Context, token: string): void {
  setCookie(context, "session", token, {
    httpOnly: true,
    maxAge: EXPIRATION_TIME_IN_SECONDS,
    path: "/",
    priority: "medium",
    sameSite: "lax",
    secure: true,
  })
}

export async function verifySession(session: string): Promise<JWTPayload> {
  const payload = await verify(session, JWT_SECRET)
  return payload
}
