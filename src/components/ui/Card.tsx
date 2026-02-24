import type { ReactNode } from "react";

interface CardProps {
  /** Content to render inside the card */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/** Reusable card component with hover effects */
export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-white/5 bg-dark-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 ${className}`}
    >
      {children}
    </div>
  );
}
