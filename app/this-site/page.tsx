import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "本站",
  description:
    "这个网站本身就是 zerolight 的作品：零位图、零运行时依赖、全静态、系统字体——把克制应用到自身。",
  alternates: { canonical: "/this-site" },
};

const decisions: [string, string, string][] = [
  ["01", "零位图", "全站没有任何一张图片文件。作品视觉全部由 CSS、渐变与 SVG 绘制——连品牌标识都是 700 字节的代码。"],
  ["02", "零依赖", "没有引入任何前端库或字体文件。动画是 CSS 的，交互是浏览器原生的，首屏加载无需等待任何第三方资源。"],
  ["03", "系统字体", "不加载 webfont，使用操作系统的原生字体栈。加载速度换取语气一致——在每台设备上，文字都像设备自己说的话。"],
  ["04", "全静态", "37 个页面全部在构建期预渲染成 HTML，无服务端运行时。这让它几乎不可能宕机，也几乎不需要维护。"],
  ["05", "毫秒校准", "本站自己的动效遵循《动效的毫秒刻度》里的三档时钟：100ms 悬停、250ms 展开、400ms 首屏渐显。"],
  ["06", "明暗有度", "全站只有两种强调：暖光金与留白。凡是不能证明自己值得发光的元素，都被删掉了——包括这张清单之外的一切。"],
];

const numbers: [string, string][] = [
  ["37", "个静态页面"],
  ["0", "张位图"],
  ["0", "个运行时依赖"],
  ["~100", "KB 首屏传输"],
  ["13", "篇随笔"],  ["6", "件作品"],
];

export default function ThisSitePage() {
  return (
    <div className="pt-36 pb-24 md:pt-44">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <p className="num-label">本站 / This Site</p>
          <h1 className="mt-4 text-4xl font-medium tracking-tightest md:text-6xl">
            本站，也是一件作品
          </h1>
          <p className="mt-6 max-w-xl text-[15.5px] leading-[1.9] text-muted">
            与其说这是一份「技术说明」，不如说这是一次自我审查：
            我们主张的一切，是否经得起应用在自身上？
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 md:grid-cols-6">
            {numbers.map(([n, d]) => (
              <div key={d} className="bg-void px-6 py-8 text-center md:py-10">
                <p className="glow-text text-3xl font-semibold tracking-tightest md:text-4xl">
                  {n}
                </p>
                <p className="mt-3 text-[12px] tracking-wide text-faint">{d}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {decisions.map(([n, t, d], i) => (
            <Reveal key={n} delay={(i % 2) * 70}>
              <div className="flex h-full flex-col justify-between bg-void p-8 md:p-10">
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-ember/70">
                    {n} / 06
                  </span>
                  <h2 className="mt-3 text-2xl font-medium tracking-tight text-ink">
                    {t}
                  </h2>
                  <p className="mt-4 max-w-md text-[14.5px] leading-[1.9] text-muted">
                    {d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 flex items-center justify-between border-t border-line pt-8">
            <p className="max-w-md text-[13.5px] leading-relaxed text-faint">
              想看这些原则如何落到代码里？去逛逛
              <Link href="/works" className="text-ember/80 transition-colors hover:text-ember">
                {" "}作品
              </Link>
              ，或者读一篇
              <Link href="/journal" className="text-ember/80 transition-colors hover:text-ember">
                {" "}随笔
              </Link>
              。
            </p>
            <span className="font-mono text-[11px] tracking-widest text-faint">
              zerolight / this-site
            </span>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

