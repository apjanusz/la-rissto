import type { Metadata } from "next";
import { Footer } from "@/components/home/footer";
import { GalleryGrid } from "@/components/home/gallery-grid";
import { Header } from "@/components/home/header";
import { PaperBackground } from "@/components/home/paper-background";
import Reveal from "@/components/Reveal";
import { Container, CtaButton, SectionLabel } from "@/components/home/shared";

export const metadata: Metadata = {
  title: "Galeria — La Rissto Pizzeria",
  description: "Zajrzyj do La Rissto: zdjęcia naszych pizz, przystawek, deserów, koktajli i wnętrza lokalu.",
};

export default function GalleryPage() {
  return (
    <PaperBackground>
      <Header />
      <main>
        <Container className="pb-16 pt-10 sm:pb-[min(8vw,100px)] sm:pt-[min(5vw,64px)]">
          <Reveal><SectionLabel centered>GALERIA</SectionLabel></Reveal>
          <Reveal delay={100}><h1 className="mt-3 text-center text-[42px] leading-tight sm:text-[clamp(38px,5.5vw,68px)]">Smak w obrazach</h1></Reveal>
          <Reveal delay={200}><p className="mx-auto mt-4 max-w-[620px] text-center text-[16px] text-muted sm:text-[clamp(14px,1.7vw,20px)]">
            Kilka chwil z naszej kuchni, baru i sali. Kliknij zdjęcie, aby je powiększyć.
          </p></Reveal>
          <div className="mt-9 sm:mt-14"><GalleryGrid /></div>
          <Reveal className="mt-14 flex justify-center"><CtaButton href="/menu" icon="book">Zobacz menu</CtaButton></Reveal>
        </Container>
      </main>
      <Footer />
    </PaperBackground>
  );
}
