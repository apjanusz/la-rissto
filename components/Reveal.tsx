"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
  /** Skąd element wjeżdża. Domyślnie delikatnie od dołu. */
  direction?: "up" | "left" | "right" | "none";
}

const Reveal: React.FC<RevealProps> = ({
  children,
  duration = 900,
  delay = 0,
  className = "",
  direction = "up",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-direction={direction}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`reveal ${isVisible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
