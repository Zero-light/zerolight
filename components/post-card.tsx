import Link from "next/link";
import type { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/journal/${post.slug}`}
      className="group block border-b border-line py-8 transition-colors first:border-t"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
        <h3 className="text-[19px] font-medium tracking-tight text-ink transition-colors group-hover:text-ember">
          {post.title}
        </h3>
        <div className="flex shrink-0 items-center gap-4 font-mono text-[11.5px] tracking-widest text-faint">
          <span>{post.date}</span>
          <span className="text-faint/60">{post.readTime}</span>
        </div>
      </div>
      <p className="mt-2.5 max-w-2xl text-[14px] leading-relaxed text-muted">
        {post.excerpt}
      </p>
    </Link>
  );
}
