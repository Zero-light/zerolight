"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Post } from "@/lib/posts";

export default function JournalFilter({ posts }: { posts: Post[] }) {
  const tags = ["全部", ...Array.from(new Set(posts.map((p) => p.tag)))];
  const [active, setActive] = useState("全部");

  const filtered = useMemo(
    () => (active === "全部" ? posts : posts.filter((p) => p.tag === active)),
    [active, posts]
  );

  return (
    <div>
      {/* 标签筛选条 */}
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="按标签筛选">
        {tags.map((t) => {
          const isActive = active === t;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setActive(t)}
              className={`rounded-full border px-3.5 py-1.5 text-[12.5px] tracking-wide transition-colors ${
                isActive
                  ? "border-ember/50 bg-ember/10 text-ember"
                  : "border-line text-muted hover:border-ember/30 hover:text-ink"
              }`}
            >
              {t}
              <span className="ml-1.5 font-mono text-[10px] text-faint">
                {t === "全部" ? posts.length : posts.filter((p) => p.tag === t).length}
              </span>
            </button>
          );
        })}
      </div>

      {/* 文章列表 */}
      <div className="mt-12">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/journal/${post.slug}`}
            className="group block border-b border-line py-8 transition-colors first:border-t"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
              <h3 className="text-[19px] font-medium tracking-tight text-ink transition-colors group-hover:text-ember">
                {post.title}
              </h3>
              <div className="flex shrink-0 items-center gap-4 font-mono text-[11.5px] tracking-widest text-faint">
                <span className="rounded-full border border-line px-2 py-0.5 text-[10px] tracking-wide text-faint/80">
                  {post.tag}
                </span>
                <span>{post.date}</span>
                <span className="text-faint/60">{post.readTime}</span>
              </div>
            </div>
            <p className="mt-2.5 max-w-2xl text-[14px] leading-relaxed text-muted">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
