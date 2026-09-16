export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[13px] tracking-[0.18em] text-ink">
              zerolight
            </p>
            <p className="mt-3 max-w-xs text-[13.5px] leading-relaxed text-faint">
              以光为尺，设计克制。极简主义数字设计工作室。
            </p>
          </div>

          <div className="flex items-center gap-8 text-[13px] text-faint">
            <a
              href="mailto:hello@zerolight.fun"
              className="transition-colors hover:text-ember"
            >
              hello@zerolight.fun
            </a>
            <span className="font-mono">© 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
