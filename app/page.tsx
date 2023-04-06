import Header from "@/components/Header";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="w-[70%] h-full flex flex-col items-center">
        <Header />
        <div className="w-full h-14 mt-14 flex items-center justify-center">
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
          <h1 className="text-6xl text-center mt-10 font-bold ">
            Next.js 13 app folder <br /> Blog with Contentlayer
          </h1>
        </div>
      </div>
    </main>
  );
}
