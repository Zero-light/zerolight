import Link from "next/link";
import Reveal from "@/components/reveal";
import SectionHead from "@/components/section-head";
import ProjectCard from "@/components/project-card";
import PostCard from "@/components/post-card";
import HeroFx from "@/components/hero-fx";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/posts";

export default function Home() {
  const featured = projects.slice(0, 3);
  const featuredPosts = posts.slice(0, 3);

  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden">
        <div className="stardust" aria-hidden />
        <HeroFx />
        <div id="hero-content" className="mx-auto w-full max-w-6xl px-6 md:px-8 will-change-transform">
          <Reveal>
            <p className="num-label flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember animate-slow-pulse" />
              极简数字设计工作室 — EST. 2026
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="light-on mt-8 select-none text-[clamp(4rem,17vw,12.5rem)] font-semibold leading-[0.92] tracking-tightest glow-text">
              zerolight
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-10 max-w-xl text-[17px] leading-[1.85] text-muted md:text-[19px]">
              零光，是光的最小起点。
              <br />
              我们相信最好的设计是一种克制——在信息爆炸的时代，
              <span className="text-ink">留白是最有力的声明</span>。
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-12 flex flex-wrap items-center gap-5">
              <Link
                href="/works"
                className="group inline-flex items-center gap-3 rounded-full border border-ember/35 bg-ember/5 px-7 py-3 text-[14.5px] text-ember transition-all hover:border-ember/60 hover:bg-ember/10"
              >
                查看作品
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/about"
                className="text-[14.5px] text-muted transition-colors hover:text-ink"
              >
                关于品牌
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.3em] text-faint uppercase">
              scroll
            </span>
            <div className="h-10 w-px overflow-hidden bg-line">
              <div className="h-4 w-px animate-[slow-pulse_2s_ease-in-out_infinite] bg-ember/70" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 宣言 ---------- */}
      <section className="relative py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <Reveal>
            <p className="num-label">宣言 / Manifesto</p>
          </Reveal>
          <Reveal delay={100}>
            <blockquote className="mt-10 max-w-4xl text-[clamp(1.7rem,4.4vw,3.4rem)] font-medium leading-[1.32] tracking-tightest">
              「光，是界面最初的隐喻。真正好的设计并非让一切闪耀，
              <span className="glow-text">而是决定什么值得发光</span>。」
            </blockquote>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-10 max-w-xl text-[15px] leading-[1.9] text-muted">
              zerolight 成立于 2026 年，专注于极简主义界面设计、动效研究与品牌视觉。
              我们服务的不是流量，而是目光——让每一块屏幕都值得被多看一秒。
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- 三原则 ---------- */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <Reveal>
            <SectionHead
              index="01 / 理念"
              title="三把尺子"
              sub="我们衡量每一件作品的三条标准。少即是多，但不是空无一物。"
            />
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {[
              {
                en: "Restraint",
                zh: "克制",
                desc: "删除直到无法再删除。每一个留在页面上的元素，都必须证明自己值得发光。",
              },
              {
                en: "Precision",
                zh: "精确",
                desc: "间距以 4px 为刻度，动效以毫秒为单位。设计的美感藏在可以被量化的细节里。",
              },
              {
                en: "Breath",
                zh: "呼吸",
                desc: "留白不是空缺，是节奏。让眼睛有停顿的地方，内容才有被记住的可能。",
              },
            ].map((p, i) => (
              <div key={p.en} className="group bg-void p-9 md:p-10">
                <p className="font-mono text-[11px] tracking-wide2 text-faint">
                  0{i + 1}
                </p>
                <h3 className="mt-6 text-2xl font-medium tracking-tight">
                  {p.zh}
                  <span className="ml-3 font-mono text-[12px] tracking-widest text-faint uppercase">
                    {p.en}
                  </span>
                </h3>
                <p className="mt-4 text-[14px] leading-[1.85] text-muted">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 精选作品 ---------- */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <Reveal>
            <SectionHead
              index="02 / 作品"
              title="精选实验"
              sub="光栅、字体、动效、色彩与日蚀——六组关于「克制」的设计研究。"
            />
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/works"
                className="group inline-flex items-center gap-3 rounded-full border border-line px-6 py-3 text-[14px] text-muted transition-all hover:border-ember/40 hover:text-ink"
              >
                全部作品
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 日志精选 ---------- */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <Reveal>
            <SectionHead
              index="03 / 日志"
              title="设计随笔"
              sub="关于留白、深色界面、动效与光的隐喻。宁缺毋滥，不定期更新。"
            />
          </Reveal>

          {featuredPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <PostCard post={post} />
            </Reveal>
          ))}

          <Reveal delay={120}>
            <div className="mt-10">
              <Link
                href="/journal"
                className="group inline-flex items-center gap-3 text-[14px] text-muted transition-colors hover:text-ember"
              >
                阅读全部
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="relative overflow-hidden py-32 md:py-44">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 100%, rgba(240,201,138,0.08), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 text-center md:px-8">
          <Reveal>
            <p className="num-label">联系 / Contact</p>
            <h2 className="mt-6 text-[clamp(2.4rem,6vw,4.6rem)] font-medium leading-[1.1] tracking-tightest">
              有一束光，值得被留下
            </h2>
            <p className="mx-auto mt-6 max-w-md text-[15px] leading-[1.85] text-muted">
              无论是一个产品、一套视觉，还是一句对设计的看法，
              我们都愿意聊聊。
            </p>
            <a
              href="mailto:hello@zerolight.fun"
              className="mt-12 inline-flex items-center gap-3 rounded-full border border-ember/35 bg-ember/5 px-8 py-3.5 text-[15px] text-ember transition-all hover:border-ember/60 hover:bg-ember/10"
            >
              hello@zerolight.fun
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
