"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span" | "p" | "figure";
};

/**
 * 渐进增强式滚动显现：
 * - SSR / 无 JS：内容直接可见（SEO 与可访问性兜底）
 * - 客户端挂载后：仅对"视口外"元素启用隐藏态，进入视口再显现
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let io: IntersectionObserver | null = null;

    raf = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const below = rect.top > vh * 0.96;
      const above = rect.bottom < -40;

      if (!below && !above) {
        // 已在视口内：保持可见
        return;
      }

      setHidden(true);
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setHidden(false);
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
      );
      io.observe(el);
    });

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal-anim ${hidden ? "reveal-hidden" : "reveal-visible"} ${className}`}
      style={hidden ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
