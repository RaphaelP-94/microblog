import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PUT(req, { params }) {
  const postId = params.postId
  const body = await req.json()

  const post = await prisma.post.update({
    where: { id: Number(postId) },
    data: {
      title: body.title,
      content: body.content,
      published: body.published,
    },
  })

  return NextResponse.json(post)
}

export async function DELETE(request, context) {
  const postId = parseInt(context.params.postId);
  const post = await prisma.post.delete({
    where: { id: postId }
  });

  return NextResponse.json(post);
}
