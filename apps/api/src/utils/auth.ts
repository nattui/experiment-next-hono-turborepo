import { deleteCookie, getCookie, setCookie } from "hono/cookie"
import {
  DeleteSessionProps,
  DeleteSessionResult,
  GetSessionProps,
  GetSessionResult,
  SetSessionProps,
  SetSessionResult,
} from "./types-auth"

export const EXPIRATION_TIME_IN_SECONDS = 31_536_000 // 1 year

export function deleteSession(
  properties: DeleteSessionProps,
): DeleteSessionResult {
  const { context } = properties
  deleteCookie(context, "session")
}

export function getSession(properties: GetSessionProps): GetSessionResult {
  const { context } = properties
  return getCookie(context, "session")
}

export function setSession(properties: SetSessionProps): SetSessionResult {
  const { context, token } = properties
  setCookie(context, "session", token, {
    httpOnly: true,
    maxAge: EXPIRATION_TIME_IN_SECONDS,
    path: "/",
    priority: "medium",
    sameSite: "lax",
    secure: true,
  })
}
