import Image from "next/image";
import { restaurant } from "@/lib/restaurant";
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
    <section id="kontakt" aria-labelledby="contact-title" className="bg-paper-shade/20 py-10 sm:py-[min(3.8vw,46px)]">
      <Container>
        <div className="grid gap-8 sm:grid-cols-[0.95fr_1fr] sm:items-center sm:gap-[7%] sm:px-[4.8%]">
          <div>
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
            <div className="mt-5"><ActionLink href={restaurant.mapHref} external compact>Zobacz na mapie</ActionLink></div>
          </div>
          <div className="sm:pt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.809650735288!2d22.874756512341996!3d52.988822001298004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471fed0001cdb675%3A0xa5e3c8cb9034329f!2sLa%20Rissto%20-%20kuchnia%20w%C5%82oska!5e1!3m2!1spl!2spl!4v1793563610460!5m2!1spl!2spl"
              title="Mapa lokalizacji La Rissto — kuchnia włoska"
              className="aspect-[4/3] w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <Image src="/images/goodbye-final.png" alt="Do zobaczenia!" width={2043} height={770} className="mt-4 h-auto w-[160px] opacity-80 sm:w-[46%]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
