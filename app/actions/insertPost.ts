"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import db from "@/lib/db";
import { formSchema } from "../post/schemas/formSchema";

export const insertPostAction = async (x: z.infer<typeof formSchema>) => {
  await db.post.create({ data: x });

  revalidatePath("/");
  redirect("/");
};
