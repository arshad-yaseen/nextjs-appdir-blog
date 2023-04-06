import Header from "@/components/Header";
import React from "react";

function page() {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-[70%] h-full flex flex-col ">

        <Header />

        <div className="w-full h-fit overflow-auto space-y-10 flex flex-col px-48 pt-20">
          <div className="w-full h-full cursor-pointer flex border-b pb-8 flex-col items-center">
            <p className="text-sm mb-2 text-slate-500 ">
              April 9, 2023 • Lee Robinson
            </p>
            <h1 className="text-xl font-regular text-slate-900 ">
              Vercel introducing serverless functions and combining with AWS
            </h1>
          </div>
          <div className="w-full h-full cursor-pointer flex border-b pb-8 flex-col items-center">
            <p className="text-sm mb-2 text-slate-500 ">
              April 6, 2023 • Arshad Yaseen
            </p>
            <h1 className="text-xl font-regular text-slate-900 ">
              Build a blog app with new Next.js 13 app folder and Contentlayer
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
