"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PhoneIcon } from "@/components/icons";
import { restaurant } from "@/lib/restaurant";
import { PizzaIcon, type PizzaVariant } from "./pizza-icon";
import { Brand, Container } from "./shared";

const links = [
  ["O nas", "/#o-nas"],
  ["Menu", "/#menu"],
  ["Galeria", "/galeria"],
  ["Kontakt", "/#kontakt"],
] as const;

/* Pizze w tle mobilnego menu: pozycja + wariant + opóźnienie animacji */
const pizzaBackdrop: { cls: string; variant: PizzaVariant; delay: number }[] = [
  { cls: "-left-12 top-[5%] size-52 rotate-12", variant: "pepperoni", delay: 0 },
  { cls: "-right-10 top-[17%] size-40 -rotate-12", variant: "margherita", delay: 90 },
  { cls: "-left-14 top-[47%] size-36 rotate-45", variant: "olive", delay: 160 },
  { cls: "-right-16 bottom-[22%] size-56 rotate-[30deg]", variant: "pepperoni", delay: 230 },
  { cls: "-left-8 bottom-[5%] size-44 -rotate-[20deg]", variant: "margherita", delay: 300 },
  { cls: "right-[22%] -bottom-10 size-32 rotate-6", variant: "olive", delay: 370 },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#e6dcca]/95 shadow-[0_8px_24px_-12px_rgba(32,33,30,0.4)] backdrop-blur">
        <Container>
          <div className={`flex items-center justify-between gap-3 transition-[height,min-height] duration-300 sm:pl-[8%] ${scrolled ? "h-[76px] sm:h-[92px]" : "h-[105px] sm:h-[min(12.8vw,154px)]"}`}>
            <Link href="/" aria-label="La Rissto | Strona główna" className={`origin-left transition-transform duration-300 ${scrolled ? "scale-[0.78]" : "scale-100"}`}><Brand /></Link>
            <nav aria-label="Nawigacja główna" className="hidden items-center sm:ml-auto sm:mr-[min(4vw,48px)] sm:flex sm:gap-[min(5.5vw,68px)] sm:text-[clamp(13px,1.7vw,20px)]">
              {links.map(([label, href]) => (
                <Link className="py-3 underline-offset-4 hover:underline" key={href} href={href}>{label}</Link>
              ))}
            </nav>
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={restaurant.phoneHref}
                aria-label="Zadzwoń do La Rissto"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-4 text-[14px] font-semibold text-[#f5f1e8] transition-colors hover:bg-[#3e4036] sm:px-6 sm:text-[clamp(13px,1.5vw,17px)]"
              >
                <PhoneIcon aria-hidden="true" className="size-4 shrink-0" />
                <span className="hidden min-[420px]:inline">Zadzwoń</span>
              </a>
              <button
                type="button"
                aria-label="Otwórz menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen(true)}
                className="grid size-11 place-items-center rounded-full border border-[#8f8d80] sm:hidden"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu nawigacyjne"
        inert={!open}
        className={`fixed inset-0 z-[60] overflow-hidden bg-black/85 text-white backdrop-blur-md transition-opacity duration-300 sm:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        {pizzaBackdrop.map(({ cls, variant, delay }, i) => (
          <div
            key={cls}
            aria-hidden="true"
            style={{ transitionDelay: open ? `${delay}ms` : "0ms" }}
            className={`pointer-events-none absolute transition-[opacity,scale] duration-700 ease-out ${open ? "scale-100 opacity-[0.45]" : "scale-75 opacity-0"} ${cls}`}
          >
            <PizzaIcon variant={variant} style={{ animationDelay: `-${i * 1.7}s` }} className="size-full motion-safe:animate-[pizza-float_11s_ease-in-out_infinite]" />
          </div>
        ))}

        <div className="relative flex h-full flex-col px-6 pb-10 pt-6">
          <div className="flex items-center justify-between">
            <span className="text-[26px] leading-none">La Rissto</span>
            <button
              type="button"
              aria-label="Zamknij menu"
              onClick={() => setOpen(false)}
              className="grid size-11 place-items-center rounded-full border border-white/40"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <nav aria-label="Nawigacja mobilna" className="flex flex-1 flex-col items-center justify-center gap-2">
            {links.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="py-3 text-[40px] leading-none tracking-[-0.01em] transition-opacity hover:opacity-70">
                {label}
              </Link>
            ))}
            <span aria-hidden="true" className="mt-6 flex h-[2px] w-24">
              <span className="flex-1 bg-[#398350]" />
              <span className="flex-1 bg-[#e5dfd1]" />
              <span className="flex-1 bg-[#ce4940]" />
            </span>
          </nav>

          <a
            href={restaurant.phoneHref}
            className="mx-auto inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-white/60 px-8 text-[16px] font-semibold tracking-wide"
          >
            <PhoneIcon aria-hidden="true" className="size-5 shrink-0" />
            Zadzwoń
          </a>
        </div>
      </div>
    </>
  );
}
