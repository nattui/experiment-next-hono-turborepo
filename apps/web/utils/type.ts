import type { InferResponseType } from "hono/client"
import type { client } from "@/utils/client"

export type UsersResponseType = InferResponseType<
  typeof client.users.$get
>["users"]
