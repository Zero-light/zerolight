import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[11px] tracking-[0.3em] text-faint uppercase">
        error 404
      </p>
      <h1 className="mt-6 text-[clamp(3rem,10vw,7rem)] font-semibold leading-none tracking-tightest glow-text">
        零光
      </h1>
      <p className="mt-6 max-w-sm text-[15px] leading-[1.85] text-muted">
        这一页没有留下任何光。它可能被移动了，或者从未存在过。
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-3 rounded-full border border-ember/35 bg-ember/5 px-7 py-3 text-[14px] text-ember transition-all hover:border-ember/60 hover:bg-ember/10"
      >
        回到首页
      </Link>
    </div>
  );
}
