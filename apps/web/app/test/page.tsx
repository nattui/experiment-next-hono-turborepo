import { clientTrpc } from "@/utils/client"

export default async function TestPage() {
  const data = await clientTrpc.test.query()

  return (
    <div>
      <p>{data}</p>
    </div>
  )
}
