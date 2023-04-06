import Header from "@/components/Header";
import React from "react";
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";

export const metadata = {
  title: "Blogs - Next.js App Dir Blog",
};

function PostCard(post: Post) {
  return (
    <Link
      href={post.url}
      className="w-full h-full cursor-pointer flex group pb-8 flex-col items-center"
    >
      <p className="text-sm mb-2 text-slate-500 ">
        {format(parseISO(post.date), "LLLL d, yyyy")} • {post.author}
      </p>
      <h1 className="text-xl font-regular group-hover:border-b-slate-900 transition-all duration-300 border-b border-b-white text-slate-900 ">
        {post.title}
      </h1>
    </Link>
  );
}

function page() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-[70%] h-full flex flex-col ">
        <Header />

        <div className="w-full h-fit overflow-auto space-y-10 flex flex-col px-48 pt-20">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
