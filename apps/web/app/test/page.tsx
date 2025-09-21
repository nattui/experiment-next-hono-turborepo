import { API } from "@/utils/url"

export default async function TestPage() {
  const response = await fetch(API.TEST, { cache: "no-store" })
  const data = await response.json()

  return <div>{data.data}</div>
}
