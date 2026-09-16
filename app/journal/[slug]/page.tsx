import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReadingProgress from "@/components/reading-progress";
import { posts } from "@/lib/posts";

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
  };
}

export default function PostPage({ params }: { params: Params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

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

        <div className="prose-light space-y-6">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="hairline my-14" />

        <div className="flex items-center justify-between">
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
