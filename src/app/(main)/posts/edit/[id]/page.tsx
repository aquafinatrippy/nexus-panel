"use client";

import { BackButton } from "@/components/common/BackButton";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import posts from "../../../../../../data/posts";
import * as z from "zod";
import { formSchema } from "./schema";
import { useParams } from "next/navigation";

const PostEditPage = () => {
  const params = useParams<{ id: string }>();
  const post = posts.find((mappedPost) => mappedPost.id === params.id);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title,
      body: post?.body,
      author: post?.author,
      date: post?.date,
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <>
      <BackButton text="Back to Posts" link="/posts" />
      <h3 className="text-2xl-mb-4">Edit post</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs text-zinc-500 dark:text-secondary">
                  Title
                </FormLabel>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs text-zinc-500 dark:text-secondary">
                  body
                </FormLabel>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormControl>
                  <Textarea
                    className="bg-slate-100 dark:bg-slate-500 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs text-zinc-500 dark:text-secondary">
                  body
                </FormLabel>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs text-zinc-500 dark:text-secondary">
                  body
                </FormLabel>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormControl>
                  <Textarea
                    className="bg-slate-100 dark:bg-slate-500 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Enter title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full dark:bg-slate-800 dark:text-white">Update Post</Button>
        </form>
      </Form>
    </>
  );
};

export default PostEditPage;
