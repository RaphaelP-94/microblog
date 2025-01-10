import { prisma } from "@/lib/prisma";
import PostGrid from "@/components/PostGrid";

export default async function PublishedPage() {
  const published = await prisma.post.findMany({
    where: { 
      published: true 
    },
    include: {
      author: true,
    },
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Published Posts</h1>
      <PostGrid posts={published} />
    </div>
  );
}
