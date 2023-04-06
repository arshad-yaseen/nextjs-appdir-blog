import Header from "@/components/Header";
import styles from "./page.module.css";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="w-[70%] h-full flex flex-col items-center">
        <Header />
        <Hero />

        
       
      </div>
    </main>
  );
}
