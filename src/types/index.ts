/** Represents a project in the portfolio */
export interface Project {
  id: string;
  name: string;
  description: string;
  techTags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

/** Represents a work experience entry */
export interface Experience {
  id: string;
  jobTitle: string;
  company: string;
  dateRange: string;
  bullets: string[];
}

/** Represents an education entry */
export interface Education {
  id: string;
  degree: string;
  institution: string;
  dateRange: string;
  details?: string[];
}

/** Represents a social media or contact link */
export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

/** Site-wide configuration */
export interface SiteConfig {
  name: string;
  tagline: string;
  bio: string;
  metaDescription: string;
  techStack: string[];
  location: string;
  volunteering: string[];
  hobbies: string[];
}
