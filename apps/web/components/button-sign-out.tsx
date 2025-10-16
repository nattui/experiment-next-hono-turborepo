"use client"

import { Button, type ButtonProps } from "@nattui/react-components"
import { useRouter } from "next/navigation"
import { type MouseEvent, useState } from "react"
import { trpc } from "@/utils/client"

function ButtonSignOut(props: ButtonProps) {
  const { variant = "secondary" } = props

  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  async function onSubmit(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    setIsLoading(true)
    try {
      await trpc.authSignoutCredential.mutate()
      router.push("/signin")
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
