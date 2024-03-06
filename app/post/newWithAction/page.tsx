"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { insertPostAction } from "@/app/actions/insertPost";
import { formSchema } from "../schemas/formSchema";

const PostSubmit = () => {
  const form = useForm({
    defaultValues: { content: "", name: "", title: "" },
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form
        className="m-5 mx-auto w-1/2 space-y-8 rounded-lg bg-yellow-200 p-5 pt-8 shadow-lg"
        onSubmit={form.handleSubmit(async (x: z.infer<typeof formSchema>) => {
          try {
            insertPostAction(x);
          } catch (e) {
            console.error((e as Error).message);
          }
        })}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="名前" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="タイトル" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="内容"
                  {...field}
                  className="resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default PostSubmit;
