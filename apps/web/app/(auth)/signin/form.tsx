"use client"

import { API } from "@/utils/url"
import { Button } from "@nattui/react-components"
import { useRouter } from "next/navigation"
import type { FormEvent } from "react"

export default function SignInForm() {
  const router = useRouter()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // const formData = new FormData(event.target as HTMLFormElement)
    // const email = formData.get("email")

    try {
      await fetch(API.AUTH.SIGNIN)
      router.refresh()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className="flex flex-col max-w-240" onSubmit={onSubmit}>
      <label className="inline-block w-fit mb-2" htmlFor="email">
        Email
      </label>
      <input
        className="border-amber-100 border border-solid px-4 h-36 mb-16"
        defaultValue="test@test.com"
        id="email"
        name="email"
        type="email"
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}
