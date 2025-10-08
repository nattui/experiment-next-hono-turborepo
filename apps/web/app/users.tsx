"use client"

import type { InferResponseType } from "hono/client"
import { useEffect, useState } from "react"
import { client } from "@/utils/client"

type Users = InferResponseType<typeof client.users.$get>["users"]

export function Users() {
  const [users, setUsers] = useState<Users>([])

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await client.users.$get()
        const data = await response.json()
        setUsers(data.users)
      } catch (error) {
        console.error(error)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="flex flex-col gap-y-16">
      {users.map((user) => (
        <div className="flex flex-col font-mono" key={user.id}>
          <p className="text-14">id: {user.id}</p>
          <p className="text-14">name: {user.name}</p>
          <p className="text-14">email: {user.email}</p>
          <p className="text-14">emailVerified: {user.emailVerified}</p>
          <p className="text-14">role: {user.role}</p>
          <p className="text-14">createdAt: {user.createdAt.toString()}</p>
          <p className="text-14">updatedAt: {user.updatedAt.toString()}</p>
        </div>
      ))}
    </div>
  )
}
