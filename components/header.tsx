"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/works", label: "作品" },
  { href: "/journal", label: "日志" },
  { href: "/about", label: "关于" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mt-5 flex items-center justify-between rounded-full border border-line bg-void/55 px-5 py-3 backdrop-blur-xl">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-mono text-[13px] tracking-[0.18em] text-ink transition-colors hover:text-ember"
          >
            zerolight
          </Link>

          {/* 桌面导航 */}
          <nav className="hidden items-center gap-1.5 md:flex">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-full px-3.5 py-1.5 text-[13px] tracking-wide transition-colors ${
                    active
                      ? "bg-ember/10 text-ember"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* 移动端按钮 */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "关闭菜单" : "打开菜单"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-colors hover:border-ember/40 md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-ink transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-full bg-ink transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-px w-full bg-ink transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* 移动端面板 */}
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 md:hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <nav className="mt-2 rounded-3xl border border-line bg-void/85 p-2.5 backdrop-blur-xl">
              {[{ href: "/", label: "首页" }, ...links].map((l) => {
                const active = isActive(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-5 py-3.5 text-[15px] transition-colors ${
                      active
                        ? "bg-ember/10 text-ember"
                        : "text-muted hover:bg-white/[0.03] hover:text-ink"
                    }`}
                  >
                    {l.label}
                    <span className="font-mono text-[11px] tracking-widest text-faint">
                      {l.href === "/" ? "00" : l.href.replace("/", "")}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
