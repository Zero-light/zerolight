import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import JournalFilter from "@/components/journal-filter";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "日志",
  description:
    "zerolight 的设计随笔：留白、深色界面、微交互、排版与光的隐喻，八篇关于设计取舍的长期思考。",
};

export default function JournalPage() {
  return (
    <div className="pt-36 pb-24 md:pt-44">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <p className="num-label">日志 / Journal</p>
          <h1 className="mt-4 text-4xl font-medium tracking-tightest md:text-6xl">
            设计随笔
          </h1>
          <p className="mt-6 max-w-xl text-[15.5px] leading-[1.9] text-muted">
            关于设计方法与美学的一些长期思考。不定期更新，宁缺毋滥。
          </p>
        </Reveal>

        <div className="mt-16">
          <JournalFilter posts={posts} />
        </div>
      </div>
    </div>
  );
}
