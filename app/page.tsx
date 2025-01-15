import { prisma } from "@/lib/prisma";
import Post from "@/components/Post";

export default async function Home() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      include: {
        author: {
          select: {
            name: true,
            email: true
          }
        },
      },
    });

    if (!posts) {
      return (
        <main className="max-w-7xl mx-auto p-6">
          <div>No posts available</div>
        </main>
      );
    }

    return (
      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Post key={post.id} post={{...post, author: {...post.author, id: 0, password: ''}}} />
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