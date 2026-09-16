"use client";

import { useEffect } from "react";

export default function HeroFx() {
  useEffect(() => {
    const el = document.getElementById("hero-content");
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const vh = window.innerHeight;
        if (y < vh) {
          el.style.transform = `translateY(${(y * 0.22).toFixed(1)}px)`;
          el.style.opacity = String(Math.max(0, 1 - y / (vh * 0.85)));
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      el.style.transform = "";
      el.style.opacity = "";
    };
  }, []);

  return null;
}
