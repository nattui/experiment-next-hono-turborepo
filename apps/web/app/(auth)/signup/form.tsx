"use client"

import { Button } from "@nattui/react-components"
import { useRouter } from "next/navigation"
import { type FormEvent, useState } from "react"
import { API } from "@/utils/url"

export default function SignUpForm() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // const formData = new FormData(event.target as HTMLFormElement)
    // const email = formData.get("email")
    setIsLoading(true)
    try {
      const response = await fetch(API.AUTH.SIGNUP)
      if (!response.ok) {
        throw new Error("Failed to sign up.")
      }
      router.refresh()
    } catch {
      setIsLoading(false)
    }
  }

  return (
    <form className="flex max-w-240 flex-col" onSubmit={onSubmit}>
      <label className="mb-2 inline-block w-fit text-14" htmlFor="email">
        Email
      </label>
      <input
        className="border-amber-100 mb-16 h-36 border border-solid px-4"
        defaultValue="test@test.com"
        id="email"
        name="email"
        type="email"
      />
      <Button isLoading={isLoading} type="submit">
        Sign up
      </Button>
    </form>
  )
}
