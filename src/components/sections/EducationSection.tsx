import { education } from "@/data/education";

/** Education timeline section */
export function EducationSection() {
  return (
    <div className="space-y-6">
      {education.map((edu) => (
        <div
          key={edu.id}
          className="rounded-xl border border-white/5 bg-dark-50 p-6 transition-all duration-300 hover:border-accent/20"
        >
          <p className="mb-1 font-mono text-xs text-accent">{edu.dateRange}</p>
          <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
          <p className="mb-3 text-sm text-gray-400">{edu.institution}</p>
          {edu.details && edu.details.length > 0 && (
            <ul className="space-y-1 text-sm text-gray-400">
              {edu.details.map((detail, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent/60" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
