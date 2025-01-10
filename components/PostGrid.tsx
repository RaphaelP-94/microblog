import { Post as PostType, User } from "@prisma/client";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  posts: (PostType & {
    author: User | null;
  })[];
}

export default function PostGrid({ posts = [] }: Props) {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">Latest Posts</h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Blog Posts
        </p>
        
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {posts.map((post, index) => {
            const isLarge = index === 0 || index === posts.length - 1;
            const isMiddle = index === 2;
            
            return (
              <Link 
                key={post.id}
                href={`/posts/${post.id}`}
                className={cn(
                  "relative",
                  isLarge && "lg:row-span-2",
                  isMiddle && "lg:col-start-2 lg:row-start-2",
                  index === 0 && "max-lg:row-start-1",
                  index === posts.length - 1 && "max-lg:row-start-3"
                )}
              >
                <div className={cn(
                  "absolute inset-px rounded-lg bg-white",
                  index === 0 && "lg:rounded-l-[2rem]",
                  index === posts.length - 1 && "lg:rounded-r-[2rem]"
                )}></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                      {post.title}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-xs text-gray-600">
                          {/* {post.author?.name.charAt(0)} */}
                        </span>
                      </div>
                      <small className="text-sm/6 text-gray-600">
                        By {post.author?.name || "Anonymous"}
                      </small>
                    </div>
                  </div>
                </div>
                <div className={cn(
                  "pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5",
                  index === 0 && "lg:rounded-l-[2rem]",
                  index === posts.length - 1 && "lg:rounded-r-[2rem]"
                )}></div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}