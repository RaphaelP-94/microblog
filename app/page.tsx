import { prisma } from "@/lib/prisma";
import Post from "@/components/Post";

export default async function Home() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      include: {
        author: true,
      },
    });

    return (
      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </main>
    );
  } catch (error) {
    return (
      <main className="max-w-7xl mx-auto p-6">
        <div>Loading posts...</div>
      </main>
    );
  }
}