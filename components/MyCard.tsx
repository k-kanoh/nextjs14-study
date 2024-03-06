import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post } from "@/types/Post";

interface Prop {
  post: Post;
}

const MyCard: React.FC<Prop> = ({ post }) => {
  return (
    <Card className="lg:min-h-72">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.name}</CardDescription>
      </CardHeader>
      <CardContent>{post.content}</CardContent>
      <CardFooter className="flex justify-between">
        <Link className="text-blue-500" href={`/post/${post.id}`}>
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default MyCard;
