import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="w-full h-24 border-b-2 flex px-6">
      <Link href="/" className="w-1/2 h-full flex items-center justify-start">
        <Image src="/next.svg" alt="next.js svg" width={100} height={100} />
        <h1 className="font-semibold ml-2  text-[1.800rem]">BLOG</h1>
      </Link>
      <Link
        href="https://vercel.com"
        target="_blank"
        className="w-1/2 h-full flex items-center justify-end"
      >
        <Image src="/vercel.svg" alt="vercel svg" width={30} height={30} />
      </Link>
    </header>
  );
}

export default Header;
