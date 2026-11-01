import Image from "next/image";
import { pizzas } from "@/lib/restaurant";
import { Container, SectionLabel, Tricolor } from "./shared";

export function Menu() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="bg-paper-light/25 py-10 sm:pt-[min(3.6vw,43px)] sm:pb-[min(4.3vw,52px)]">
      <Container>
        <SectionLabel centered>MENU</SectionLabel>
        <h2 id="menu-title" className="mt-2 text-center text-[38px] leading-tight sm:text-[clamp(32px,4.5vw,54px)]">Nasze pizze</h2>
        <p className="mt-4 text-center text-[16px] text-muted sm:text-[clamp(14px,1.9vw,23px)]">Prawdziwa włoska pizza, wypiekana w piecu opalanym drewnem.</p>
        <div className="mt-7 grid sm:mt-[min(3vw,36px)] sm:grid-cols-2">
          {pizzas.map((pizza, index) => (
            <article key={pizza.name} className={`flex gap-4 border-rule py-5 sm:gap-[4%] sm:py-[min(2vw,24px)] ${index < 4 ? "border-b" : "max-sm:border-b last:border-b-0"} ${index % 2 === 0 ? "sm:border-r sm:pr-[4.5%]" : "sm:pl-[4.5%]"}`}>
              <div className="relative aspect-[113/108] w-[100px] shrink-0 sm:w-[36%]">
                <Image src={`/images/${pizza.image}.webp`} alt={`Pizza ${pizza.name}`} fill sizes="(max-width: 639px) 100px, (max-width: 1200px) 16vw, 186px" className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-1">
                  <h3 className="text-[18px] leading-tight sm:text-[clamp(15px,2vw,24px)]">{pizza.name}</h3>
                  <span className="shrink-0 whitespace-nowrap text-[12px] sm:text-[clamp(11px,1.5vw,18px)]">{pizza.price} zł</span>
                </div>
                <p className="mt-3 text-[14px] leading-[1.5] text-muted sm:mt-[min(1.3vw,16px)] sm:text-[clamp(12px,1.6vw,19px)]">{pizza.ingredients}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-[1000px] sm:mt-[min(3.3vw,40px)]">
          <div className="flex items-center gap-5"><span className="h-px flex-1 bg-rule" /><p className="text-[23px] italic sm:text-[clamp(18px,2.3vw,28px)]">Buon appetito!</p><span className="h-px flex-1 bg-rule" /></div>
          <Tricolor className="mx-auto mt-2 w-[min(12vw,140px)]" />
        </div>
      </Container>
    </section>
  );
}
