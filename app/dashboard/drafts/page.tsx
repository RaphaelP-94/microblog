import { prisma } from "@/lib/prisma";
import Post from "@/components/Post";
import Link from "next/link";

export default async function DraftsPage() {
  const drafts = await prisma.post.findMany({
    where: { 
      published: false 
    },
    include: {
      author: true,
    },
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Drafts</h1>
        <Link 
          href="/create" 
          className="px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors font-medium"
        >
          Create New Post
        </Link>
      </div>
      <div className="grid gap-6">
        {drafts.map((draft) => (
          <Post key={draft.id} post={draft} />
        ))}
      </div>
    </div>
  );
}