import type { Metadata } from "next";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { MenuBrowser } from "@/components/home/menu-browser";
import { PaperBackground } from "@/components/home/paper-background";
import Reveal from "@/components/Reveal";
import { Container, CtaButton, SectionLabel } from "@/components/home/shared";

export const metadata: Metadata = {
  title: "Menu — La Rissto Pizzeria",
  description: "Pełne menu pizzerii La Rissto: pizza, makarony, dania główne, przystawki, sałatki, burgery, desery i napoje.",
};

export default function MenuPage() {
  return (
    <PaperBackground>
      <Header />
      <main>
        <Container className="pb-16 pt-10 sm:pb-[min(8vw,100px)] sm:pt-[min(5vw,64px)]">
          <Reveal><SectionLabel centered>MENU</SectionLabel></Reveal>
          <Reveal delay={100}><h1 className="mt-3 text-center text-[42px] leading-tight sm:text-[clamp(38px,5.5vw,68px)]">Nasze menu</h1></Reveal>
          <Reveal delay={200}><p className="mx-auto mt-4 max-w-[620px] text-center text-[16px] text-muted sm:text-[clamp(14px,1.7vw,20px)]">
            Wybierz kategorię, aby szybciej znaleźć to, na co masz ochotę.
          </p></Reveal>
          <div className="mt-8 sm:mt-12"><MenuBrowser /></div>
          <Reveal className="mt-14 flex justify-center"><CtaButton href="/" icon="home">Wróć na stronę główną</CtaButton></Reveal>
        </Container>
      </main>
      <Footer />
    </PaperBackground>
  );
}
