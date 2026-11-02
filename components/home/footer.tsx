import Image from "next/image";
import { PhoneIcon } from "@/components/icons";
import { restaurant } from "@/lib/restaurant";
import Reveal from "../Reveal";
import { Brand, Container } from "./shared";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-paper-frame/25 py-10 sm:py-[min(3vw,36px)]">
      <Image
        src="/images/olive-header-transparent.png"
        width={1316}
        height={1195}
        alt=""
        className="absolute -left-5 top-4 hidden h-[85%] w-auto -rotate-[28deg] opacity-65 sm:block"
      />
      <Container>
        <Reveal className="grid gap-8 sm:grid-cols-3 sm:items-start sm:gap-[8%] sm:px-[2%]">
          <div className="grid grid-cols-[auto_1fr] items-start gap-6 sm:block">
            <a
              href="#"
              aria-label="La Rissto - wróć na początek"
              className="inline-block"
            >
              <Brand small />
            </a>
            <div className="justify-self-end text-right sm:mt-4 sm:justify-self-auto sm:text-left">
              <p className="text-[16px] leading-relaxed text-muted sm:text-[clamp(16px,1.3vw,18px)]">
                Włoska restauracja z sercem
              </p>
              <div className="mt-5 flex items-center justify-end gap-3 sm:justify-start sm:gap-6">
              <a
                href="https://www.facebook.com/profile.php?id=61581440979836"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  role="img"
                  aria-label="Facebook"
                  viewBox="0 0 24 24"
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/larisstolapy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  role="img"
                  aria-label="Instagram"
                  viewBox="0 0 24 24"
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17"
                    cy="7"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              <a
                href={restaurant.phoneHref}
                aria-label="Zadzwoń do La Rissto"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-4 text-[14px] font-semibold text-[#f5f1e8] transition-colors hover:bg-[#3e4036] sm:px-6 sm:text-[clamp(13px,1.5vw,17px)]"
              >
                <PhoneIcon aria-hidden="true" className="size-4 shrink-0" />
                <span className="hidden min-[420px]:inline">Zadzwoń</span>
              </a>
              </div>
            </div>
          </div>

          <div className="text-[16px] leading-relaxed text-muted [font-variant-numeric:lining-nums] sm:text-[clamp(16px,1.3vw,18px)]">
            <h2 className="mb-3 text-[20px] leading-tight text-ink sm:text-[clamp(17px,1.8vw,22px)]">
              Kontakt
            </h2>
            <address className="not-italic">
              <p>
                {restaurant.address}
                <br />
                {restaurant.city}
              </p>
              <a
                href={restaurant.phoneHref}
                className="mt-1 inline-block hover:underline"
              >
                {restaurant.phone}
              </a>
            </address>
          </div>

          <div className="text-[16px] leading-relaxed text-muted [font-variant-numeric:lining-nums] sm:text-[clamp(16px,1.3vw,19px)]">
            <h2 className="mb-3 text-[20px] leading-tight text-ink sm:text-[clamp(17px,1.8vw,22px)]">
              Godziny otwarcia
            </h2>
            <dl className="space-y-1">
              {restaurant.hours.map(([day, hours]) => (
                <div
                  key={day}
                  className="grid grid-cols-[88px_1fr] gap-3 sm:grid-cols-[min(8vw,96px)_1fr]"
                >
                  <dt>{day}</dt>
                  <dd>{hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
        <p className="mt-8 border-t border-rule pt-5 text-center text-[15px] text-muted [font-variant-numeric:lining-nums]">
          © 2026 La Rissto. Wszystkie prawa zastrzeżone. {" "}
          <span className="mt-1 block sm:mt-0 sm:inline">
            Stworzone przez{" "}
            <a
              href="https://wgpw-software.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-ink"
            >
              wgpw-software
            </a>
          </span>
        </p>
      </Container>
    </footer>
  );
}
