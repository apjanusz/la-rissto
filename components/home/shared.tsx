import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-6 sm:px-[3.8%] ${className}`}>{children}</div>;
}

export function Tricolor({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`flex h-[2px] w-[min(16vw,190px)] ${className}`}>
      <span className="flex-1 bg-[#398350]" />
      <span className="flex-1 bg-[#e5dfd1]" />
      <span className="flex-1 bg-[#ce4940]" />
    </span>
  );
}

export function SectionLabel({ children, centered = false }: { children: ReactNode; centered?: boolean }) {
  return (
    <div className={`text-[10px] tracking-[0.38em] text-muted sm:text-[clamp(10px,1.4vw,16px)] ${centered ? "text-center" : ""}`}>
      {children}
      <Tricolor className={`mt-2 ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}

export function Brand({ small = false }: { small?: boolean }) {
  return (
    <span className={`inline-flex flex-col items-center leading-none ${small ? "text-[28px] sm:text-[clamp(26px,3.6vw,43px)]" : "text-[36px] sm:text-[clamp(34px,5.2vw,62px)]"}`}>
      <span>La Rissto</span>
      <span className={`mt-1 font-sans font-extrabold tracking-wide ${small ? "text-[11px] sm:text-[clamp(10px,1.4vw,17px)]" : "text-[15px] sm:text-[clamp(14px,2.1vw,25px)]"}`}>PIZZERIA</span>
      <Tricolor className={`mt-1 h-[3px] ${small ? "w-[min(10vw,120px)]" : "w-[min(13vw,156px)]"}`} />
    </span>
  );
}

export function ActionLink({ children, href, external = false, compact = false, showArrow = true }: { children: ReactNode; href: string; external?: boolean; compact?: boolean; showArrow?: boolean }) {
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-11 items-center justify-center gap-5 bg-ink text-[#f5f1e8] transition-colors hover:bg-[#3e4036] sm:gap-[2vw] ${compact ? "px-5 py-2 text-[13px] sm:min-h-0 sm:px-[min(3vw,36px)] sm:py-[min(1vw,12px)] sm:text-[clamp(12px,1.6vw,19px)]" : "px-6 py-2.5 text-[14px] sm:px-[min(3.5vw,42px)] sm:py-[min(1.3vw,16px)] sm:text-[clamp(14px,1.9vw,23px)]"}`}>
      {children}
      {showArrow && <span aria-hidden="true" className="text-2xl leading-none text-[#b3b3a8]">⟶</span>}
    </a>
  );
}

const ctaIcons = {
  utensils: <><path d="M3 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6a2 2 0 0 0 2 2h3Zm0 0v7" /></>,
  book: <><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3Z" /></>,
  home: <><path d="M3 11 12 3l9 8" /><path d="M5 10v10h14V10" /></>,
};

export function CtaButton({ children, href, icon, className = "" }: { children: ReactNode; href: string; icon: keyof typeof ctaIcons; className?: string }) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex min-h-[52px] items-center gap-5 overflow-hidden rounded-full bg-ink py-2 pl-8 pr-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#f5f1e8] shadow-[0_14px_28px_-14px_rgba(32,33,30,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3e4036] hover:shadow-[0_18px_32px_-14px_rgba(32,33,30,0.75)] sm:min-h-[58px] sm:text-[clamp(13px,1.35vw,16px)] ${className}`}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="grid size-10 place-items-center rounded-full bg-[#f5f1e8] text-ink transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 sm:size-11">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{ctaIcons[icon]}</svg>
      </span>
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 flex h-[3px]">
        <span className="flex-1 bg-[#398350]" />
        <span className="flex-1 bg-[#e5dfd1]" />
        <span className="flex-1 bg-[#ce4940]" />
      </span>
    </Link>
  );
}
