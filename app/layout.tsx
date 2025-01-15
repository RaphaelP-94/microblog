import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Microblog",
  description: "The new Next.js 15 blog",
  icons: {
    icon: '/favicon.png',
  }
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({
  children}: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}