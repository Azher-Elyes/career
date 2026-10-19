export interface NavItem {
  label: string;
  href: string;
}

export interface HeroStripItem {
  label: string;
  value: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
export interface MilestoneLink {
  label: string;
  url: string;
}

export interface Milestone {
  id: string;
  side: 'left' | 'right';
  type: 'education' | 'project' | 'work';
  typeLabel: string;
  icon: string;
  date: string;
  title: string;
  subtitle: string;
  subtitleUrl?: string;
  subtitleLinks?: MilestoneLink[];
  detail: string;
  description: string;
  image: string;
  current?: boolean;
}