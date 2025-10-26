import { orpc } from "@/utils/client"

export default async function TestPage() {
  const data = await orpc.test()

  return (
    <div>
      <p>{data}</p>
    </div>
  )
}
