import { client } from "@/utils/client"
import type { UsersResponseType } from "@/utils/types"

export async function fetchUsers(): Promise<UsersResponseType> {
  const response = await client.users.$get()
  const data = await response.json()
  return data.users
}
