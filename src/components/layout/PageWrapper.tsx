import type { ReactNode } from "react";

interface PageWrapperProps {
  /** Page content */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/** Wrapper for page content providing consistent padding and max-width */
export function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return (
    <main
      className={`mx-auto min-h-[calc(100vh-8rem)] max-w-6xl px-6 py-16 md:py-24 ${className}`}
    >
      {children}
    </main>
  );
}
