import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

function Hero() {
  return (
    <div>
      <div className="w-full h-14 mt-8 flex items-center justify-center">
        <Link
          href="https://github.com/arshad-yaseen/nextjs-appdir-blog"
          target="_blank"
        >
          <div className="py-2 px-3 text-sm transition-colors text-[#4A5562] bg-white border rounded-full shadow-md border-[#D1D5DA] hover:bg-[#F3F4F6] flex items-center">
            <AiFillGithub className="text-xl mr-2" /> Star on GitHub
          </div>
        </Link>
      </div>
      <div className="w-full h-full">
        <h1 className="text-6xl text-center text-slate-900 mt-10 font-bold ">
          Next.js 13 app folder <br /> Blog with Contentlayer
        </h1>
      </div>
    </div>
  );
}

export default Hero;
