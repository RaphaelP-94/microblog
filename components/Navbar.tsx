"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();

  const handleLogout = () => {
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-sm border-b sticky top-0 z-50">
      <Link 
        href="/" 
        className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
      >
        Blog
      </Link>
      <div className="flex gap-4 items-center">
        {isLoggedIn ? (
          <>
            <Link 
              href="/dashboard" 
              className="px-4 py-2 rounded-lg bg-[#4682B4] text-white hover:bg-[#357599] transition-colors font-medium"
            >
              Dashboard
            </Link>
            <button 
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-50 transition-colors font-medium"
            >
              Logout
            </button>
          </>
        ) : (
          <Link 
            href="/login" 
            className="px-4 py-2 rounded-lg bg-[#4682B4] text-white hover:bg-[#357599] transition-colors font-medium"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}