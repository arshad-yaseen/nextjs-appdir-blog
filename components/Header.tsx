import Image from "next/image";
import React from "react";
import * as Logo from 'geist/logos';


function Header() {
  return (
    <div className="w-full h-24 border-b-2 flex">
      <div className="w-1/2 h-full flex items-center justify-start">
        <Image src="/next.svg" alt="next.js svg" width={100} height={100} />
        <h1 className="font-medium ml-2  text-[1.800rem]">BLOG</h1>
      </div>
      <div className="w-1/2 h-full flex items-center justify-end">
      <Logo.VercelMark size={16} />
      </div>
    </div>
  );
}

export default Header;
