import Link from "next/link"
import ButtonSignOut from "@/app/(auth)/signin/button-sign-out"

interface NavbarProps {
  isAuthenticated: boolean
}

export function Navbar(props: NavbarProps) {
  const { isAuthenticated } = props

  return (
    <header className="flex h-64 items-center gap-16 px-16">
      <Link
        className={`
          text-primary-11 transition-colors
          hover:text-primary-12 hover:underline
        `}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`
          text-primary-11 transition-colors
          hover:text-primary-12 hover:underline
        `}
        href="/test"
      >
        Test
      </Link>
      {!isAuthenticated && (
        <Link
          className={`
            text-primary-11 transition-colors
            hover:text-primary-12 hover:underline
          `}
          href="/signin"
        >
          Sign in
        </Link>
      )}

      {isAuthenticated && <ButtonSignOut />}
    </header>
  )
}
