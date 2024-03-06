import { z } from "zod";

export const formSchema = z.object({
  content: z
    .string()
    .min(1, { message: "入力してください" })
    .max(70, { message: "70文字まで" }),
  name: z.string().min(1, { message: "入力してください" }),
  title: z.string().min(1, { message: "入力してください" }),
});
