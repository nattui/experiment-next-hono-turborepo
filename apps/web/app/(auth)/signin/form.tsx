"use client"

import ButtonSignOut from "@/app/(auth)/signin/button-sign-out"
import { API } from "@/utils/url"
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
    <form className="flex flex-col max-w-xs p-4 gap-y-2" onSubmit={onSubmit}>
      <label className="block" htmlFor="email">
        Email
      </label>
      <input
        className="border-amber-100 border border-solid h-10 px-1"
        defaultValue="test@test.com"
        id="email"
        name="email"
        type="email"
      />
      <button
        className="flex items-center justify-center border-amber-100 border border-solid py-1 cursor-pointer hover:opacity-50 transition-opacity"
        type="submit"
      >
        Submit
      </button>
      <ButtonSignOut />
    </form>
  )
}
