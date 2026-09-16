import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
import { terms } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "词汇表",
  description:
    "zerolight 的设计词汇表：光、零、留白、呼吸、克制、精确——十二个词，理解我们如何谈论光与界面。",
};

export default function GlossaryPage() {
  return (
    <div className="pt-36 pb-24 md:pt-44">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <p className="num-label">词汇表 / Glossary</p>
          <h1 className="mt-4 text-4xl font-medium tracking-tightest md:text-6xl">
            我们如何谈论光
          </h1>
          <p className="mt-6 max-w-xl text-[15.5px] leading-[1.9] text-muted">
            十二个词，构成 zerolight 的设计语言。每一个词都是一种判断——
            关于什么值得留下，什么值得发光。
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {terms.map((t, i) => (
            <Reveal key={t.slug} delay={(i % 2) * 70}>
              <div className="group flex h-full flex-col justify-between bg-void p-8 md:p-10">
                <div>
                  <div className="flex items-baseline gap-4">
                    <h2 className="text-3xl font-medium tracking-tight text-ink md:text-4xl">
                      {t.word}
                    </h2>
                    <span className="font-mono text-[11px] tracking-[0.2em] text-faint uppercase">
                      {t.en}
                    </span>
                  </div>
                  <p className="mt-5 max-w-md text-[14.5px] leading-[1.9] text-muted">
                    {t.def}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-widest text-faint/70">
                    0{i + 1} / {String(terms.length).padStart(2, "0")}
                  </span>
                  {t.post ? (
                    <Link
                      href={
                        t.post.kind === "work"
                          ? `/works/${t.post.slug}`
                          : `/journal/${t.post.slug}`
                      }
                      className="group/link inline-flex items-center gap-2 text-[12.5px] text-ember/80 transition-colors hover:text-ember"
                    >
                      {t.post.kind === "work" ? "阅读 · 作品 " : "阅读 · "}
                      {t.post.title}
                      <span className="transition-transform duration-300 group-hover/link:translate-x-0.5">
                        →
                      </span>
                    </Link>
                  ) : (
                    <span className="text-[12.5px] text-faint">一词一言</span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 flex items-center justify-between border-t border-line pt-8">
            <p className="text-[13.5px] text-faint">
              词汇会随思考生长。这个清单不完整，也不打算完整。
            </p>
            <Link
              href="/journal"
              className="group inline-flex items-center gap-2 text-[14px] text-muted transition-colors hover:text-ember"
            >
              去读随笔
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
