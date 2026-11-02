/* Pizza widziana z góry — rysunek liniowy z przezroczystymi wypełnieniami, w kolorach włoskiej flagi.
   Białe, z niewielką liczbą dodatków. Używana w tle mobilnego menu. */

import type { CSSProperties } from "react";

export type PizzaVariant = "pepperoni" | "margherita" | "olive";

const CREAM = "#ffffff";
const RED = "#ffffff";
const GREEN = "#ffffff";

const polar = (r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  return { x: +(50 + r * Math.cos(a)).toFixed(2), y: +(50 + r * Math.sin(a)).toFixed(2) };
};

const ring = (n: number, r: number, offset = 0) => Array.from({ length: n }, (_, i) => polar(r, offset + (360 / n) * i));

const pepperoni = ring(4, 23, 45);
const basil = ring(3, 22, 90);
const mozzarella = ring(3, 22, 30);
const olives = ring(5, 24, 18);
const mushrooms = ring(2, 12, 100);

function Leaf({ x, y, rot }: { x: number; y: number; rot: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <path d="M0 -8C6 -4.5 6 4.5 0 8C-6 4.5 -6 -4.5 0 -8Z" fill={GREEN} fillOpacity="0.18" stroke={GREEN} strokeWidth="1.1" />
      <path d="M0 -6V6" stroke={GREEN} strokeWidth="0.8" />
    </g>
  );
}

export function PizzaIcon({ variant = "pepperoni", className = "", style }: { variant?: PizzaVariant; className?: string; style?: CSSProperties }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 100" className={className} style={style} fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* brzeg: ciasto z przypalonymi kropkami */}
      <circle cx="50" cy="50" r="47" fill={CREAM} fillOpacity="0.1" stroke={CREAM} strokeWidth="1.6" />
      <circle cx="50" cy="50" r="43" stroke={CREAM} strokeOpacity="0.55" strokeWidth="1.4" strokeDasharray="0.1 5" />
      {/* sos */}
      <circle cx="50" cy="50" r="39" fill={RED} fillOpacity="0.05" stroke={CREAM} strokeWidth="1" />
      {/* linie cięcia */}
      <path d="M50 11v78M11 50h78M22.4 22.4l55.2 55.2M77.6 22.4 22.4 77.6" stroke={CREAM} strokeOpacity="0.4" strokeWidth="0.8" />

      {variant === "pepperoni" &&
        pepperoni.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="6.6" fill={RED} fillOpacity="0.18" stroke={CREAM} strokeWidth="1.3" />
            <circle cx={p.x - 1.8} cy={p.y - 1.4} r="0.9" fill={CREAM} fillOpacity="0.8" stroke="none" />
            <circle cx={p.x + 2} cy={p.y + 1.6} r="0.8" fill={CREAM} fillOpacity="0.8" stroke="none" />
            <circle cx={p.x + 0.4} cy={p.y + 2.8} r="0.6" fill={CREAM} fillOpacity="0.8" stroke="none" />
          </g>
        ))}

      {variant === "margherita" && (
        <>
          {mozzarella.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="7.4" fill={CREAM} fillOpacity="0.14" stroke={CREAM} strokeOpacity="0.8" strokeWidth="1" />
          ))}
          {basil.map((p, i) => (
            <Leaf key={i} x={p.x} y={p.y} rot={i * 67} />
          ))}
        </>
      )}

      {variant === "olive" && (
        <>
          {mushrooms.map((p, i) => (
            <g key={i} transform={`translate(${p.x} ${p.y}) rotate(${i * 72})`}>
              <path d="M-6 1.5C-6 -6 6 -6 6 1.5Z" fill={CREAM} fillOpacity="0.22" stroke={CREAM} strokeWidth="1.1" />
              <path d="M-2 1.5v5h4v-5" fill={CREAM} fillOpacity="0.22" stroke={CREAM} strokeWidth="1.1" />
            </g>
          ))}
          {olives.map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="3.8" fill="#ffffff" fillOpacity="0.12" stroke={GREEN} strokeWidth="1.3" />
              <circle cx={p.x} cy={p.y} r="1.3" stroke={GREEN} strokeWidth="0.9" />
            </g>
          ))}
        </>
      )}
    </svg>
  );
}
