import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { socialLinks } from "@/data/socialLinks";

/** Contact page with email and social links */
export default function ContactPage() {
  return (
    <PageWrapper>
      <SectionHeading
        title="Contact"
        subtitle="Want to work together? Reach out!"
      />

      <div className="text-center">
        <a
          href="mailto:nbradleyjoe19@gmail.com"
          className="font-mono text-lg text-accent transition-colors hover:text-accent-300"
        >
          nbradleyjoe19@gmail.com
        </a>
      </div>

      {/* Social links */}
      <div className="mt-8 flex justify-center gap-3">
        {socialLinks.map((link) => (
          <SocialIcon key={link.id} link={link} size={24} />
        ))}
      </div>
    </PageWrapper>
  );
}
