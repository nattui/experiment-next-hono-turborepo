import { hc } from "hono/client"
import type { AppType } from "../app.js"

export function getClient(url?: string) {
  return hc<AppType>(url ?? "")
}

export type { Account, Profile, User } from "./db/schema/user.schema.js"
