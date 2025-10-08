"use client"

import { useEffect, useState } from "react"
import { client, type UsersResponseType } from "@/utils/client"

export function Users() {
  const [users, setUsers] = useState<UsersResponseType>([])

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
          <p className="text-12">id: {user.id}</p>
          <p className="text-12">name: {user.name}</p>
          <p className="text-12">email: {user.email}</p>
          <p className="text-12">
            emailVerified: {user.emailVerified.toString()}
          </p>
          <p className="text-12">role: {user.role}</p>
          <p className="text-12">createdAt: {user.createdAt.toString()}</p>
          <p className="text-12">updatedAt: {user.updatedAt.toString()}</p>
        </div>
      ))}
    </div>
  )
}
