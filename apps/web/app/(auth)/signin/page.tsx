import SignInForm from "@/app/(auth)/signin/form"
import { getIsAuthenticated } from "@/utils/session"

export default async function SignInPage() {
  const isAuthenticated = await getIsAuthenticated()

  return (
    <div>
      <p>Sign in page</p>
      <SignInForm />
      <p>Auth status: {isAuthenticated.toString()}</p>
    </div>
  )
}
