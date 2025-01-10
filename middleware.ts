import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/drafts',
    '/create',
    '/api/posts/:path*/publish',
    '/api/posts/:path*/delete',
    '/api/posts/create'
  ]
}