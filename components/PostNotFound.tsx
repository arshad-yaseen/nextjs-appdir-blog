import React from "react";
import Header from "./Header";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

function PostNotFound() {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-[70%] h-full flex flex-col ">
        <Header />
        <div className="w-full h-fit flex  px-48 pt-32 flex-col text-xl items-center">
          <h1>Post not found</h1>
          <Link href="/posts">
            <div className="py-2 px-4 mt-10 text-sm w-fit transition-colors duration-200 text-white bg-slate-800 border rounded-full shadow-md border-[#D1D5DA] hover:bg-slate-700 flex items-center">
              <BsArrowLeftShort className="text-3xl mr-1" /> Go to Blogs
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostNotFound;
