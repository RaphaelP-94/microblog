import prisma from "@/lib/prisma";
import PostDetails from "@/components/PostDetails";

export default async function PostPage({ params }: { params: { postId: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.postId)
    },
    include: {
      author: true
    }
  });

  if (!post) {
    return <div>Post not found</div>;
  }


  return <PostDetails {...post} />;
}

// This is correct using [postId]
