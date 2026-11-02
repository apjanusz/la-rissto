"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "../Reveal";
import { menu, type MenuCategory, type MenuItem } from "@/lib/menu";
import { Tricolor } from "./shared";

const ALL = "wszystko";

function Item({ item }: { item: MenuItem }) {
  return (
    <li className="border-b border-rule py-4 sm:py-5">
      <div className="flex items-baseline gap-3">
        <h4 className="text-[18px] font-bold leading-tight sm:text-[clamp(18px,1.7vw,24px)]">
          {item.nazwa}
        </h4>
        <span
          aria-hidden="true"
          className="min-w-4 flex-1 -translate-y-1 border-b border-dotted border-[#b3ae9c]"
        />
        {item.ceny ? (
          <span className="flex shrink-0 gap-3 whitespace-nowrap text-[14px] sm:text-[clamp(13px,1.4vw,17px)]">
            {item.ceny.map((v) => (
              <span key={v.etykieta}>
                <span className="text-muted">{v.etykieta}</span>{" "}
                <span className="[font-variant-numeric:lining-nums]">{v.cena} zł</span>
              </span>
            ))}
          </span>
        ) : (
          <span className="shrink-0 whitespace-nowrap text-[15px] [font-variant-numeric:lining-nums] sm:text-[clamp(14px,1.5vw,18px)]">
            {item.cena} zł
          </span>
        )}
      </div>
      {item.skladniki && (
        <p className="mt-1.5 text-[16px] leading-[1.5] text-muted first-letter:uppercase sm:text-[clamp(16px,1.35vw,18px)]">
          {item.skladniki.join(", ")}
        </p>
      )}
    </li>
  );
}

function Category({ category }: { category: MenuCategory }) {
  return (
    <section
      aria-labelledby={`cat-${category.id}`}
      className="mt-10 first:mt-0 sm:mt-14"
    >
      <Reveal>
        <h2
          id={`cat-${category.id}`}
          className="text-[30px] leading-tight sm:text-[clamp(28px,3.4vw,42px)]"
        >
          {category.nazwa}
        </h2>
        <Tricolor className="mt-3" />
        {category.opis && (
          <p className="mt-4 text-[17px] text-muted sm:text-[clamp(17px,1.4vw,20px)]">
            {category.opis}
          </p>
        )}
        {category.grupy.map((group, i) => (
          <div key={group.nazwa ?? i} className="mt-4">
            {group.nazwa && (
              <h3 className="mt-5 text-[13px] uppercase tracking-[0.3em] text-muted">
                {group.nazwa}
              </h3>
            )}
            <ul className="grid sm:grid-cols-2 sm:gap-x-14">
              {group.pozycje.map((item) => (
                <Item key={item.nazwa} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

/* Pasek filtrów: na telefonie przewijany poziomo, z rozmytymi krawędziami po bokach (widocznymi tylko, gdy jest co przewijać) */
function EdgeBlur({
  side,
  visible,
}: {
  side: "left" | "right";
  visible: boolean;
}) {
  const left = side === "left";
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 z-10 w-14 backdrop-blur-[6px] transition-opacity duration-300 sm:hidden ${
        left
          ? "left-0 [mask-image:linear-gradient(to_right,black_25%,transparent)]"
          : "right-0 [mask-image:linear-gradient(to_left,black_25%,transparent)]"
      } ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <span
        className={`absolute inset-0 ${
          left ? "bg-gradient-to-r" : "bg-gradient-to-l"
        } from-[#f4efe3] via-[#f4efe3]/70 to-transparent`}
      />
    </span>
  );
}

export function MenuBrowser() {
  const [active, setActive] = useState(ALL);
  const [edges, setEdges] = useState({ left: false, right: true });
  const scroller = useRef<HTMLDivElement>(null);
  const filters = [
    { id: ALL, nazwa: "Wszystko" },
    ...menu.kategorie.map(({ id, nazwa }) => ({ id, nazwa })),
  ];
  const visible =
    active === ALL
      ? menu.kategorie
      : menu.kategorie.filter((c) => c.id === active);

  const updateEdges = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const left = el.scrollLeft > 4;
    const right = el.scrollLeft + el.clientWidth < el.scrollWidth - 4;
    setEdges((prev) =>
      prev.left === left && prev.right === right ? prev : { left, right }
    );
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  return (
    <>
      {/* top = wysokość zwężonego nagłówka, żeby pasek nie chował się pod nim */}
      <div className="sticky top-[76px] z-30 -mx-6 border-y border-rule bg-[#f4efe3]/95 backdrop-blur sm:top-[92px] sm:-mx-[3.8%]">
        <EdgeBlur side="left" visible={edges.left} />
        <EdgeBlur side="right" visible={edges.right} />
        <div
          ref={scroller}
          onScroll={updateEdges}
          role="group"
          aria-label="Filtruj menu"
          className="flex gap-2 overflow-x-auto px-6 py-3 [scrollbar-width:none] sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-[3.8%] [&::-webkit-scrollbar]:hidden"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={active === f.id}
              onClick={(e) => {
                setActive(f.id);
                e.currentTarget.scrollIntoView({
                  behavior: "smooth",
                  inline: "center",
                  block: "nearest",
                });
              }}
              className={`min-h-11 shrink-0 rounded-full border px-5 text-[14px] transition-colors sm:text-[clamp(14px,1.3vw,16px)] ${
                active === f.id
                  ? "border-ink bg-ink text-[#f5f1e8]"
                  : "border-[#aaa99f] hover:bg-ink/5"
              }`}
            >
              {f.nazwa}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 sm:mt-12">
        {visible.map((c) => (
          <Category key={`${active}-${c.id}`} category={c} />
        ))}
      </div>
    </>
  );
}
