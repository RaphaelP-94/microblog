import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req, { params }) {
  const post = await prisma.post.findUnique({
    where: { id: Number(params.postId) }
  })

  const response = NextResponse.json(post)
  
  // Enable CORS
  response.headers.set('Access-Control-Allow-Origin', 'https://9n3pm.csb.app')
  response.headers.set('Access-Control-Allow-Methods', 'GET')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  
  return response
}

// export async function OPTIONS(req) {
//   const response = new NextResponse(null, { status: 200 })
  
//   response.headers.set('Access-Control-Allow-Origin', 'https://9n3pm.csb.app')
//   response.headers.set('Access-Control-Allow-Methods', 'GET')
//   response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  
//   return response
// }
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

  export async function OPTIONS() {
    const response = new NextResponse(null, { status: 200 })
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type')

    return response
  }  