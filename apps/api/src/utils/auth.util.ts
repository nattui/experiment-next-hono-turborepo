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

export function deleteSession(props: DeleteSessionParams): DeleteSessionResult {
  const { context } = props
  deleteCookie(context, "session")
}

export function getSession(props: GetSessionParams): GetSessionResult {
  const { context } = props
  return getCookie(context, "session")
}

export function setSession(props: SetSessionParams): SetSessionResult {
  const { context, token } = props
  setCookie(context, "session", token, {
    httpOnly: true,
    maxAge: EXPIRATION_TIME_IN_SECONDS,
    path: "/",
    priority: "medium",
    sameSite: "lax",
    secure: true,
  })
}
