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

  const response = NextResponse.json(post)
  
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  
  return response
}

export async function DELETE(request, context) {
  const postId = parseInt(context.params.postId);
  const post = await prisma.post.delete({
    where: { id: postId }
  });

  return NextResponse.json(post);
}
