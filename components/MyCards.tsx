import React from "react";
import { Post } from "@/types/Post";
import MyCard from "./MyCard";

interface Props {
  posts: Post[];
}

const MyCards: React.FC<Props> = ({ posts }) => {
  return (
    <div className="grid gap-4 p-4 lg:grid-cols-5">
      {posts.map((x) => (
        <MyCard key={x.id} post={x} />
      ))}
    </div>
  );
};

export default MyCards;
