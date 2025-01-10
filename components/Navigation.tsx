import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-sm">
      <Link href="/" className="text-xl font-bold text-gray-800">
        Blog
      </Link>
      <div>
        <Link 
          href="/login" 
          className="px-4 py-2 rounded-lg bg-steelblue text-white hover:bg-blue-600 transition-colors"
        >
          Account
        </Link>
      </div>
    </nav>
  );
}