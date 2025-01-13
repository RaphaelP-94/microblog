import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  const apiKey = request.headers.get('x-api-key');
  
  if (apiKey !== process.env.EXPORT_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const posts = await prisma.post.findMany();
  
  const headers = {
    'Content-Disposition': 'attachment; filename="blog-posts-export.json"',
    'Content-Type': 'application/json',
  };

  return new NextResponse(JSON.stringify(posts, null, 2), { headers });
}