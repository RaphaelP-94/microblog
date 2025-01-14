import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

type RouteContext = {
  params: Promise<{ postId: string }>
}

export async function PUT(
  request: NextRequest,
  context: RouteContext
) {
  const params = await context.params;
  const postId = parseInt(params.postId);
  const post = await prisma.post.update({
    where: { id: postId },
    data: { published: true }
  });

  return NextResponse.json(post);
}

export async function DELETE(
  request: NextRequest,
  context: RouteContext
) {
  const params = await context.params;
  const postId = parseInt(params.postId);
  const post = await prisma.post.delete({
    where: { id: postId }
  });

  return NextResponse.json(post);
}