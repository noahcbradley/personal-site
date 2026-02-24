import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";

/** Grid of project cards */
export function ProjectGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <Card key={project.id}>
          {/* Project name */}
          <h3 className="mb-2 font-mono text-lg font-semibold text-white">
            {project.name}
          </h3>

          {/* Description */}
          <p className="mb-4 text-sm leading-relaxed text-gray-400">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {project.techTags.map((tag) => (
              <Badge key={tag} label={tag} />
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-accent"
                aria-label={`${project.name} GitHub repository`}
              >
                <FiGithub size={16} />
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-accent"
                aria-label={`${project.name} live demo`}
              >
                <FiExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}
