import { auth } from "@/auth"
import { SignInGithubAction, SignOutAction } from "@/lib/actions"
import { ROUTES } from "@lib/constants"
import Image from "next/image"
import Link from "next/link"

const Navbar = async () => {
  const session = await auth()

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src="/YConnectify_Logo.png"
            alt="logo"
            width={144}
            height={54}
            typeof="image/png"
            priority
          />
        </Link>
        <div className="flex items-center gap-5 text-slate-900">
          {session && session?.user ? (
            <>
              <Link href={ROUTES.STARTUP.CREATE}>
                <span>Create</span>
              </Link>

              <form action={SignOutAction}>
                <button type="submit">Logout</button>
              </form>

              <Link href={`/user/${session.user.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form action={SignInGithubAction}>
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  )
}
export default Navbar
