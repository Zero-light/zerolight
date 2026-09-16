import type { Metadata } from "next";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "关于",
  description: "zerolight 品牌故事：零光的意义、方法与原则。",
};

export default function AboutPage() {
  return (
    <div className="pt-36 pb-24 md:pt-44">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <p className="num-label">关于 / About</p>
          <h1 className="mt-4 text-4xl font-medium tracking-tightest md:text-6xl">
            为什么叫「零光」
          </h1>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="space-y-6 text-[15.5px] leading-[1.95] text-muted">
              <p>
                物理上，光没有「零」的状态——它要么存在，要么不存在。但界面设计里
                有一个真实的零光时刻：那块没有被任何像素占据的黑色。
              </p>
              <p>
                zerolight 取这个名字，是为了提醒自己：<span className="text-ink">设计的起点不是添加，而是克制</span>。
                先让一切归于零，再决定什么值得被点亮。
              </p>
              <p>
                这不是一个关于技术的工作室宣言，而是一个关于注意力的立场。
                我们相信，在信息过剩的年代，稀缺的从来不是内容，而是被认真对待的目光。
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass rounded-2xl p-8 md:p-10">
              <p className="num-label">方法 / Method</p>
              <ul className="mt-6 space-y-5">
                {[
                  ["01", "归零", "从删除开始。先移除一切可有可无的元素，再讨论剩下的是否值得保留。"],
                  ["02", "定光", "为每一级信息设定明确的光强刻度——谁满光、谁漫射、谁退到轮廓。"],
                  ["03", "校准", "间距精确到 4px，动效精确到毫秒。审美必须经得起量化的检验。"],
                  ["04", "呼吸", "在交付前模拟真实用户的浏览节奏，给眼睛留出停顿。"],
                ].map(([n, t, d]) => (
                  <li key={n} className="flex gap-5">
                    <span className="font-mono text-[11px] tracking-widest text-ember/70 pt-1">
                      {n}
                    </span>
                    <div>
                      <p className="text-[15px] font-medium text-ink">{t}</p>
                      <p className="mt-1.5 text-[13.5px] leading-[1.8] text-muted">
                        {d}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {[
              ["设计原则", "删除直到无法再删除；发光只留给最重要的内容。"],
              ["服务范围", "界面设计 · 动效研究 · 品牌视觉 · 设计规范"],
              ["联系", "hello@zerolight.fun — 我们回信，但回复可能很慢，因为字斟句酌。"],
            ].map(([t, d]) => (
              <div key={t} className="bg-void p-8 md:p-9">
                <p className="num-label">{t}</p>
                <p className="mt-4 text-[14px] leading-[1.85] text-muted">{d}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-20">
            <p className="num-label">以数字看 zerolight / In Numbers</p>
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
              {[
                ["06", "组设计实验"],
                ["12", "篇设计随笔"],
                ["01", "个立场：克制"],
                ["04", "步设计方法"],
              ].map(([n, d]) => (
                <div key={d} className="bg-void px-8 py-10 text-center md:py-12">
                  <p className="glow-text text-5xl font-semibold tracking-tightest md:text-6xl">
                    {n}
                  </p>
                  <p className="mt-4 text-[13px] tracking-wide text-faint">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
