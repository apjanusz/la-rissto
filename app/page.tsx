import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { Hero } from "@/components/home/hero";
import { Menu } from "@/components/home/menu";
import { PaperBackground } from "@/components/home/paper-background";

export default function Home() {
  return (
    <PaperBackground>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Contact />
      </main>
      <Footer />
    </PaperBackground>
  );
}
