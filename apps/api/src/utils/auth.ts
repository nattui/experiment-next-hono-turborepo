import {
  GetSessionProps,
  GetSessionResult,
  SetSessionProps,
  SetSessionResult,
  DeleteSessionProps,
  DeleteSessionResult,
} from "./types-auth"
import { deleteCookie, getCookie, setCookie } from "hono/cookie"

export const EXPIRATION_TIME_IN_SECONDS = 31_536_000 // 1 year

export function getSession(props: GetSessionProps): GetSessionResult {
  const { context } = props
  return getCookie(context, "session")
}

export function setSession(props: SetSessionProps): SetSessionResult {
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

export function deleteSession(props: DeleteSessionProps): DeleteSessionResult {
  const { context } = props
  deleteCookie(context, "session")
}
