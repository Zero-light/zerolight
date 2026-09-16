import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectVisual from "@/components/project-visual";
import { projects } from "@/lib/projects";
import { terms } from "@/lib/glossary";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "未找到" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      type: "article",
      title: `${project.title} — zerolight`,
      description: project.summary,
      images: ["/opengraph-image.png"],
    },
  };
}

export default function ProjectPage({ params }: { params: Params }) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  const project = projects[index];
  if (!project) notFound();

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const related = terms.filter(
    (t) => t.post?.slug === project.slug && t.post.kind === "work"
  );

  return (
    <div className="pt-36 pb-24 md:pt-44">
      <article className="mx-auto max-w-6xl px-6 md:px-8">
        {/* 头部 */}
        <div className="flex items-baseline justify-between gap-6">
          <p className="num-label">
            {project.field} · {project.year}
          </p>
          <span className="num-label shrink-0">
            {project.index} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>
        <h1 className="mt-5 text-4xl font-medium leading-[1.12] tracking-tightest md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-[16.5px] leading-[1.85] text-ember/90 md:text-lg">
          {project.summary}
        </p>

        {/* 主视觉 */}
        <div className="mt-12">
          <ProjectVisual project={project} large />
        </div>

        {/* 描述 */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="space-y-6 text-[15.5px] leading-[1.95] text-muted">
            {project.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* 元信息条 */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {[
            ["编号", project.index],
            ["领域", project.field],
            ["年份", project.year],
          ].map(([k, v]) => (
            <div key={k} className="bg-void px-7 py-6">
              <p className="num-label">{k}</p>
              <p className="mt-2 text-[15px] text-ink">{v}</p>
            </div>
          ))}
        </div>

        {/* 相关词汇 */}
        {related.length > 0 && (
          <div className="mt-14">
            <p className="num-label">相关词汇 / Related Terms</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {related.map((t) => (
                <Link
                  key={t.slug}
                  href={`/glossary#${t.slug}`}
                  className="group rounded-2xl border border-line p-6 transition-colors hover:border-ember/30"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-xl font-medium tracking-tight text-ink transition-colors group-hover:text-ember">
                      {t.word}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.18em] text-faint uppercase">
                      {t.en}
                    </span>
                  </div>
                  <p className="mt-3 text-[13.5px] leading-[1.85] text-muted">
                    {t.def}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 上下篇导航 */}
        <div className="mt-16 grid gap-4 border-t border-line pt-10 sm:grid-cols-2">
          <Link
            href={`/works/${prev.slug}`}
            className="group rounded-2xl border border-line p-6 transition-colors hover:border-ember/30"
          >
            <p className="num-label">← 上一个 · {prev.index}</p>
            <p className="mt-2 text-[17px] font-medium tracking-tight text-ink transition-colors group-hover:text-ember">
              {prev.title}
            </p>
          </Link>
          <Link
            href={`/works/${next.slug}`}
            className="group rounded-2xl border border-line p-6 text-right transition-colors hover:border-ember/30"
          >
            <p className="num-label">下一个 · {next.index} →</p>
            <p className="mt-2 text-[17px] font-medium tracking-tight text-ink transition-colors group-hover:text-ember">
              {next.title}
            </p>
          </Link>
        </div>

        <div className="mt-10">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-[14px] text-muted transition-colors hover:text-ember"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            返回全部作品
          </Link>
        </div>
      </article>
    </div>
  );
}
