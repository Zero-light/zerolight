"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/works", label: "作品" },
  { href: "/journal", label: "日志" },
  { href: "/about", label: "关于" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mt-5 flex items-center justify-between rounded-full border border-line bg-void/55 px-5 py-3 backdrop-blur-xl">
          <Link
            href="/"
            className="font-mono text-[13px] tracking-[0.18em] text-ink transition-colors hover:text-ember"
          >
            zerolight
          </Link>

          <nav className="flex items-center gap-1.5">
            {links.map((l) => {
              const active =
                pathname === l.href || pathname.startsWith(`${l.href}/`);
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
        </div>
      </div>
    </header>
  );
}
