import { redirect } from "next/navigation"
import ButtonSignOut from "@/app/(auth)/signin/button-sign-out"
import SignUpForm from "@/app/(auth)/signup/form"
import { getIsAuthenticated } from "@/utils/session"

export default async function SignUpPage() {
  const isAuthenticated = await getIsAuthenticated()

  if (isAuthenticated) redirect("/")

  return (
    <div className="flex flex-col gap-y-16 p-16">
      <h1 className="text-24">Sign up page</h1>
      <p className="font-mono text-14">
        isAuthenticated:{" "}
        <span className="text-primary-11">{isAuthenticated.toString()}</span>
      </p>
      {isAuthenticated ? <ButtonSignOut variant="primary" /> : <SignUpForm />}
    </div>
  )
}
