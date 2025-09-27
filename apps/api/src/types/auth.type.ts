import type { Context } from "hono"

export interface DeleteSessionParams {
  context: Context
}

export type DeleteSessionResult = void

export interface GetSessionParams {
  context: Context
}

export type GetSessionResult = string | undefined

export interface SetSessionParams {
  context: Context
  token: string
}

export type SetSessionResult = void
