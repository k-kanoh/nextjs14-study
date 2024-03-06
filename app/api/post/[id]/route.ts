import { NextResponse } from "next/server";
import db from "@/lib/db";

interface Params {
  id: string;
}

export async function GET(req: Request, { params }: { params: Params }) {
  const id = parseInt(params.id);

  const post = await db.post.findUnique({
    where: { id: id },
  });

  return NextResponse.json(post);
}
