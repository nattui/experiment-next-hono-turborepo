"use client"

import { API } from "@/utils/url"
import { Button, type ButtonProps } from "@nattui/react-components"
import { useRouter } from "next/navigation"
import { useState, type MouseEvent } from "react"

function ButtonSignOut(props: ButtonProps) {
  const { variant = "secondary" } = props

  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  async function onSubmit(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch(API.AUTH.SIGNOUT)
      if (!response.ok) {
        throw new Error("Failed to sign out.")
      }
      router.refresh()
    } catch {
      setIsLoading(false)
    }
  }

  return (
    <Button
      isLoading={isLoading}
      onClick={onSubmit}
      variant={variant}
      {...props}
    >
      Sign out
    </Button>
  )
}

export default ButtonSignOut
