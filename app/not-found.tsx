import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* 同心圆环背景 */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden>
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{ width: 340, height: 340, borderColor: "rgba(240,201,138,0.08)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{ width: 250, height: 250, borderColor: "rgba(240,201,138,0.12)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 160,
            height: 160,
            background:
              "radial-gradient(circle at 40% 35%, rgba(240,201,138,0.16), transparent 70%)",
          }}
        />
      </div>

      <div className="relative">
        <p className="font-mono text-[11px] tracking-[0.3em] text-faint uppercase">
          error 404
        </p>
        <h1 className="mt-6 text-[clamp(3rem,10vw,7rem)] font-semibold leading-none tracking-tightest glow-text">
          零光
        </h1>
        <p className="mx-auto mt-6 max-w-sm text-[15px] leading-[1.85] text-muted">
          这一页没有留下任何光。它可能被移动了，或者从未存在过。
          但总有一束光，还亮着。
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full border border-ember/35 bg-ember/5 px-7 py-3 text-[14px] text-ember transition-all hover:border-ember/60 hover:bg-ember/10"
          >
            回到首页
          </Link>
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-[14px] text-muted transition-colors hover:text-ink"
          >
            看看作品
            <span>→</span>
          </Link>
        </div>
        <p className="mt-14 font-mono text-[10px] tracking-[0.25em] text-faint/70 uppercase">
          zerolight — 以光为尺，设计克制
        </p>
      </div>
    </div>
  );
}
