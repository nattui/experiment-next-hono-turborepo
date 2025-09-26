import ButtonSignOut from "@/app/(auth)/signin/button-sign-out"
import SignInForm from "@/app/(auth)/signin/form"
import { getIsAuthenticated } from "@/utils/session"

export default async function SignInPage() {
  const isAuthenticated = await getIsAuthenticated()

  return (
    <div>
      <p>Sign in page</p>
      {isAuthenticated ? <ButtonSignOut /> : <SignInForm />}
      <p>
        Auth status:{" "}
        <span className="text-yellow-200">{isAuthenticated.toString()}</span>
      </p>
    </div>
  )
}
