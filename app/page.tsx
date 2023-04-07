import Header from "@/components/Header";
import styles from "./page.module.css";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="sm:w-[70%] w-full h-full flex flex-col relative items-center">
        <Header />

        <div>
          <div className="w-full h-14 sm:mt-16 mt-6 flex items-center justify-center">
            <Link
              href="https://github.com/arshad-yaseen/nextjs-appdir-blog"
              target="_blank"
            >
              <div className="py-2 px-3 text-sm transition-colors duration-200 text-[#4A5562] bg-white border rounded-full shadow-md border-[#D1D5DA] hover:bg-[#F3F4F6] flex items-center">
                <AiFillGithub className="text-xl mr-2" /> Star on GitHub
              </div>
            </Link>
          </div>
          <div className="w-full h-full flex flex-col items-center">
            <h1 className="md:text-6xl text-5xl sm:w-auto w-[280px] text-center text-slate-900 mt-10 font-bold ">
              Next.js 13 new appDir <br /> Blog with Contentlayer
            </h1>
            <p className="text-center leading-[1.8]  w-[280px] text-slate-500 mt-10 sm:w-[600px] md:w-[650px]">
              This is a blog app built with Next.js 13 app folder and
              Contentlayer. It is a great example of how to use Next.js 13 app
              folder and Contentlayer together.
            </p>
            <Link href="/posts">
              <div className="py-2 px-8 mt-14 text-lg w-fit transition-colors duration-200 text-white bg-slate-800 border rounded-full shadow-md border-[#D1D5DA] hover:bg-slate-700 flex items-center">
                Go to Blogs <BsArrowRightShort className="text-3xl ml-1" />
              </div>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
