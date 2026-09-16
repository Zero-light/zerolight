import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReadingProgress from "@/components/reading-progress";
import { posts } from "@/lib/posts";
import { terms } from "@/lib/glossary";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: "未找到" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: `${post.title} — zerolight`,
      description: post.excerpt,
      images: ["/opengraph-image.png"],
    },
  };
}

export default function PostPage({ params }: { params: Params }) {
  const index = posts.findIndex((p) => p.slug === params.slug);
  const post = posts[index];
  if (!post) notFound();

  const prev = posts[(index - 1 + posts.length) % posts.length];
  const next = posts[(index + 1) % posts.length];
  const related = terms.filter(
    (t) => t.post?.slug === post.slug && t.post.kind !== "work"
  );

  return (
    <div className="pt-36 pb-24 md:pt-44">
      <ReadingProgress />
      <article className="mx-auto max-w-3xl px-6 md:px-8">
        <p className="num-label">
          {post.tag} · {post.date} · {post.readTime}
        </p>
        <h1 className="mt-6 text-3xl font-medium leading-[1.25] tracking-tightest md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 border-l-2 border-ember/50 pl-5 text-[15.5px] leading-[1.85] text-ink/85">
          {post.excerpt}
        </p>

        <div className="hairline my-12" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              datePublished: `${post.date}.01`,
              inLanguage: "zh-CN",
              author: { "@type": "Organization", name: "zerolight" },
              publisher: { "@type": "Organization", name: "zerolight" },
              url: `https://www.zerolight.fun/journal/${post.slug}`,
              mainEntityOfPage: `https://www.zerolight.fun/journal/${post.slug}`,
            }),
          }}
        />

        <div className="prose-light space-y-6">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="hairline my-14" />

        {related.length > 0 && (
          <div className="mb-14">
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
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href={`/journal/${prev.slug}`}
            className="group rounded-2xl border border-line p-6 transition-colors hover:border-ember/30"
          >
            <p className="num-label">← 上一篇</p>
            <p className="mt-2 text-[16px] font-medium tracking-tight text-ink transition-colors group-hover:text-ember">
              {prev.title}
            </p>
          </Link>
          <Link
            href={`/journal/${next.slug}`}
            className="group rounded-2xl border border-line p-6 text-right transition-colors hover:border-ember/30"
          >
            <p className="num-label">下一篇 →</p>
            <p className="mt-2 text-[16px] font-medium tracking-tight text-ink transition-colors group-hover:text-ember">
              {next.title}
            </p>
          </Link>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <Link
            href="/journal"
            className="group inline-flex items-center gap-2 text-[14px] text-muted transition-colors hover:text-ember"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            返回日志
          </Link>
          <span className="font-mono text-[11px] tracking-widest text-faint">
            zerolight / {post.slug}
          </span>
        </div>
      </article>
    </div>
  );
}
