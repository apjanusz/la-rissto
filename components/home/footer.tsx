import Image from "next/image";
import Reveal from "../Reveal";
import { Brand, Container } from "./shared";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-paper-frame/25 py-10 sm:py-[min(3vw,36px)]">
      <Image src="/images/olive-header-transparent.png" width={1316} height={1195} alt="" className="absolute -left-5 top-4 hidden h-[85%] w-auto -rotate-[28deg] opacity-65 sm:block" />
      <Container>
        <Reveal className="grid justify-items-center gap-6 text-center sm:grid-cols-3 sm:items-center sm:gap-8 sm:px-[2%]">
          <a href="#" aria-label="La Rissto — wróć na początek" className="sm:justify-self-start sm:pl-[6%]"><Brand small /></a>
          <p className="text-[14px] leading-relaxed text-muted sm:text-[clamp(11px,1.3vw,16px)]">
            Włoska restauracja z sercem
            <span aria-hidden="true" className="px-3 max-sm:hidden">·</span>
            <br className="sm:hidden" />
            Łapy
          </p>
          <div className="flex items-center gap-6 sm:justify-self-end">
            <a href="https://www.facebook.com/profile.php?id=61581440979836" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg role="img" aria-label="Facebook" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="https://www.instagram.com/larisstolapy" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg role="img" aria-label="Instagram" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" /></svg>
            </a>
          </div>
        </Reveal>
        <p className="mt-8 border-t border-rule pt-5 text-center text-[13px] text-muted sm:text-[clamp(11px,1.1vw,13px)]">
          Stworzone przez{" "}
          <a href="https://wgpw-software.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 transition-colors hover:text-ink">wgpw-software</a>
        </p>
      </Container>
    </footer>
  );
}
