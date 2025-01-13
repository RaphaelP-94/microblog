import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-sm">
      <Link href="/" className="text-xl font-bold text-gray-800">
        Blog
      </Link>
      <div>
        <Link 
          href="/login" 
          className="px-4 py-2 rounded-lg bg-[#4682B4] text-white hover:bg-[#357599] transition-colors"
        >
          Account
        </Link>
      </div>
    </nav>
  );
}
