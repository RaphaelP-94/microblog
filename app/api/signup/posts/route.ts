import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

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
