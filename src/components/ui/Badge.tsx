interface BadgeProps {
  /** Text to display inside the badge */
  label: string;
}

/** Small tag/badge for displaying tech stack items or labels */
export function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-block rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent transition-colors hover:bg-accent/10">
      {label}
    </span>
  );
}
