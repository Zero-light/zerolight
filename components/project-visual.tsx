import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
  large?: boolean;
};

export default function ProjectVisual({ project, large = false }: Props) {
  const box = large ? "h-56 md:h-72" : "h-44 md:h-52";

  return (
    <div
      className={`${box} relative overflow-hidden rounded-xl bg-[#0B0B0F]`}
      aria-hidden
    >
      <LumenGrid show={project.visual === "lumen"} />
      <WhisperType show={project.visual === "whisper"} />
      <GravityCursor show={project.visual === "gravity"} />
      <Prism show={project.visual === "prism"} />
      <StillWater show={project.visual === "still"} />
      <EclipseTide show={project.visual === "eclipse"} />
    </div>
  );
}

function LumenGrid({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <div className="absolute inset-0">
      {[
        "inset-0 opacity-80",
        "inset-[12%] opacity-60",
        "inset-[26%] opacity-40",
        "inset-[40%] opacity-25",
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute ${pos} rounded-full transition-opacity`}
          style={{
            background:
              "radial-gradient(circle at 50% 42%, rgba(240,201,138," +
              (0.34 - i * 0.07).toFixed(2) +
              "), transparent 68%)",
            filter: "blur(18px)",
          }}
        />
      ))}
      <div
        className="absolute left-1/2 top-[42%] h-1.5 w-24 -translate-x-1/2 rounded-full"
        style={{ background: "rgba(240,201,138,0.85)", filter: "blur(1px)" }}
      />
    </div>
  );
}

function WhisperType({ show }: { show: boolean }) {
  if (!show) return null;
  const rows = [
    { w: "52%", o: 0.92, h: 10 },
    { w: "38%", o: 0.7, h: 8 },
    { w: "60%", o: 0.5, h: 7 },
    { w: "30%", o: 0.34, h: 6 },
    { w: "46%", o: 0.2, h: 5 },
  ];
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-4 pl-10">
      {rows.map((r, i) => (
        <div
          key={i}
          className="rounded-full"
          style={{
            width: r.w,
            height: r.h,
            opacity: r.o,
            background:
              i === 0
                ? "linear-gradient(90deg, #F0C98A, #E9E6DE)"
                : "linear-gradient(90deg, #E9E6DE, transparent)",
          }}
        />
      ))}
    </div>
  );
}

function GravityCursor({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <div className="absolute inset-0">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full border"
          style={{
            width: 90 + i * 58,
            height: 90 + i * 58,
            transform: "translate(-50%, -50%)",
            borderColor: `rgba(140,220,200,${0.28 - i * 0.06})`,
          }}
        />
      ))}
      <div
        className="absolute rounded-full"
        style={{
          width: 14,
          height: 14,
          left: "56%",
          top: "38%",
          background: "rgba(140,220,200,0.9)",
          boxShadow: "0 0 26px rgba(140,220,200,0.55)",
        }}
      />
    </div>
  );
}

function Prism({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="flex h-[58%] w-[62%] -rotate-12 gap-[2px] overflow-hidden rounded-lg"
        style={{
          background:
            "linear-gradient(135deg, #F6F2E6 0%, #D8D5CB 30%, #8A887F 50%, #5A5953 70%, #2C2B28 100%)",
          filter: "blur(0.4px)",
        }}
      >
        <div
          className="h-full w-1/4"
          style={{ background: "rgba(240,201,138,0.85)" }}
        />
        <div className="h-full w-1/4" style={{ background: "rgba(160,180,255,0.75)" }} />
        <div className="h-full w-1/4" style={{ background: "rgba(140,220,200,0.7)" }} />
        <div className="h-full w-1/4" style={{ background: "rgba(220,170,220,0.7)" }} />
      </div>
    </div>
  );
}

function StillWater({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <div className="absolute inset-0 p-8">
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] backdrop-blur-md">
        <div
          className="absolute inset-x-0 top-0 h-24"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.09), transparent)",
          }}
        />
        <div
          className="absolute left-6 top-5 h-2 w-24 rounded-full"
          style={{ background: "rgba(233,230,222,0.75)" }}
        />
        <div
          className="absolute left-6 top-12 h-1.5 w-16 rounded-full"
          style={{ background: "rgba(233,230,222,0.3)" }}
        />
        <div
          className="absolute bottom-5 right-6 h-8 w-20 rounded-md border border-white/15"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />
      </div>
    </div>
  );
}

function EclipseTide({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <div className="absolute inset-0">
      {/* 星点 */}
      {[
        ["22%", "30%"],
        ["72%", "22%"],
        ["84%", "58%"],
        ["30%", "70%"],
        ["12%", "52%"],
        ["55%", "84%"],
        ["90%", "80%"],
      ].map(([x, y], i) => (
        <span
          key={i}
          className="absolute h-[2px] w-[2px] rounded-full"
          style={{
            left: x,
            top: y,
            background: i % 2 === 0 ? "rgba(233,230,222,0.55)" : "rgba(240,201,138,0.5)",
          }}
        />
      ))}

      {/* 外光环 */}
      <div
        className="absolute left-1/2 top-1/2 rounded-full"
        style={{
          width: "64%",
          height: "64%",
          transform: "translate(-50%, -50%)",
          border: "1.5px solid rgba(240,201,138,0.22)",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 rounded-full"
        style={{
          width: "46%",
          height: "46%",
          transform: "translate(-50%, -50%)",
          border: "1px solid rgba(240,201,138,0.14)",
        }}
      />

      {/* 月面（蚀） */}
      <div
        className="absolute left-1/2 top-1/2 overflow-hidden rounded-full"
        style={{
          width: "38%",
          height: "38%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle at 38% 32%, #F6E3B4 0%, #F0C98A 38%, #B98A4E 68%, #6E5632 88%, #3A2F1E 100%)",
          boxShadow: "0 0 70px rgba(240,201,138,0.28)",
        }}
      >
        {/* 暗部蚀影 */}
        <div
          className="absolute"
          style={{
            width: "112%",
            height: "112%",
            left: "30%",
            top: "-6%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 40% 30%, #0B0B0F 55%, rgba(11,11,15,0.92) 70%, transparent 78%)",
          }}
        />
        {/* 月面细纹 */}
        <div
          className="absolute left-[16%] top-[22%] h-[3px] w-[18%] rounded-full"
          style={{ background: "rgba(233,230,222,0.35)", transform: "rotate(-14deg)" }}
        />
        <div
          className="absolute left-[22%] top-[40%] h-[2px] w-[12%] rounded-full"
          style={{ background: "rgba(233,230,222,0.22)", transform: "rotate(8deg)" }}
        />
      </div>

      {/* 蚀后轮廓光 */}
      <div
        className="absolute left-1/2 top-1/2 rounded-full"
        style={{
          width: "40%",
          height: "40%",
          transform: "translate(-50%, -50%)",
          background:
            "conic-gradient(from 210deg, transparent 0deg, rgba(240,201,138,0.5) 30deg, transparent 90deg, transparent 360deg)",
          WebkitMaskImage:
            "radial-gradient(circle, transparent 86%, black 88%, black 94%, transparent 96%)",
          maskImage:
            "radial-gradient(circle, transparent 86%, black 88%, black 94%, transparent 96%)",
        }}
      />
    </div>
  );
}
