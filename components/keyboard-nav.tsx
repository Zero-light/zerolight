"use client";

import { useEffect } from "react";

export default function KeyboardNav({
  prev,
  next,
}: {
  prev?: string;
  next?: string;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;
      if (e.key === "ArrowLeft" && prev) {
        e.preventDefault();
        location.href = prev;
      }
      if (e.key === "ArrowRight" && next) {
        e.preventDefault();
        location.href = next;
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return null;
}
