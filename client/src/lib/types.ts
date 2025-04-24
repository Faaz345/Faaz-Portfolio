// Common interfaces used throughout the application

export interface NavLink {
  id: string;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  proficiency: number;
}

export interface Project {
  id: number;
  title: string;
  icon: React.ReactNode;
  date: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  demoText?: string;
}

export interface Experience {
  id: number;
  company: string;
  title: string;
  period: string;
  responsibilities: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
