import MyCards from "@/components/MyCards";
import { Post } from "@/types/Post";

async function getAllPostsFromAPI() {
  const fetchRes = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  return (await fetchRes.json()) as Post[];
}

export default async function Home() {
  const allPosts = await getAllPostsFromAPI();

  return (
    <main>
      <MyCards posts={allPosts} />
    </main>
  );
}
