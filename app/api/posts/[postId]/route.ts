import prisma from "@/lib/prisma";

interface Params {
  params: {
    id: string;
  };
}

import { NextResponse } from 'next/server';
// import prisma from '@/lib/prisma';

export async function PUT(
  request: Request,
  { params }: { params: { postId: string } }
) {
  const post = await prisma.post.update({
    where: { id: parseInt(params.postId) },
    data: { published: true }
  });

  return NextResponse.json(post);
}

// Deleting a post
// DELETE /api/posts/:postId
export async function DELETE(request: Request, { params }: { params: { postId: string } }) {
  const postId = Number(params.postId);
  await prisma.post.delete({
    where: {
      id: postId,
    },
  });
  return new Response("success", { status: 200 });
}
