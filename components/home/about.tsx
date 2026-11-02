import Image from "next/image";
import Reveal from "../Reveal";
import { Container } from "./shared";

export function About() {
  return (
    <section id="o-nas" aria-labelledby="about-title" className="relative overflow-hidden bg-[linear-gradient(to_bottom,#f4ede1_0%,#f4ede1_80%,rgba(244,237,225,0)_100%)] pb-16 pt-12 sm:pb-[min(8vw,100px)] sm:pt-[min(5vw,64px)]">
      {/* delikatny wzór — wtapia hero w sekcję */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(#d6c9ae_1px,transparent_1.3px)] [background-size:24px_24px] opacity-45 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_65%,transparent)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-20 size-[300px] rounded-full bg-[#e8dcc7]/70 sm:-right-[6%] sm:-top-[8%] sm:size-[min(30vw,380px)]" />
      <Image src="/images/olive-header-transparent.png" width={1316} height={1195} alt="" className="pointer-events-none absolute -left-6 -top-4 h-auto w-[130px] opacity-70 sm:w-[min(17vw,220px)]" />
      <Image src="/images/olive-transparent.png" width={1305} height={1206} alt="" className="pointer-events-none absolute -bottom-3 -right-4 h-auto w-[120px] -rotate-[17deg] opacity-70 sm:w-[min(20vw,260px)]" />

      <Container className="relative grid items-center gap-12 sm:grid-cols-[1fr_1fr] sm:gap-[7%]">
        <Reveal direction="left" className="relative">
          <div aria-hidden="true" className="absolute -left-4 bottom-[-5%] top-[16%] w-[72%] rounded-t-full bg-[#e8dcc7]/70 sm:-left-[9%]" />
          <div className="relative aspect-[9/10] overflow-hidden rounded-tr-[110px] shadow-[0_24px_50px_-28px_rgba(60,45,20,0.6)] sm:rounded-tr-[clamp(120px,17vw,220px)]">
            <Image src="/images/restaurant.webp" alt="Przytulne wnętrze pizzerii La Rissto z drewnianymi stołami i ciepłym oświetleniem" fill sizes="(max-width: 639px) 100vw, (max-width: 1200px) 46vw, 550px" className="object-cover" />
          </div>
        </Reveal>

        <Reveal direction="right" delay={180} className="relative">
          <div className="flex items-center gap-5 sm:gap-8">
            <span className="text-[11px] tracking-[0.38em] text-muted sm:text-[clamp(11px,1.3vw,16px)]">O NAS</span>
            <span aria-hidden="true" className="h-[2px] w-[min(30vw,220px)] bg-[linear-gradient(90deg,#398350,#e5dfd1_50%,#ce4940)]" />
          </div>
          <h2 id="about-title" className="mt-5 text-[40px] leading-[1.08] tracking-[-0.025em] sm:mt-[min(2.4vw,30px)] sm:text-[clamp(34px,5.2vw,68px)]">Pasja do<br />włoskiej kuchni</h2>
          <div className="relative mt-7 pl-6 sm:mt-[min(3.4vw,44px)] sm:pl-[min(3vw,38px)]">
            <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[2px] bg-[linear-gradient(to_bottom,#398350,#e5dfd1_50%,#ce4940)]" />
            <p className="text-[17px] leading-[1.6] text-muted sm:text-[clamp(14px,1.9vw,23px)]">
              La Rissto to miejsce, gdzie tradycja spotyka się z nowoczesnością. Naszą misją jest serwowanie prawdziwej włoskiej pizzy, przygotowywanej z najwyższej jakości składników, w przyjaznej i rodzinnej atmosferze.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
