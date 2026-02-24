import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/sections/Timeline";
import { EducationSection } from "@/components/sections/EducationSection";
import { siteConfig } from "@/data/siteConfig";

/** Experience page with work history, education, volunteering, and hobbies */
export default function ExperiencePage() {
  return (
    <PageWrapper>
      <SectionHeading
        title="Experience"
        subtitle="Where I've worked and what I've built"
      />
      <Timeline />

      {/* Education */}
      <div className="mt-24">
        <SectionHeading title="Education" />
        <EducationSection />
      </div>

      {/* Volunteering */}
      <div className="mt-24">
        <SectionHeading title="Volunteering" />
        <div className="flex flex-wrap justify-center gap-3">
          {siteConfig.volunteering.map((org) => (
            <span
              key={org}
              className="rounded-lg border border-white/5 bg-dark-50 px-4 py-2 text-sm text-gray-300"
            >
              {org}
            </span>
          ))}
        </div>
      </div>

      {/* Hobbies */}
      <div className="mt-24">
        <SectionHeading title="Hobbies" />
        <div className="flex flex-wrap justify-center gap-3">
          {siteConfig.hobbies.map((hobby) => (
            <span
              key={hobby}
              className="rounded-lg border border-white/5 bg-dark-50 px-4 py-2 text-sm text-gray-300"
            >
              {hobby}
            </span>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
