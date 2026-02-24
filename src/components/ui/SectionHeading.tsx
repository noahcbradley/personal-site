interface SectionHeadingProps {
  /** The main title text */
  title: string;
  /** Optional subtitle or description */
  subtitle?: string;
}

/** Consistent section heading used across all pages */
export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="font-mono text-3xl font-bold text-white md:text-4xl">
        <span className="text-accent">{">"}</span> {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-400">{subtitle}</p>
      )}
      <div className="mx-auto mt-4 h-px w-16 bg-accent/40" />
    </div>
  );
}
