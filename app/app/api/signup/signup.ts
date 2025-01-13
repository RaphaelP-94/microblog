import prisma from "@/lib/prisma";

interface User {
    name: string;
    email: string;
}

export default async function POST(request: Request) {

  const user: User = await request.json();
  await prisma.user.create({
    data: {
      name: user.name,
      email: user.email,
    }
  })
  // do not need to send response back to client but need to return something
  return new Response("success", {
    status: 201,
  });
}