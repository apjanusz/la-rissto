import Image from "next/image";
import { ClockIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { restaurant } from "@/lib/restaurant";
import Reveal from "../Reveal";
import { ActionLink, Container, SectionLabel } from "./shared";

const contactIconClassName = "mt-[0.0625em] size-[1.25em] shrink-0";

export function Contact() {
  return (
    <section
      id="kontakt"
      aria-labelledby="contact-title"
      className="overflow-x-clip bg-paper-shade/20 py-10 sm:py-[min(3.8vw,46px)]"
    >
      <Container>
        <div className="grid gap-8 sm:grid-cols-[2fr_3fr] sm:items-start sm:gap-[5%]">
          <Reveal direction="left">
            <SectionLabel>KONTAKT</SectionLabel>
            <h2
              id="contact-title"
              className="mt-2 text-[38px] leading-tight sm:text-[clamp(32px,4.4vw,53px)]"
            >
              Odwiedź nas
            </h2>
            <address className="mt-3 space-y-2.5 text-[16px] leading-snug not-italic [font-variant-numeric:lining-nums] sm:text-[clamp(16px,1.6vw,22px)]">
              <div className="flex items-start gap-4">
                <MapPinIcon
                  aria-hidden="true"
                  className={contactIconClassName}
                />
                <p>
                  {restaurant.address}
                  <br />
                  {restaurant.city}
                </p>
              </div>
              <a
                href={restaurant.phoneHref}
                className="flex items-start gap-4 hover:underline"
              >
                <PhoneIcon
                  aria-hidden="true"
                  className={contactIconClassName}
                />
                {restaurant.phone}
              </a>
              <div className="flex items-start gap-4">
                <ClockIcon
                  aria-hidden="true"
                  className={contactIconClassName}
                />
                <div>
                  <h3 className="font-bold">Godziny otwarcia</h3>
                  <dl className="mt-1 text-[15px] sm:text-[clamp(15px,1.4vw,19px)]">
                    {restaurant.hours.map(([day, hours]) => (
                      <div
                        key={day}
                        className="grid grid-cols-[80px_1fr] gap-4 leading-[1.6] sm:grid-cols-[min(9vw,108px)_1fr]"
                      >
                        <dt>{day}</dt>
                        <dd>{hours}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </address>
            <Image
              src="/images/goodbye-final.png"
              alt="Do zobaczenia!"
              width={2043}
              height={770}
              className="mt-8 hidden h-auto w-[72%] opacity-80 sm:block"
            />
          </Reveal>
          <Reveal direction="right" delay={180}>
            <div className="overflow-hidden rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.809650735288!2d22.874756512341996!3d52.988822001298004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471fed0001cdb675%3A0xa5e3c8cb9034329f!2sLa%20Rissto%20-%20kuchnia%20w%C5%82oska!5e0!3m2!1spl!2spl!4v1793626324646!5m2!1spl!2spl"
                title="Mapa lokalizacji La Rissto - kuchnia włoska"
                className="block aspect-[6/5] w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <Image
              src="/images/goodbye-final.png"
              alt="Do zobaczenia!"
              width={2043}
              height={770}
              className="mx-auto mt-10 h-auto w-[210px] opacity-80 sm:hidden"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
