import Image from "next/image";
import { Brand, Container } from "./shared";

export function Header() {
  return (
    <header className="bg-paper-frame/25">
      <Container>
        <div className="relative flex min-h-[105px] items-center justify-between gap-5 border-b-2 border-[#aaa99f] py-4 sm:h-[min(12.8vw,154px)] sm:min-h-0 sm:pl-[8%]">
          <a href="#" aria-label="La Rissto — strona główna"><Brand /></a>
          <nav aria-label="Nawigacja główna" className="flex items-center gap-5 text-[14px] sm:ml-auto sm:mr-[15%] sm:gap-[min(6.8vw,82px)] sm:text-[clamp(13px,1.7vw,20px)]">
            {[["O nas", "o-nas"], ["Menu", "menu"], ["Kontakt", "kontakt"]].map(([label, id]) => (
              <a className="py-3 underline-offset-4 hover:underline" key={id} href={`#${id}`}>{label}</a>
            ))}
          </nav>
          <Image src="/images/olive-header-transparent.png" width={1316} height={1195} alt=""
            className="absolute right-0 top-[18%] hidden h-[65%] w-auto -rotate-[18deg] opacity-75 sm:block" />
        </div>
      </Container>
    </header>
  );
}
