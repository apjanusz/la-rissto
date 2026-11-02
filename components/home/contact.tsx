import Image from "next/image";
import { restaurant } from "@/lib/restaurant";
import Reveal from "../Reveal";
import { ActionLink, Container, SectionLabel } from "./shared";

function ContactIcon({ type }: { type: "pin" | "phone" | "clock" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="mt-0.5 size-5 shrink-0 sm:size-[min(2.4vw,29px)]" fill={type === "clock" ? "none" : "currentColor"} stroke="currentColor" strokeWidth="1.8">
      {type === "pin" ? <><path d="M12 22s7-8.2 7-14a7 7 0 1 0-14 0c0 5.8 7 14 7 14Z" /><circle cx="12" cy="8" r="2.5" fill="#f4f0e5" stroke="none" /></> : type === "phone" ? <path d="m5 3 4 1 1 5-3 2c2 3 3 4 6 6l2-3 5 1 1 4c-1 6-10 1-14-3S0 4 5 3Z" /> : <><circle cx="12" cy="12" r="9" /><path d="M12 5v7l4 2" /></>}
    </svg>
  );
}

export function Contact() {
  return (
    <section id="kontakt" aria-labelledby="contact-title" className="overflow-x-clip bg-paper-shade/20 py-10 sm:py-[min(3.8vw,46px)]">
      <Container>
        <div className="grid gap-8 sm:grid-cols-[0.95fr_1fr] sm:items-center sm:gap-[7%] sm:px-[4.8%]">
          <Reveal direction="left">
            <SectionLabel>KONTAKT</SectionLabel>
            <h2 id="contact-title" className="mt-2 text-[38px] leading-tight sm:text-[clamp(32px,4.4vw,53px)]">Odwiedź nas</h2>
            <address className="mt-3 space-y-2.5 text-[15px] leading-snug not-italic sm:text-[clamp(12px,1.6vw,19px)]">
              <div className="flex gap-4"><ContactIcon type="pin" /><p>{restaurant.address}<br />{restaurant.city}</p></div>
              <a href={restaurant.phoneHref} className="flex items-center gap-4 hover:underline"><ContactIcon type="phone" />{restaurant.phone}</a>
              <div className="flex gap-4"><ContactIcon type="clock" /><div><h3 className="font-bold">Godziny otwarcia</h3>
                <dl className="mt-1 text-[13px] sm:text-[clamp(11px,1.4vw,17px)]">{restaurant.hours.map(([day, hours]) => (
                  <div key={day} className="grid grid-cols-[80px_1fr] gap-4 leading-[1.6] sm:grid-cols-[min(9vw,108px)_1fr]"><dt>{day}</dt><dd>{hours}</dd></div>
                ))}</dl>
              </div></div>
            </address>
            <div className="mt-5">
              <ActionLink href={restaurant.mapHref} external compact showArrow={false}>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 4 3 6.5V20l6-2.5 6 2.5 6-2.5V4l-6 2.5L9 4Z" /><path d="M9 4v13.5M15 6.5V20" /></svg>
                Zobacz na mapie
              </ActionLink>
            </div>
          </Reveal>
          <Reveal direction="right" delay={180} className="sm:pt-5">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=22.8665%2C52.9858%2C22.8830%2C52.9918&layer=mapnik&marker=52.988822%2C22.874756"
              title="Mapa lokalizacji La Rissto — kuchnia włoska"
              className="aspect-[4/3] w-full border-0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <Image src="/images/goodbye-final.png" alt="Do zobaczenia!" width={2043} height={770} className="mx-auto mt-4 h-auto w-[160px] opacity-80 sm:mx-0 sm:w-[46%]" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
