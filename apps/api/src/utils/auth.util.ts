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
  params: DeleteSessionParams,
): DeleteSessionResult {
  const { context } = params
  deleteCookie(context, "session")
}

export function getSession(params: GetSessionParams): GetSessionResult {
  const { context } = params
  return getCookie(context, "session")
}

export function setSession(params: SetSessionParams): SetSessionResult {
  const { context, token } = params
  setCookie(context, "session", token, {
    httpOnly: true,
    maxAge: EXPIRATION_TIME_IN_SECONDS,
    path: "/",
    priority: "medium",
    sameSite: "lax",
    secure: true,
  })
}
