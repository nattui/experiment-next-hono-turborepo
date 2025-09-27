import ButtonSignOut from "@/app/(auth)/signin/button-sign-out"
import SignInForm from "@/app/(auth)/signin/form"
import { getIsAuthenticated } from "@/utils/session"

export default async function SignInPage() {
  const isAuthenticated = await getIsAuthenticated()

  return (
    <div className="flex flex-col gap-y-16 p-16">
      <h1 className="text-24">Sign in page</h1>
      <p className="text-14 font-mono">
        isAuthenticated:{" "}
        <span className="text-primary-11">{isAuthenticated.toString()}</span>
      </p>
      {isAuthenticated ? <ButtonSignOut /> : <SignInForm />}
    </div>
  )
}
