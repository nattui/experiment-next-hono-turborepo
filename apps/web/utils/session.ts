"server-only"

import { cookies as getCookies } from "next/headers"
import { API } from "@/utils/url"

export async function getIsAuthenticated(): Promise<boolean> {
  try {
    const cookies = await getCookies()
    const response = await fetch(API.AUTH.VERIFY, {
      cache: "no-store",
      headers: {
        Cookie: cookies.toString(),
      },
    })
    if (!response.ok) return false
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
