type SectionHeadProps = {
  index: string;
  title: string;
  sub?: string;
};

export default function SectionHead({ index, title, sub }: SectionHeadProps) {
  return (
    <div className="mb-12">
      <p className="num-label">{index}</p>
      <h2 className="mt-3 text-3xl md:text-4xl font-medium tracking-tightest">
        {title}
      </h2>
      {sub && <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">{sub}</p>}
    </div>
  );
}
