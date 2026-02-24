import { experiences } from "@/data/experience";

/** Vertical timeline displaying work experience */
export function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-px" />

      <div className="space-y-12">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={exp.id}
              className="relative flex flex-col md:flex-row md:items-start"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-dark-500 md:left-1/2" />

              {/* Desktop: alternating layout */}
              <div
                className={`ml-10 w-full md:ml-0 md:w-1/2 ${
                  isLeft ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                <div className="rounded-xl border border-white/5 bg-dark-50 p-6 transition-all duration-300 hover:border-accent/20">
                  {/* Date range */}
                  <p className="mb-1 font-mono text-xs text-accent">
                    {exp.dateRange}
                  </p>

                  {/* Job title */}
                  <h3 className="text-lg font-semibold text-white">
                    {exp.jobTitle}
                  </h3>

                  {/* Company */}
                  <p className="mb-4 text-sm text-gray-400">{exp.company}</p>

                  {/* Bullets */}
                  <ul
                    className={`space-y-2 text-sm text-gray-400 ${
                      isLeft ? "md:text-right" : ""
                    }`}
                  >
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent/60" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
