"use client"

import { API } from "@/utils/url"
import type { FormEvent } from "react"

export default function SignInForm() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const email = formData.get("email")
    console.log(":::: email:", email)

    try {
      const response = await fetch(API.AUTH.SIGNIN)
      const data = await response.json()
      console.log(":::: data:", data)
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
        className="border-amber-100 border border-solid"
        id="email"
        name="email"
        type="email"
      />
      <button
        className="flex items-center justify-center border-amber-100 border border-solid"
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}
