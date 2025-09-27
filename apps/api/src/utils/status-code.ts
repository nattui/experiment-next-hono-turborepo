import type { ContentfulStatusCode } from "hono/utils/http-status"

export const STATUS_CODE: Record<string, ContentfulStatusCode> = {
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
  UNAUTHORIZED: 401,
} as const
