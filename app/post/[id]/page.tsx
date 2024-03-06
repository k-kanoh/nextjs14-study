import React from "react";
import Link from "next/link";
import { Post } from "@/types/Post";

async function getPostFromAPI(id: number) {
  const fetchRes = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });

  return (await fetchRes.json()) as Post;
}

interface Params {
  id: string;
}

const PostDetail = async ({ params }: { params: Params }) => {
  const id = parseInt(params.id);
  if (Number.isNaN(id)) {
    return (
      <div className="m-10 mx-auto max-w-4xl rounded-lg bg-red-100 p-4 text-red-700 shadow-lg">
        <p>値が不正です</p>
      </div>
    );
  }

  const post = await getPostFromAPI(id);

  return (
    <div className="m-10 mx-auto max-w-4xl rounded-lg bg-blue-100 p-10 shadow-lg">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="text-gray-400">{post.name}</p>
      </div>

      <div className="mb-8">
        <p className="text-gray-900">{post.content}</p>
      </div>

      <Link
        className="rounded-md bg-black px-4 py-2 font-bold text-white"
        href={"/"}
      >
        戻る
      </Link>
    </div>
  );
};

export default PostDetail;
