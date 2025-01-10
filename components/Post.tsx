import { Post as PostType, User } from "@prisma/client";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  post: PostType & {
    author: User | null;
  }
}

export default function Post({post}: Props) {
  const authorName = post.author ? post.author.name : "Anonymous";
  
  return (
    <Link 
      href={`/posts/${post.id}`} 
      className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-gray-200 flex flex-col h-full"
    >
      {post.imageUrl && (
        <div className="aspect-video w-full mb-4 overflow-hidden rounded-lg">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
      )}
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-4">
          {post.title}
        </h2>
        <small className="text-gray-600">By {authorName}</small>
      </div>
    </Link>
  );
}