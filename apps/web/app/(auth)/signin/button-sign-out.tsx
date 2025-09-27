"use client"

import { API } from "@/utils/url"
import { Button, type ButtonProps } from "@nattui/react-components"
import { useRouter } from "next/navigation"
import type { MouseEvent } from "react"

function ButtonSignOut(props: ButtonProps) {
  const { variant = "secondary" } = props

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
    <Button variant={variant} onClick={onSubmit} {...props}>
      Sign Out
    </Button>
  )
}

export default ButtonSignOut
