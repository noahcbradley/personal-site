import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import type { SocialLink } from "@/types";

interface SocialIconProps {
  /** The social link data */
  link: SocialLink;
  /** Size of the icon */
  size?: number;
}

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
};

/** Renders a social media icon link */
export function SocialIcon({ link, size = 20 }: SocialIconProps) {
  const Icon = iconMap[link.icon];

  if (!Icon) return null;

  return (
    <a
      href={link.url}
      target={link.url.startsWith("mailto:") ? undefined : "_blank"}
      rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 transition-colors hover:bg-accent/10 hover:text-accent"
      aria-label={link.platform}
    >
      <Icon size={size} />
    </a>
  );
}
