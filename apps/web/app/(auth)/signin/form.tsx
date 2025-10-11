"use client"

import { Button, Input, Label } from "@nattui/react-components"
import { useRouter } from "next/navigation"
import { type FormEvent, useState } from "react"
import { client } from "@/utils/client"

export default function SignInForm() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const email = formData.get("email")
    const password = formData.get("password")
    setIsLoading(true)
    try {
      const response = await client.auth.signin.credential.$post({
        json: { email, password },
      })
      if (!response.ok) {
        throw new Error("Failed to sign in.")
      }
      router.refresh()
    } catch {
      setIsLoading(false)
    }
  }

  return (
    <form className="flex max-w-240 flex-col" onSubmit={onSubmit}>
      <Label className="mb-2 inline-block w-fit text-14" htmlFor="email">
        Email
      </Label>
      <Input
        className="mb-16 h-36 border border-amber-100 border-solid px-4"
        defaultValue="test@test.com"
        id="email"
        isRequired
        name="email"
        type="email"
      />
      <Label className="mb-2 inline-block w-fit text-14" htmlFor="password">
        Password
      </Label>
      <Input
        className="mb-16 h-36 border border-amber-100 border-solid px-4"
        defaultValue="123123"
        id="password"
        isRequired
        name="password"
        type="password"
      />
      <Button isLoading={isLoading} type="submit">
        Sign in
      </Button>
    </form>
  )
}
