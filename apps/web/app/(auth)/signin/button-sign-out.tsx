"use client"

import { API } from "@/utils/url"
import { useRouter } from "next/navigation"
import type { MouseEvent } from "react"

function ButtonSignOut() {
  const router = useRouter()

  async function onSubmit(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    try {
      await fetch(API.AUTH.SIGNOUT)
      router.refresh()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <button
      className="flex items-center justify-center border-amber-100 border border-solid py-1 cursor-pointer hover:opacity-50 transition-opacity"
      onClick={onSubmit}
      type="button"
    >
      Sign Out
    </button>
  )
}

export default ButtonSignOut
