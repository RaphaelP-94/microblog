import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req) {
  const apiKey = req.headers.get('x-api-key')
  
  if (apiKey !== 'blog2025') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const posts = await prisma.post.findMany({
    include: { author: true },
    orderBy: {
      createdAt: 'asc'
    }
  })

  const styledPosts = posts.map(post => ({
    ...post,
    title: `<h1 class="h1">${post.title}</h1>`
  }))

  const response = NextResponse.json(styledPosts)
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-api-key')
  
  return response
}

export async function OPTIONS() {
  const response = new NextResponse(null, { status: 200 })
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-api-key')
  return response
}