
// export const dynamic = 'force-dynamic'; // This way the page loads on every request and on the server;
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "About Us",
    description: "Share your best thoughts",
  };

export default function AboutPage() {
  return (
  <main>
    <h1>About us</h1>
    <p>We love to make apps like this one!</p>
  </main>
)}