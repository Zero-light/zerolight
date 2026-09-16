import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
import ProjectVisual from "@/components/project-visual";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "作品",
  description: "zerolight 的概念设计实验：光栅、字体、动效与色彩。",
  alternates: { canonical: "/works" },
};

export default function WorksPage() {
  return (
    <div className="pt-36 pb-24 md:pt-44">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <p className="num-label">作品 / Works</p>
          <h1 className="mt-4 text-4xl font-medium tracking-tightest md:text-6xl">
            设计实验
          </h1>
          <p className="mt-6 max-w-xl text-[15.5px] leading-[1.9] text-muted">
            六组关于「克制」的研究——以光为尺度，探索信息层级、排版、动效、色彩
            与光影在界面中的最小有效表达。
          </p>
        </Reveal>

        <div className="mt-20 space-y-5">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                href={`/works/${p.slug}`}
                className="group grid gap-6 rounded-2xl border border-line p-5 transition-colors hover:border-ember/30 md:grid-cols-[1fr_auto] md:items-center md:p-6"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
                  <div className="hidden w-40 shrink-0 md:block">
                    <ProjectVisual project={p} />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-4">
                      <h2 className="text-xl font-medium tracking-tight text-ink transition-colors group-hover:text-ember md:text-2xl">
                        {p.title}
                      </h2>
                      <span className="num-label hidden md:inline">{p.index}</span>
                    </div>
                    <p className="mt-1.5 text-[12.5px] tracking-wide text-faint">
                      {p.field} · {p.year}
                    </p>
                    <p className="mt-3 max-w-xl text-[14px] leading-[1.8] text-muted">
                      {p.summary}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between md:flex-col md:items-end md:gap-3">
                  <span className="num-label md:hidden">{p.index}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-[15px] text-muted transition-all duration-300 group-hover:border-ember/50 group-hover:text-ember">
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
