import Link from "next/link"

export function Navbar() {
  return (
    <header className="flex gap-16 items-center p-16">
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
      <Link
        className="text-primary-11 hover:text-primary-12 transition-colors hover:underline"
        href="/signin"
      >
        Signin
      </Link>
    </header>
  )
}
