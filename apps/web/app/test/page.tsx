import { API } from "@/utils/url"

export default async function TestPage() {
  const response = await fetch(API.TEST)
  const data = await response.json()

  return <div>{data.data}</div>
}
