export type Language = 'en' | 'id';

export interface ProjectItem {
  id: string;
  title: {
    en: string;
    id: string;
  };
  subtitle: {
    en: string;
    id: string;
  };
  category: 'data-bi' | 'iot-ai' | 'marine-ar';
  categoryLabel: {
    en: string;
    id: string;
  };
  awardBadge?: {
    en: string;
    id: string;
    type: 'gold' | 'silver' | 'honor';
  };
  image: string;
  summary: {
    en: string;
    id: string;
  };
  problem: {
    en: string;
    id: string;
  };
  solution: {
    en: string;
    id: string;
  };
  impact: {
    en: string;
    id: string;
  };
  tags: string[];
  metrics: {
    label: { en: string; id: string };
    value: string;
  }[];
  externalLink?: string;
}

export interface CredlyBadge {
  id: string;
  title: string;
  issuer: 'Microsoft' | 'AWS' | 'Adobe' | 'PMI' | 'Coursera & Others';
  credlyId: string;
  issueDate: string;
  badgeUrl: string;
  level: string;
  description: {
    en: string;
    id: string;
  };
  skills: string[];
  featured?: boolean;
  certificateUrl?: string;
  thumbnailUrl?: string;
  imageUrl?: string;
}

export interface AwardItem {
  id: string;
  year: string;
  medal: 'gold' | 'silver' | 'finalist' | 'honor';
  title: {
    en: string;
    id: string;
  };
  organization: string;
  location: string;
  description: {
    en: string;
    id: string;
  };
  highlightProject?: string;
  certificateUrl?: string;
  thumbnailUrl?: string;
  imageUrl?: string;
}

export interface ExperienceItem {
  role: {
    en: string;
    id: string;
  };
  organization: string;
  period: string;
  location: string;
  type: string;
  achievements: {
    en: string[];
    id: string[];
  };
}

export interface SkillCategory {
  title: {
    en: string;
    id: string;
  };
  skills: {
    name: string;
    level: string;
    iconName?: string;
  }[];
}

export interface PublicationItem {
  id: string;
  title: {
    en: string;
    id: string;
  };
  journalOrVenue: string;
  year: string;
  category: 'marine-spatial' | 'health-tech' | 'social-analytics' | 'policy-sdg';
  authors: string[];
  abstract: {
    en: string;
    id: string;
  };
  keyFindings: {
    en: string[];
    id: string[];
  };
  methodology: {
    en: string;
    id: string;
  };
  citation: string;
  tags: string[];
  awardNote?: {
    en: string;
    id: string;
  };
}

export interface ReferenceItem {
  id: string;
  name: string;
  role: {
    en: string;
    id: string;
  };
  organization: string;
  relationship: {
    en: string;
    id: string;
  };
  quote: {
    en: string;
    id: string;
  };
  contactEmail?: string;
  linkedinUrl?: string;
  verified: boolean;
  avatarInitial: string;
}

export interface EducationItem {
  id: string;
  degree: {
    en: string;
    id: string;
  };
  field: {
    en: string;
    id: string;
  };
  institution: string;
  period: string;
  location: string;
  gpa?: string;
  honors?: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  thesis?: {
    title: {
      en: string;
      id: string;
    };
    description: {
      en: string;
      id: string;
    };
  };
  keyHighlights: {
    en: string[];
    id: string[];
  };
  coursework?: string[];
  documentUrl?: string;
}

export interface ActivityItem {
  id: string;
  title: {
    en: string;
    id: string;
  };
  role: {
    en: string;
    id: string;
  };
  organization: string;
  period: string;
  category: 'leadership' | 'mentorship' | 'competition' | 'delegation';
  categoryLabel: {
    en: string;
    id: string;
  };
  summary: {
    en: string;
    id: string;
  };
  impactBullets: {
    en: string[];
    id: string[];
  };
  tags: string[];
}
