import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const post = await prisma.post.update({
    where: { id: parseInt(params.id) },
    data: { published: true }
  });

  return NextResponse.json(post);
}
