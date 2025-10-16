import { client } from "@/utils/client"

export default async function TestPage() {
  const data = await client.test.query()

  return (
    <div>
      <p>{data}</p>
    </div>
  )
}
