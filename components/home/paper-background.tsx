import type { ReactNode } from "react";

export function PaperBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative isolate min-h-screen bg-paper">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/paper-natural.webp')] bg-cover bg-center bg-no-repeat opacity-60" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_12%_18%,#c3ad8420,transparent_26%),radial-gradient(ellipse_at_88%_45%,#b8a07c18,transparent_30%),radial-gradient(ellipse_at_20%_75%,#fffdf54d,transparent_32%)]" />
      {children}
    </div>
  );
}
