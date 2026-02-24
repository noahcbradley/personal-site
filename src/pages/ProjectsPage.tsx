import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGrid } from "@/components/sections/ProjectGrid";

/** Projects page showcasing portfolio work */
export default function ProjectsPage() {
  return (
    <PageWrapper>
      <SectionHeading
        title="Projects"
        subtitle="A selection of things I've built"
      />
      <ProjectGrid />
    </PageWrapper>
  );
}
