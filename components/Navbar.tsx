import { getServerSession } from 'next-auth'
import Link from 'next/link'

export default async function Navbar() {
  const session = await getServerSession()

  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-sm border-b sticky top-0 z-50">
      <Link 
        href="/" 
        className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
      >
        Blog
      </Link>
      <div className="flex gap-4 items-center">
        <Link 
          href="/dashboard" 
          className="px-4 py-2 rounded-lg bg-[#4682B4] text-white hover:bg-[#357599] transition-colors font-medium"
        >
          Dashboard
        </Link>
        {session ? (
          <Link 
            href="/api/auth/signout"
            className="px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-50 transition-colors font-medium"
          >
            Logout
          </Link>
        ) : (
          <Link 
            href="/login" 
            className="px-4 py-2 rounded-lg bg-[#333] text-white hover:bg-[#357599] transition-colors font-medium"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}