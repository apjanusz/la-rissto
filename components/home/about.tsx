import Image from "next/image";
import { Container, SectionLabel } from "./shared";

export function About() {
  return (
    <section id="o-nas" aria-labelledby="about-title" className="bg-paper-shade/20 py-10 sm:py-[min(4vw,48px)]">
      <Container className="grid items-center gap-10 sm:grid-cols-[1.06fr_0.94fr] sm:gap-[6%]">
        <div className="relative aspect-[331/378] overflow-hidden rounded-[3px]">
          <Image src="/images/restaurant.webp" alt="Przytulne wnętrze pizzerii La Rissto z drewnianymi stołami i ciepłym oświetleniem" fill sizes="(max-width: 639px) 100vw, (max-width: 1200px) 46vw, 550px" className="object-cover" />
        </div>
        <div className="relative self-stretch py-4 sm:pt-[10%]">
          <SectionLabel>O NAS</SectionLabel>
          <h2 id="about-title" className="mt-4 text-[39px] leading-[1.08] tracking-[-0.025em] sm:mt-[min(2vw,24px)] sm:text-[clamp(32px,4.8vw,57.6px)]">Pasja do<br />włoskiej kuchni</h2>
          <p className="relative z-10 mt-6 text-[17px] leading-[1.55] text-muted sm:mt-[min(2.8vw,34px)] sm:text-[clamp(14px,1.95vw,23.4px)]">
            La Rissto to miejsce, gdzie tradycja spotyka się z nowoczesnością. Naszą misją jest serwowanie prawdziwej włoskiej pizzy, przygotowywanej z najwyższej jakości składników, w przyjaznej i rodzinnej atmosferze.
          </p>
          <Image src="/images/signature-transparent.png" width={2043} height={770} alt="Cucina Italiana" className="relative z-10 mt-8 h-auto w-[180px] opacity-80 sm:mt-[min(3.8vw,46px)] sm:w-[46%]" />
          <Image src="/images/olive-transparent.png" width={1305} height={1206} alt="" className="absolute -right-2 -bottom-2 h-auto w-[110px] -rotate-[17deg] opacity-60 sm:w-[34%]" />
        </div>
      </Container>
    </section>
  );
}
