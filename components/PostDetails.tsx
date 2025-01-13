"use client";

import { Post, User } from "@prisma/client";
import Markdown from "markdown-to-jsx";
import { useRouter } from "next/navigation";
import Image from 'next/image'

type Props = Post & {
  author: User | null;
};

export default function PostDetails({
  id,
  author,
  title,
  content,
  published,
  imageUrl,
}: Props) {
  const router = useRouter();

  async function publishPost() {
    await fetch(`/api/posts/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ published: true })
    });
    router.refresh();
    router.push("/dashboard");
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <article className="bg-white rounded-xl shadow-lg overflow-hidden">
        {imageUrl && (
          <div className="w-full aspect-[21/9]">
            <Image 
              src={imageUrl} 
              alt={title}
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-8">
          <h1>{title}</h1>
          
          <p className="text-gray-600 mb-8">
            by {author?.name || "anonymous"}
          </p>
          
          <section className="prose prose-lg max-w-none mb-8">
            <Markdown>{content || ""}</Markdown>
          </section>
          
          {!published && (
            <div className="flex gap-4 justify-end">
              <button 
                onClick={() => router.push(`/edit/${id}`)}
                className="px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors font-medium"
              >
                Edit
              </button>
              <button 
                onClick={publishPost}
                className="px-6 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors font-medium"
              >
                Publish
              </button>
            </div>
          )}
        </div>
      </article>
    </main>
  );
}