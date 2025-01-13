import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PUT(
  request: Request,
  { params }: { params: { postId: string } }
) {
  const postId = parseInt(params.postId);
  const post = await prisma.post.update({
    where: { id: postId },
    data: { published: true }
  });

  return NextResponse.json(post);
}

export async function DELETE(
  request: Request,
  { params }: { params: { postId: string } }
) {
  const postId = parseInt(params.postId);
  const post = await prisma.post.delete({
    where: { id: postId }
  });

  return NextResponse.json(post);
}