import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  const allPosts = await db.post.findMany();

  return NextResponse.json(allPosts);
}

export async function POST(req: Request) {
  try {
    const { content, name, title } = await req.json();

    await db.post.create({ data: { content, name, title } });

    return new NextResponse("success", {
      headers: { "Content-Type": "text/plain" },
      status: 200,
    });
  } catch (e) {
    return new NextResponse((e as Error).message, {
      headers: { "Content-Type": "text/plain" },
      status: 500,
    });
  }
}
