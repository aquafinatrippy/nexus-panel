import * as z from "zod";

export const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  body: z.string().min(1, { message: "body is required" }),
  author: z.string().min(1, { message: "Author is required" }),
  date: z.string().min(1, { message: "Date is required" }),
});
