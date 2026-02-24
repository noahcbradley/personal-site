import { type ButtonHTMLAttributes, type ReactNode } from "react";

/** Variants for the Button component */
type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual style of the button */
  variant?: ButtonVariant;
  /** Content to render inside the button */
  children: ReactNode;
  /** Optional link — renders as an anchor tag styled as a button */
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-dark-500 hover:bg-accent-300 font-semibold shadow-lg shadow-accent/20",
  secondary:
    "border border-accent/40 text-accent hover:bg-accent/10 font-medium",
  ghost: "text-gray-400 hover:text-accent hover:bg-white/5 font-medium",
};

/** Reusable button component with multiple style variants */
export function Button({
  variant = "primary",
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-dark-500 disabled:opacity-50 disabled:cursor-not-allowed";

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
