import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const posts = await request.json();
    
    // Clear existing posts
    await prisma.post.deleteMany();
    
    // Import new posts
    const imported = await prisma.post.createMany({
      data: posts,
    //   skipDuplicates: true,
    });

    return NextResponse.json({ 
      success: true, 
      imported: imported.count 
    });
    
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid JSON format' },
      { status: 400 }
    );
  }
}