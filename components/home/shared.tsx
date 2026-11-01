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
