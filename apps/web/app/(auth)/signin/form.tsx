"use client"

import { API } from "@/utils/url"
import { Button } from "@nattui/react-components"
import { useRouter } from "next/navigation"
import { useState, type FormEvent } from "react"

export default function SignInForm() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // const formData = new FormData(event.target as HTMLFormElement)
    // const email = formData.get("email")
    setIsLoading(true)
    try {
      const response = await fetch(API.AUTH.SIGNIN)
      if (!response.ok) {
        throw new Error("Failed to sign in.")
      }
      router.refresh()
    } catch {
      setIsLoading(false)
    }
  }

  return (
    <form className="flex flex-col max-w-240" onSubmit={onSubmit}>
      <label className="inline-block w-fit mb-2 text-14" htmlFor="email">
        Email
      </label>
      <input
        className="border-amber-100 border border-solid px-4 h-36 mb-16"
        defaultValue="test@test.com"
        id="email"
        name="email"
        type="email"
      />
      <Button isLoading={isLoading} type="submit">
        Sign in
      </Button>
    </form>
  )
}
