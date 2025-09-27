import ButtonSignOut from "@/app/(auth)/signin/button-sign-out"
import Link from "next/link"

interface NavbarProps {
  isAuthenticated: boolean
}

export function Navbar(props: NavbarProps) {
  const { isAuthenticated } = props

  return (
    <header className="flex gap-16 items-center px-16 h-64">
      <Link
        className="text-primary-11 hover:text-primary-12 transition-colors hover:underline"
        href="/"
      >
        Home
      </Link>
      <Link
        className="text-primary-11 hover:text-primary-12 transition-colors hover:underline"
        href="/test"
      >
        Test
      </Link>
      {!isAuthenticated && (
        <Link
          className="text-primary-11 hover:text-primary-12 transition-colors hover:underline"
          href="/signin"
        >
          Sign in
        </Link>
      )}

      {isAuthenticated && <ButtonSignOut />}
    </header>
  )
}
