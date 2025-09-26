import type { Context } from "hono"

export interface GetSessionProps {
  context: Context
}

export type GetSessionResult = string | undefined

export interface SetSessionProps {
  context: Context
  token: string
}

export type SetSessionResult = void

export interface DeleteSessionProps {
  context: Context
}

export type DeleteSessionResult = void
