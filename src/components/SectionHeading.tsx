type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink">
        <span className="text-accent">{title}</span>
      </h2>
      {subtitle ? (
        <p className="font-body text-muted mt-3 max-w-2xl">{subtitle}</p>
      ) : null}
    </div>
  );
}
