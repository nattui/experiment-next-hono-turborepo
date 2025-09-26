import type { Context } from "hono"

export interface DeleteSessionProps {
  context: Context
}

export type DeleteSessionResult = void

export interface GetSessionProps {
  context: Context
}

export type GetSessionResult = string | undefined

export interface SetSessionProps {
  context: Context
  token: string
}

export type SetSessionResult = void
