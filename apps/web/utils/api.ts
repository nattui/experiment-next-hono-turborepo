import type { User } from "api"
import { client } from "@/utils/client"

export async function fetchUsers(): Promise<User[]> {
  const response = await client.users.$get()
  const data = await response.json()
  return data.users
}
