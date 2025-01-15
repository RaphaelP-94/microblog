import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();import { NextResponse } from "next/server";

// GET /api
export async function GET() {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: true,
    },
  });
  return NextResponse.json(posts);
}
