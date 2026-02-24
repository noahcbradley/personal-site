import { FiArrowUp } from "react-icons/fi";
import { siteConfig } from "@/data/siteConfig";
import { socialLinks } from "@/data/socialLinks";
import { SocialIcon } from "@/components/ui/SocialIcon";

/** Site footer with social links and back-to-top button */
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-dark-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10">
        {/* Social icons */}
        <div className="flex gap-2">
          {socialLinks.map((link) => (
            <SocialIcon key={link.id} link={link} />
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {siteConfig.name}. Built with React
          &amp; Tailwind.
        </p>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1 text-xs text-gray-500 transition-colors hover:text-accent"
          aria-label="Back to top"
        >
          <FiArrowUp size={14} />
          Back to top
        </button>
      </div>
    </footer>
  );
}
