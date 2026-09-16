import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import ProjectVisual from "@/components/project-visual";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "作品",
  description: "zerolight 的概念设计实验：光栅、字体、动效与色彩。",
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
            五组关于「克制」的研究——以光为尺度，探索信息层级、排版、动效与色彩
            在界面中的最小有效表达。
          </p>
        </Reveal>

        <div className="mt-20 space-y-16 md:space-y-24">
          {projects.map((p, i) => (
            <Reveal key={p.slug}>
              <article
                id={p.slug}
                className="scroll-mt-28 grid gap-8 md:grid-cols-2 md:items-center"
              >
                <ProjectVisual project={p} large />
                <div className={i % 2 === 1 ? "md:order-first" : ""}>
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                      {p.title}
                    </h2>
                    <span className="num-label shrink-0">{p.index}</span>
                  </div>
                  <p className="mt-3 text-[13px] tracking-wide text-faint">
                    {p.field} · {p.year}
                  </p>
                  <p className="mt-5 text-[15px] leading-[1.85] text-ember/90">
                    {p.summary}
                  </p>
                  <div className="mt-5 space-y-4">
                    {p.description.map((para, j) => (
                      <p key={j} className="text-[14.5px] leading-[1.9] text-muted">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
