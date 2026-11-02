"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "../Reveal";
import { galleryPath, galleryPhotos } from "@/lib/gallery";

function Arrow({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={dir === "prev" ? "m15 5-7 7 7 7" : "m9 5 7 7-7 7"} />
    </svg>
  );
}

function Lightbox({ index, onClose, onMove }: { index: number; onClose: () => void; onMove: (step: number) => void }) {
  const photo = galleryPhotos[index];
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onMove(-1);
      if (e.key === "ArrowRight") onMove(1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onMove]);

  const btn = "grid size-11 place-items-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur transition-colors hover:bg-white/15";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Podgląd zdjęcia: ${photo.title}`}
      className="fixed inset-0 z-[70] flex flex-col bg-black/90 text-white backdrop-blur-md"
      onClick={onClose}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) onMove(dx < 0 ? 1 : -1);
      }}
    >
      <div className="flex items-center justify-between px-5 pt-5 sm:px-8">
        <span className="text-[14px] tracking-[0.2em] text-white/70">{index + 1} / {galleryPhotos.length}</span>
        <button type="button" aria-label="Zamknij podgląd" onClick={(e) => { e.stopPropagation(); onClose(); }} className={btn} autoFocus>
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 py-4 sm:px-20">
        <button type="button" aria-label="Poprzednie zdjęcie" onClick={(e) => { e.stopPropagation(); onMove(-1); }} className={`${btn} absolute left-3 z-10 max-sm:hidden sm:left-6`}><Arrow dir="prev" /></button>
        <Image
          key={photo.src}
          src={galleryPath(photo.src)}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="100vw"
          priority
          onClick={(e) => e.stopPropagation()}
          className="h-auto max-h-full w-auto max-w-full object-contain shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]"
        />
        <button type="button" aria-label="Następne zdjęcie" onClick={(e) => { e.stopPropagation(); onMove(1); }} className={`${btn} absolute right-3 z-10 max-sm:hidden sm:right-6`}><Arrow dir="next" /></button>
      </div>

      <div className="flex items-center justify-center gap-4 px-5 pb-6 sm:pb-8">
        <button type="button" aria-label="Poprzednie zdjęcie" onClick={(e) => { e.stopPropagation(); onMove(-1); }} className={`${btn} sm:hidden`}><Arrow dir="prev" /></button>
        <p className="text-center text-[22px] leading-tight sm:text-[26px]">{photo.title}</p>
        <button type="button" aria-label="Następne zdjęcie" onClick={(e) => { e.stopPropagation(); onMove(1); }} className={`${btn} sm:hidden`}><Arrow dir="next" /></button>
      </div>
    </div>
  );
}

export function GalleryGrid() {
  const [open, setOpen] = useState<number | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setOpen(null);
    lastTrigger.current?.focus();
  }, []);
  const move = useCallback((step: number) => {
    setOpen((i) => (i === null ? i : (i + step + galleryPhotos.length) % galleryPhotos.length));
  }, []);

  return (
    <>
      <ul className="columns-2 gap-3 sm:columns-3 sm:gap-5">
        {galleryPhotos.map((p, i) => (
          <li key={p.src} className="mb-3 break-inside-avoid sm:mb-5">
            <Reveal delay={(i % 3) * 90}>
              <button
                type="button"
                aria-label={`Powiększ zdjęcie: ${p.title}`}
                onClick={(e) => { lastTrigger.current = e.currentTarget; setOpen(i); }}
                className="group relative block w-full overflow-hidden bg-paper-light p-1.5 text-left shadow-[0_14px_30px_-18px_rgba(32,33,30,0.65)] transition-shadow duration-300 hover:shadow-[0_20px_36px_-16px_rgba(32,33,30,0.75)] sm:p-2"
              >
                <span className="relative block overflow-hidden">
                  <Image
                    src={galleryPath(p.src)}
                    alt={p.alt}
                    width={p.width}
                    height={p.height}
                    sizes="(max-width: 639px) 50vw, (max-width: 1200px) 33vw, 380px"
                    className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-2.5 pt-10 text-[16px] leading-tight text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-sm:hidden">
                    {p.title}
                  </span>
                </span>
              </button>
            </Reveal>
          </li>
        ))}
      </ul>
      {open !== null && <Lightbox index={open} onClose={close} onMove={move} />}
    </>
  );
}
