/**
 * Project properties
 */
export interface ProjectProps {
  title: string;
  slug: string;
  excerpt: string;
  overview: string;
  image: string;
  images: string[];
  video: string;
  dimension: number;
  features: string[];
  category: string;
  technologies: string[];
  timeline: {start: string; end: string };
  featured: boolean;
  team: [{name: string, role?: string, linkedin?: string, github?: string}];
  goals: string[];
  tags: string[];
  github?: string;
  demo?: string;
  release?: string;
  production?: string;
}

/**
 * Experience properties
 */
export interface ExperienceProps {
  title: string;
  company: {
    name: string;
    url: string;
    logo: string;
    location: string;
  };
  type: string;
  startedAt: string;
  endedAt: string | 'Present';
  skills: string[];
  employment_type: string;
  overview?: string;
}

/**
 * Education properties
 */
export interface EducationProps {
  title: string;
  type: string;
  school: {
    name: string;
    logo?: string;
    university?: string;
    city?: string;
  };
  startedAt: string;
  endedAt?: string | 'Present';
}

/**
 * Skill properties
 */
export interface SkillProps {
  name: string;
  icon: string;
  featured: boolean;
}

/**
 * Certificate properties
 */
export interface CertificateProps {
  title: string;
  credential_id?: string;
  image?: string;
  link: string;
  issuedAt: string;
  issuedBy: string;
  featured: boolean;
}
