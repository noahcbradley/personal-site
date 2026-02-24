import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { siteConfig } from "@/data/siteConfig";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

/** Sticky navigation bar with mobile hamburger menu */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="sticky top-0 z-50 border-b border-white/5 bg-dark-500/80 backdrop-blur-lg"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="font-mono text-lg font-bold text-white transition-colors hover:text-accent"
        >
          <span className="text-accent">{">"}</span> {siteConfig.name.toLowerCase().replace(/\s/g, "")}
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`flex flex-col items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-accent"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{link.label}</span>
                {isActive(link.to) && (
                  <span className="mt-0.5 h-0.5 w-full rounded-full bg-accent" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile slide-in drawer */}
      {isOpen && (
        <div className="animate-slide-in-right border-t border-white/5 bg-dark-500/95 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(link.to)
                      ? "bg-accent/10 text-accent"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
