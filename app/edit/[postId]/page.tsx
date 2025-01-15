import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function EditPost({ params }: { params: { postId: string } }) {
  const post = await prisma.post.findUnique({
    where: { id: parseInt(params.postId) },
  });

  async function handleSubmit(formData: FormData) {
    'use server';
    
    const title = String(formData.get('title'));
    const content = String(formData.get('content'));
    // const imageUrl = String(formData.get('imageUrl'));

    await prisma.post.update({
      where: { id: parseInt(params.postId) },
      data: { title, content },
    });

    redirect(`/posts/${params.postId}`);
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Post</h1>
        <form action={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="title"
              defaultValue={post?.title}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Title"
            />
          </div>
          <div>
            <textarea
              name="content"
              defaultValue={post?.content || ""}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={8}
              placeholder="Content"
            />
          </div>
          <div className="flex gap-4 justify-end">
            <Link
              href={`/posts/${params.postId}`}
              className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors font-medium"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}