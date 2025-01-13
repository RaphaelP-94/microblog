import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const posts = await prisma.post.findMany();
  
  // Create combined data object with posts and styles
  const exportData = {
    posts: posts,
    styles: {
      primaryColor: '#0070f3',
      fontFamily: 'Geist, sans-serif',
      maxWidth: '800px',
      // Add any other style properties you want to export
    }
  };
  
  const headers = {
    'Content-Disposition': 'attachment; filename="blog-export.json"',
    'Content-Type': 'application/json',
  };

  return new NextResponse(JSON.stringify(exportData, null, 2), { headers });
}