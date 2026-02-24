import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    jobTitle: "Lead Software Developer",
    company: "ShearFRAC Ltd.",
    dateRange: "Sept 2025 — Present",
    bullets: [
      "Lead a team of full-stack developers by defining technical direction, delegating work, conducting code reviews, and mentoring engineers to ensure high-quality, maintainable frontend and backend systems",
      "Drive Agile development practices including sprint planning, task estimation, backlog refinement, and delivery tracking to ensure projects are delivered on time and aligned with business priorities",
      "Resolved critical real-time data collection issues by leading root-cause analysis of AWS Batch ETL jobs, restoring pipeline reliability and reducing data loss, achieving a system uptime of >99.5%",
    ],
  },
  {
    id: "2",
    jobTitle: "Software Developer",
    company: "ShearFRAC Ltd.",
    dateRange: "Sept 2023 — Sept 2025",
    bullets: [
      "Develop and maintain full-stack web applications using TypeScript, Vue.js, Express.js, and OpenAPI with a strong focus on API integration and frontend-backend coordination",
      "Lead DevOps team using GitLab CI/CD, AWS, Docker, and Terraform, automating infrastructure with Terraform to eliminate manual AWS resource management and streamline developer workflows",
      "Administered Postgres databases using pgBackRest to ensure reliable backups and fast restores, improving data recovery resilience",
      "Implemented Keycloak-based OIDC authentication and authorization with client configuration, token management, and role mapping, enabling SSO across web applications and strengthening security with Keycloak securely hosted on AWS",
    ],
  },
  {
    id: "3",
    jobTitle: "Firmware Developer Intern",
    company: "Reliable Controls Corp.",
    dateRange: "Jan 2022 — Aug 2022",
    bullets: [
      "Collaborated on designing and debugging firmware for industrial HVAC systems",
      "Gained experience in Agile workflows and developed apps in Python, C++, and other languages",
      "Built a Python script that ingests JSON to deploy and test firmware, speeding client requests and cutting debug time",
    ],
  },
  {
    id: "4",
    jobTitle: "Systems Developer",
    company: "Canadian Natural Resources Ltd. (CNRL)",
    dateRange: "May 2021 — Aug 2021",
    bullets: [
      "Managed access control and handled data requests using SQL scripts",
      "Developed and tested a C# application to sync an online database with Active Directory",
    ],
  },
  {
    id: "5",
    jobTitle: "Deskside Support Analyst",
    company: "Canadian Natural Resources Ltd. (CNRL)",
    dateRange: "May 2020 — Aug 2020",
    bullets: [
      "Supported end-users with technical troubleshooting, hardware setup, and software configuration",
    ],
  },
];
