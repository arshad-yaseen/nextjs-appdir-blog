import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="w-full h-24 border-b-2 flex px-6">
      <Link
        href="/"
        className="sm:w-1/2 w-[80%] h-full flex items-center justify-start"
      >
        <Image
          src="/next.svg"
          alt="next.js svg"
          width={100}
          height={100}
          className="w-[100px] h-[100px]"
          priority
        />
        <h1 className="font-semibold ml-2  text-[1.800rem]">BLOG</h1>
      </Link>
      <Link
        href="https://vercel.com"
        target="_blank"
        className="sm:w-1/2 w-[20%] h-full flex items-center justify-end"
      >
        <Image
          src="/vercel.svg"
          alt="vercel svg"
          width={30}
          height={30}
          className="w-[30px] h-[30px]"
          priority
        />
      </Link>
    </header>
  );
}

export default Header;
