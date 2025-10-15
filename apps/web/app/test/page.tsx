import { trpc } from "@/utils/client"

export default async function TestPage() {
  const data = await trpc.test.query()

  return (
    <div>
      <p>{data}</p>
    </div>
  )
}
