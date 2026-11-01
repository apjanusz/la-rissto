import Image from "next/image";
import { Brand, Container } from "./shared";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-paper-frame/25 py-7 sm:py-[min(2.5vw,30px)]">
      <Image src="/images/olive-header-transparent.png" width={1316} height={1195} alt="" className="absolute -left-5 top-4 hidden h-[85%] w-auto -rotate-[28deg] opacity-65 sm:block" />
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6 sm:pl-[6.5%] sm:pr-[2%]">
          <a href="#" aria-label="La Rissto — wróć na początek"><Brand small /></a>
          <p className="text-[11px] text-muted sm:text-[clamp(9px,1.15vw,14px)]">Autentyczny smak Włoch <span className="px-3">·</span> Białystok</p>
          <div className="flex items-center gap-5">
            <span role="img" aria-label="Facebook — profil wkrótce" className="font-sans text-2xl font-bold">f</span>
            <svg role="img" aria-label="Instagram — profil wkrótce" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" /></svg>
          </div>
        </div>
      </Container>
    </footer>
  );
}
