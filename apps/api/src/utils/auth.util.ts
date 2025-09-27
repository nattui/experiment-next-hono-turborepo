import { deleteCookie, getCookie, setCookie } from "hono/cookie"
import {
  DeleteSessionParams,
  DeleteSessionResult,
  GetSessionParams,
  GetSessionResult,
  SetSessionParams,
  SetSessionResult,
} from "../types/auth.type"

export const EXPIRATION_TIME_IN_SECONDS = 31_536_000 // 1 year

export function deleteSession(
  properties: DeleteSessionParams,
): DeleteSessionResult {
  const { context } = properties
  deleteCookie(context, "session")
}

export function getSession(properties: GetSessionParams): GetSessionResult {
  const { context } = properties
  return getCookie(context, "session")
}

export function setSession(properties: SetSessionParams): SetSessionResult {
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
