import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { title, content } = await request.json();

  const post = await prisma.post.create({
    data: {
      title,
      content,
      published: true,
      author: {
        create: {
          name: "Janagar John",
        },
      },
    },
  });

  return NextResponse.json({ post });
}
