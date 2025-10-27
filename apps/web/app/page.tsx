import { Users } from "@/app/users"

export default function HomePage() {
  return (
    <div className="flex flex-col p-16">
      <h1 className="text-24 mb-16">Home page</h1>
      <Users />
    </div>
  )
}
