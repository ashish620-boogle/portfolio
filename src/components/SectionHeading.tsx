type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <h2 className="font-archivo text-4xl md:text-5xl lg:text-6xl text-cream">
        {title}
      </h2>
      {subtitle ? (
        <p className="font-public text-cream/80 mt-3 max-w-2xl">{subtitle}</p>
      ) : null}
    </div>
  );
}
