import { client } from "@/utils/client"

export default async function TestPage() {
  const response = await client.test.$get()
  const data = await response.json()

  return <div>{data.data}</div>
}
