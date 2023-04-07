import Link from "next/link";
import React from "react";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer className="w-full h-20 border-t lg:flex hidden px-6 absolute bottom-0">
      <div className="w-1/2 h-full flex items-center justify-start">
        <p className="text-sm text-slate-900">
          Powered by{" "}
          <Link href="https://contentlayer.dev" target="_blank" className="font-semibold hover:underline">Contentlayer</Link> and{" "}
          <Link href="https://vercel.com" target="_blank" className="font-semibold hover:underline">Vercel</Link>
        </p>
      </div>
      <div className="w-1/2 h-full flex items-center justify-end">
        <Link href="https://twitter.com/arshadyaseeen" target="_blank" ><AiOutlineTwitter className="text-2xl text-slate-500 ml-3" /></Link>
        <Link href="https://github.com/arshad-yaseen/nextjs-appdir-blog" target="_blank" ><AiFillGithub className="text-2xl text-slate-500 ml-3" /></Link> 
      </div>
    </footer>
  );
}

export default Footer;
