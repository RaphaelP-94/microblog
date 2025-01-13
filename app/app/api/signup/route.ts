import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const data = await request.json();
    const user = await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
        },
    });
    return NextResponse.json(user);
}
