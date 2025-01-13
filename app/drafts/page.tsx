import prisma from "@/lib/prisma";
import Post from "@/components/Post";
// Either use styles or remove the import

export default async function DraftsPage() {
    const drafts = await prisma.post.findMany({
      where: {
        published: false,
      },
      include: {
        author: true,
      }
    })

    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">My Drafts</h1>
        <div className="grid gap-6">
          {drafts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
              <Post post={post} />
            </div>
          ))}
        </div>
      </div>
    )
}