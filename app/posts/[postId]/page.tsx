import prisma from "@/lib/prisma";
import PostDetails from "@/components/PostDetails";

export default async function PostPage({ params }: { params: { postId: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.postId)
    },
    include: {
      author: true
    }
  })
  
  return (
    <>
      {!post ? (
        <div>Post not found</div>
      ) : (
        <PostDetails {...post} />
      )}
    </>
  )
}

// This is correct using [postId]
